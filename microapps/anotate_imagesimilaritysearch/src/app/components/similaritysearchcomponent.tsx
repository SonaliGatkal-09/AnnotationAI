
import { useState } from "react";
import { ImageCard } from "./ImageCard";
import { ModelSelector } from "@bosch-annotate/anotate-controls";
import { Upload, Image as ImageIcon, RefreshCw } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@bosch-annotate/anotate-controls";
import { Button,Slider,Badge } from "@bosch-annotate/anotate-controls";

// Sample data for demonstration
const sampleSimilarImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1579353977828-2a4eab540b9a", title: "Sunset at the beach", similarity: 0.92 },
  { id: 2, src: "https://images.unsplash.com/photo-1579762593131-b8945254345c", title: "Mountain landscape", similarity: 0.87 },
  { id: 3, src: "https://images.unsplash.com/photo-1584559582128-b8be739912e0", title: "Urban cityscape", similarity: 0.76 },
  { id: 4, src: "https://images.unsplash.com/photo-1564979045531-fa386a275b27", title: "Forest pathway", similarity: 0.68 },
  { id: 5, src: "https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6", title: "Ocean view", similarity: 0.61 },
  { id: 6, src: "https://images.unsplash.com/photo-1611816055460-618287c870bd", title: "Desert landscape", similarity: 0.57 },
];

const modelOptions = [
  { value: "resnet50", label: "ResNet-50", category: "Image Embedding" },
  { value: "efficientnet", label: "EfficientNet-B0", category: "Image Embedding" },
  { value: "vit", label: "Vision Transformer", category: "Image Embedding" },
];

export const SimilaritySearch = () => {
  const [selectedModel, setSelectedModel] = useState("resnet50");
  const [similarityThreshold, setSimilarityThreshold] = useState([0.5]);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<any[]>([]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setUploadedImage(result);
        
        // Simulate search delay
        setIsLoading(true);
        setTimeout(() => {
          setResults(sampleSimilarImages);
          setIsLoading(false);
        }, 1000);
      };
      reader.readAsDataURL(file);
    }
  };

  const filteredResults = results.filter(
    (image) => image.similarity >= similarityThreshold[0]
  );

  return (
    <div className="w-full">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-xl">Image Similarity Search</CardTitle>
          <CardDescription>
            Find visually similar images using image embedding models
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className={`flex-1 border-2 border-dashed rounded-lg ${uploadedImage ? "" : "border-muted-foreground/25"}`}>
              <label 
                htmlFor="image-upload" 
                className={`flex flex-col items-center justify-center h-60 md:h-80 cursor-pointer ${uploadedImage ? "p-4" : "p-6"}`}
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
                        setResults([]);
                      }}
                    >
                      Replace
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="flex flex-col items-center justify-center gap-3 text-center">
                      <div className="rounded-full bg-muted p-3">
                        <Upload className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-base font-medium">
                          Drag and drop an image, or click to browse
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          JPG, PNG or WEBP up to 10MB
                        </p>
                      </div>
                    </div>
                    <input 
                      id="image-upload" 
                      type="file" 
                      accept="image/*" 
                      className="sr-only" 
                      onChange={handleImageUpload}
                    />
                  </>
                )}
              </label>
            </div>

            <div className="space-y-4 lg:w-1/3">
              <div>
                <h3 className="text-sm font-medium mb-2">Select embedding model</h3>
                <ModelSelector
                  options={modelOptions}
                  value={selectedModel}
                  onValueChange={setSelectedModel}
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium">Similarity threshold</h3>
                  <Badge variant="secondary">
                    {Math.round(similarityThreshold[0] * 100)}%
                  </Badge>
                </div>
                <Slider
                  value={similarityThreshold}
                  onValueChange={setSimilarityThreshold}
                  min={0}
                  max={1}
                  step={0.01}
                />
              </div>

              <div className="pt-4">
                <Button 
                  variant="default" 
                  className="w-full"
                  disabled={!uploadedImage || isLoading}
                  onClick={() => {
                    setIsLoading(true);
                    // Simulate search delay
                    setTimeout(() => {
                      setResults(sampleSimilarImages);
                      setIsLoading(false);
                    }, 1000);
                  }}
                >
                  {isLoading ? (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      Finding matches...
                    </>
                  ) : (
                    <>
                      <ImageIcon className="mr-2 h-4 w-4" />
                      Find similar images
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {uploadedImage && (
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">
              Similar images
            </h3>
            {filteredResults.length > 0 ? (
              <span className="text-sm text-muted-foreground">
                {filteredResults.length} matches above {Math.round(similarityThreshold[0] * 100)}% threshold
              </span>
            ) : null}
          </div>
        
          {isLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-muted animate-pulse rounded-lg" />
              ))}
            </div>
          ) : filteredResults.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {filteredResults.map((image) => (
                <ImageCard
                  key={image.id}
                  src={image.src}
                  alt={image.title}
                  title={image.title}
                  similarity={image.similarity}
                  onView={() => console.log("View", image.id)}
                  onEdit={() => console.log("Edit", image.id)}
                />
              ))}
            </div>
          ) : results.length > 0 ? (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium mb-2">No matches found above threshold</h3>
              <p className="text-muted-foreground mb-4">
                Try lowering the similarity threshold to see more results
              </p>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};
