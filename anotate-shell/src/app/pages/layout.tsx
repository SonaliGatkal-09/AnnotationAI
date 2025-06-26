
import { useState } from "react";
import { Header } from "../components/Header";
import { AnalyticsDashboard } from "../components/AnalyticsDashboard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@bosch-annotate/anotate-controls";
import { BarChart2, Search, Images, Wand2, Box } from "lucide-react";
import React from "react";
import { Outlet } from "react-router-dom";

// Naviagations
const AnotateImagecreation = React.lazy(
  () => import('anotate_imagecreation/Module')
);

const AnotateImagesimilaritysearch = React.lazy(
  () => import('anotate_imagesimilaritysearch/Module')
);

const AnotateImagesearch = React.lazy(
  () => import('anotate_imagesearch/Module')
);

const AnotateImagedetection = React.lazy(
  () => import('anotate_imagedetection/Module')
);

// import { ImageSearch } from "@/components/ImageSearch";
// import { SimilaritySearch } from "@/components/SimilaritySearch";
// import { ImageGenerator } from "@/components/ImageGenerator";
// import { ObjectDetection } from "@/components/ObjectDetection";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Set the initial tab based on the current route
  useState(() => {
    const path = window.location.pathname;
    if (path === "/search") setActiveTab("search");
    else if (path === "/similarity") setActiveTab("similarity");
    else if (path === "/generate") setActiveTab("generate");
    else if (path === "/detect") setActiveTab("detect");
    else setActiveTab("dashboard");
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
          <Outlet />
      </main>
    </div>
  );
};

export default Index;
