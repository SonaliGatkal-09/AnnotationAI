
import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { ImageCard } from "./ImageCard";
import { ModelSelector } from "@bosch-annotate/anotate-controls";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@bosch-annotate/anotate-controls";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@bosch-annotate/anotate-controls";
import { Button, Badge } from "@bosch-annotate/anotate-controls";
import { Info } from "lucide-react";

// Sample data for demonstration
const sampleImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1579353977828-2a4eab540b9a", title: "Sunset at the beach" },
  { id: 2, src: "https://images.unsplash.com/photo-1579762593131-b8945254345c", title: "Mountain landscape" },
  { id: 3, src: "https://images.unsplash.com/photo-1584559582128-b8be739912e0", title: "Urban cityscape" },
  { id: 4, src: "https://images.unsplash.com/photo-1564979045531-fa386a275b27", title: "Forest pathway" },
  { id: 5, src: "https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6", title: "Ocean view" },
  { id: 6, src: "https://images.unsplash.com/photo-1611816055460-618287c870bd", title: "Desert landscape" },
];

const modelOptions = [
  { value: "clip-vit-base", label: "CLIP ViT-B/32", category: "Vector Embedding" },
  { value: "clip-vit-large", label: "CLIP ViT-L/14", category: "Vector Embedding" },
  { value: "open-clip", label: "OpenCLIP ViT-H/14", category: "Vector Embedding" },
];

export const ImageSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedModel, setSelectedModel] = useState("clip-vit-base");
  const [searchResults, setSearchResults] = useState<Array<any>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("semantic");

  const handleSearch = (query: string) => {
    if (!query.trim()) return;
    
    setIsLoading(true);
    setSearchQuery(query);
    
    // Simulate search delay
    setTimeout(() => {
      // In a real app, this would call an API with the embeddings model
      setSearchResults(sampleImages || []);
      setIsLoading(false);
    }, 1000);
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value || "");
  };

  return (
    <div className="w-full">
      <Card className="mb-6">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle className="text-xl">Prompt-based Image Search</CardTitle>
              <CardDescription>
                Use natural language to search for images based on semantic meaning
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="gap-1">
                <Info className="h-3 w-3" />
                Using {modelOptions.find(m => m.value === selectedModel)?.label || "Default Model"}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-2 w-[300px]">
                <TabsTrigger value="semantic">Semantic Search</TabsTrigger>
                <TabsTrigger value="metadata">Metadata Search</TabsTrigger>
              </TabsList>
              <TabsContent value="semantic" className="pt-4">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <SearchBar
                        placeholder="Describe the images you're looking for..."
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                        onSearch={handleSearch}
                      />
                    </div>
                    <div className="w-full sm:w-60">
                      <ModelSelector
                        options={modelOptions}
                        value={selectedModel}
                        onValueChange={setSelectedModel}
                      />
                    </div>
                  </div>
                  
                  <div className="text-sm text-muted-foreground">
                    Try: "sunset over mountains", "people working in office", "food on a plate"
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="metadata" className="pt-4">
                <div className="flex flex-col gap-4">
                  <SearchBar placeholder="Search by file name, tags, or other metadata..." />
                  <div className="text-sm text-muted-foreground">
                    Search by filename, creation date, size, tags and other metadata
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </CardContent>
      </Card>

      {searchQuery && (
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">
              Results for "{searchQuery}"
            </h3>
            {searchResults && searchResults.length > 0 && (
              <span className="text-sm text-muted-foreground">
                {searchResults.length} results
              </span>
            )}
          </div>
        
          {isLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-muted animate-pulse rounded-lg" />
              ))}
            </div>
          ) : searchResults && searchResults.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {searchResults.map((image) => (
                <ImageCard
                  key={image.id}
                  src={image.src}
                  alt={image.title}
                  title={image.title}
                  onView={() => console.log("View", image.id)}
                  onEdit={() => console.log("Edit", image.id)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium mb-2">No results found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search query or select a different embedding model
              </p>
              <Button onClick={() => setSearchQuery("")}>Clear search</Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
