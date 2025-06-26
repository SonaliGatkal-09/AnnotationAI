
import { useState } from "react";
import { Wand2, RefreshCw, Download, Copy, Check, Image as ImageIcon, Sparkles } from "lucide-react";
import { Button, Separator, Slider, Textarea } from "@bosch-annotate/anotate-controls";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@bosch-annotate/anotate-controls";
import { ModelSelector } from "@bosch-annotate/anotate-controls";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@bosch-annotate/anotate-controls";

const modelOptions = [
  { 
    value: "stable-diffusion-xl", 
    label: "Stable Diffusion XL",
    description: "High quality image generation",
    category: "Text-to-Image" 
  },
  { 
    value: "stable-diffusion-3", 
    label: "Stable Diffusion 3",
    description: "Latest generation model",
    category: "Text-to-Image" 
  },
  { 
    value: "midjourney-v5", 
    label: "Midjourney v5",
    description: "Artistic style generation",
    category: "Text-to-Image" 
  },
];

// Sample generated images for demonstration
const sampleGeneratedImages = [
  "https://images.unsplash.com/photo-1579353977828-2a4eab540b9a",
  "https://images.unsplash.com/photo-1579762593131-b8945254345c",
  "https://images.unsplash.com/photo-1584559582128-b8be739912e0",
  "https://images.unsplash.com/photo-1564979045531-fa386a275b27",
];

export const ImageGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [negativePrompt, setNegativePrompt] = useState("");
  const [selectedModel, setSelectedModel] = useState("stable-diffusion-xl");
  const [numImages, setNumImages] = useState([4]);
  const [guidance, setGuidance] = useState([7.5]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    if (!prompt) return;
    
    setIsGenerating(true);
    
    // Simulate generation delay
    setTimeout(() => {
      setGeneratedImages(sampleGeneratedImages.slice(0, numImages[0]));
      setIsGenerating(false);
    }, 3000);
  };

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const promptSuggestions = [
    "A professional photograph of a car on a mountain road at sunrise",
    "An aerial view of a city with skyscrapers and parks",
    "A close-up photo of a cat with green eyes looking at the camera",
    "A plate of food in a restaurant with soft background lighting",
  ];

  return (
    <div className="w-full">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-xl">Generate Synthetic Images</CardTitle>
          <CardDescription>
            Create realistic images using stable diffusion models
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Tabs defaultValue="text-to-image">
            <TabsList>
              <TabsTrigger value="text-to-image">Text to Image</TabsTrigger>
              <TabsTrigger value="image-to-image" disabled>Image to Image</TabsTrigger>
              <TabsTrigger value="inpainting" disabled>Inpainting</TabsTrigger>
            </TabsList>
            <TabsContent value="text-to-image" className="space-y-4 pt-4">
              <div>
                <div className="mb-2">
                  <ModelSelector
                    options={modelOptions}
                    value={selectedModel}
                    onValueChange={setSelectedModel}
                  />
                </div>
                <div className="text-xs text-muted-foreground">
                  Using {modelOptions.find(m => m.value === selectedModel)?.description}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm font-medium">Prompt</label>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-5 text-xs gap-1"
                    onClick={handleCopyPrompt}
                  >
                    {copied ? (
                      <>
                        <Check className="h-3 w-3" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </Button>
                </div>
                <Textarea
                  placeholder="Describe the image you want to generate in detail..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="resize-none h-24"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Negative prompt</label>
                <Textarea
                  placeholder="Elements to exclude from the generated image..."
                  value={negativePrompt}
                  onChange={(e) => setNegativePrompt(e.target.value)}
                  className="resize-none h-16"
                />
              </div>

              <Separator />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Number of images</label>
                    <span className="text-sm text-muted-foreground">{numImages[0]}</span>
                  </div>
                  <Slider
                    value={numImages}
                    onValueChange={setNumImages}
                    min={1}
                    max={4}
                    step={1}
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Guidance scale</label>
                    <span className="text-sm text-muted-foreground">{guidance[0]}</span>
                  </div>
                  <Slider
                    value={guidance}
                    onValueChange={setGuidance}
                    min={1}
                    max={20}
                    step={0.5}
                  />
                </div>
              </div>

              <div className="pt-2">
                <Button
                  onClick={handleGenerate}
                  className="w-full"
                  disabled={isGenerating || !prompt}
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Wand2 className="mr-2 h-4 w-4" />
                      Generate
                    </>
                  )}
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col">
          <div className="text-sm text-muted-foreground mb-2">Try these example prompts:</div>
          <div className="flex flex-wrap gap-2">
            {promptSuggestions.map((suggestion, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="text-xs"
                onClick={() => setPrompt(suggestion)}
              >
                <Sparkles className="mr-1 h-3 w-3" />
                {suggestion.slice(0, 30)}...
              </Button>
            ))}
          </div>
        </CardFooter>
      </Card>

      {generatedImages.length > 0 && (
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Generated Images</h3>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Download All
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {generatedImages.map((src, index) => (
              <div key={index} className="relative rounded-lg overflow-hidden border">
                <img
                  src={src}
                  alt={`Generated image ${index + 1}`}
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute bottom-0 right-0 p-2">
                  <Button size="icon" variant="secondary" className="rounded-full">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
