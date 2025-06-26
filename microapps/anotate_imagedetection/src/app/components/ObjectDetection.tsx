
import { useState } from "react";
import { Upload, Box, RefreshCw, Trash2, Save, Eye } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@bosch-annotate/anotate-controls";
import { Button, Badge } from "@bosch-annotate/anotate-controls";
import { ModelSelector } from "@bosch-annotate/anotate-controls";
import { Tabs, TabsList, TabsTrigger } from "@bosch-annotate/anotate-controls";
import { AnnotationCanvas } from "./AnnotationCanvas";

interface BoundingBox {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
  confidence?: number;
  color: string;
}

const modelOptions = [
  { value: "yolov8s", label: "YOLOv8 Small", category: "Object Detection" },
  { value: "yolov8m", label: "YOLOv8 Medium", category: "Object Detection" },
  { value: "yolov8l", label: "YOLOv8 Large", category: "Object Detection" },
  { value: "yolov8x", label: "YOLOv8 XLarge", category: "Object Detection" },
  { value: "detr", label: "DETR ResNet-50", category: "Object Detection" },
  { value: "faster-rcnn", label: "Faster R-CNN", category: "Object Detection" },
];

// Sample object detection results
const sampleDetections: BoundingBox[] = [
  { 
    id: "box-1", 
    x: 0.2, 
    y: 0.3, 
    width: 0.4, 
    height: 0.3, 
    label: "person", 
    confidence: 0.92,
    color: "#9b87f5" 
  },
  { 
    id: "box-2", 
    x: 0.6, 
    y: 0.5, 
    width: 0.3, 
    height: 0.2, 
    label: "car", 
    confidence: 0.87,
    color: "#7E69AB" 
  },
];

export const ObjectDetection = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState("yolov8s");
  const [isProcessing, setIsProcessing] = useState(false);
  const [annotations, setAnnotations] = useState<BoundingBox[]>([]);
  const [activeTab, setActiveTab] = useState("detect");

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setUploadedImage(result);
        setAnnotations([]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDetection = () => {
    if (!uploadedImage) return;
    
    setIsProcessing(true);
    
    // Simulate detection delay
    setTimeout(() => {
      setAnnotations(sampleDetections || []);
      setIsProcessing(false);
    }, 2000);
  };

  const handleClearAnnotations = () => {
    setAnnotations([]);
  };

  const handleBoxChange = (updatedBoxes: BoundingBox[]) => {
    setAnnotations(updatedBoxes || []);
  };

  const colors = ["#9b87f5", "#7E69AB", "#6E59A5", "#D6BCFA", "#E5DEFF"];
  
  return (
    <div className="w-full">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-xl">Object Detection and Annotation</CardTitle>
          <CardDescription>
            Detect objects in images and create annotations with SOTA models
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 w-[300px] mb-6">
              <TabsTrigger value="detect">Detect Objects</TabsTrigger>
              <TabsTrigger value="annotate">Manual Annotation</TabsTrigger>
            </TabsList>

            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                <div className="mb-4">
                  <label 
                    htmlFor="detection-image-upload" 
                    className={`flex flex-col items-center justify-center h-60 border-2 border-dashed rounded-lg cursor-pointer ${uploadedImage ? "border-muted" : "border-muted-foreground/25"}`}
                  >
                    {uploadedImage ? (
                      <div className="relative w-full h-full">
                        <img 
                          src={uploadedImage} 
                          alt="Uploaded image" 
                          className="w-full h-full object-contain"
                        />
                        <Button 
                          variant="outline" 
                          className="absolute bottom-2 right-2"
                          onClick={(e) => {
                            e.preventDefault();
                            setUploadedImage(null);
                            setAnnotations([]);
                          }}
                          size="sm"
                        >
                          Replace
                        </Button>
                      </div>
                    ) : (
                      <>
                        <div className="flex flex-col items-center justify-center gap-2 text-center p-6">
                          <div className="rounded-full bg-muted p-2">
                            <Upload className="h-5 w-5 text-muted-foreground" />
                          </div>
                          <div>
                            <p className="font-medium">
                              Click to upload an image
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              JPG, PNG or WEBP
                            </p>
                          </div>
                        </div>
                        <input 
                          id="detection-image-upload" 
                          type="file" 
                          accept="image/*" 
                          className="sr-only" 
                          onChange={handleImageUpload}
                        />
                      </>
                    )}
                  </label>
                </div>

                {uploadedImage && (
                  <>
                    <div className="space-y-4">
                      {activeTab === "detect" && (
                        <>
                          <div>
                            <ModelSelector
                              options={modelOptions}
                              value={selectedModel}
                              onValueChange={setSelectedModel}
                            />
                            <div className="text-xs text-muted-foreground mt-1">
                              Select a model for object detection
                            </div>
                          </div>
                          
                          <div className="flex gap-2">
                            <Button 
                              variant="default" 
                              className="flex-1"
                              disabled={isProcessing || !uploadedImage}
                              onClick={handleDetection}
                            >
                              {isProcessing ? (
                                <>
                                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                                  Processing...
                                </>
                              ) : (
                                <>
                                  <Box className="mr-2 h-4 w-4" />
                                  Detect Objects
                                </>
                              )}
                            </Button>
                            <Button 
                              variant="outline" 
                              disabled={annotations.length === 0}
                              onClick={handleClearAnnotations}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </>
                      )}
                      
                      {activeTab === "annotate" && (
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <p className="text-sm">Draw bounding boxes directly on the image</p>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {(colors || []).map((color, index) => (
                              <div 
                                key={index} 
                                className="w-8 h-8 rounded-full border cursor-pointer"
                                style={{ backgroundColor: color }}
                              />
                            ))}
                          </div>
                          <div className="flex gap-2">
                            <Button variant="default" className="flex-1">
                              <Save className="mr-2 h-4 w-4" />
                              Save Annotations
                            </Button>
                            <Button 
                              variant="outline" 
                              disabled={annotations.length === 0}
                              onClick={handleClearAnnotations}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>

              <div className="flex-1">
                {uploadedImage ? (
                  <>
                    <div className="mb-3 flex justify-between">
                      <h3 className="text-md font-medium">
                        {activeTab === "detect" ? "Detection Results" : "Manual Annotation"}
                      </h3>
                      <Badge variant="outline">
                        {annotations.length} {annotations.length === 1 ? "object" : "objects"}
                      </Badge>
                    </div>
                    <AnnotationCanvas 
                      imageSrc={uploadedImage} 
                      boxes={annotations}
                      onBoxChange={handleBoxChange}
                      editable={true}
                    />
                    
                    {annotations.length > 0 && (
                      <div className="mt-4">
                        <h4 className="text-sm font-medium mb-2">Detected Objects</h4>
                        <div className="space-y-2">
                          {(annotations || []).map((box) => (
                            <div key={box.id} className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div 
                                  className="w-3 h-3 rounded-full"
                                  style={{ backgroundColor: box.color }}
                                />
                                <span className="font-medium">{box.label}</span>
                                {box.confidence !== undefined && (
                                  <span className="text-xs text-muted-foreground">
                                    {Math.round(box.confidence * 100)}% confidence
                                  </span>
                                )}
                              </div>
                              <Button size="icon" variant="ghost" className="h-8 w-8">
                                <Eye className="h-4 w-4" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="border rounded-lg h-full flex items-center justify-center p-6 text-center">
                    <div className="max-w-xs">
                      <Box className="h-8 w-8 mx-auto text-muted-foreground mb-3" />
                      <h3 className="text-lg font-medium mb-1">No image selected</h3>
                      <p className="text-sm text-muted-foreground">
                        Upload an image to detect objects or create annotations
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};
