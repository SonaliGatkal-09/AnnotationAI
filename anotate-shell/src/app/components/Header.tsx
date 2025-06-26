
import { Search, BarChart2, Images, Wand2, Box, ChevronDown } from "lucide-react";
import { Button } from "@bosch-annotate/anotate-controls";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const location = useLocation()
  // activate menu via browser url entry
  useEffect(() => {
    const activeId = (navItems.find(x => x.path === location.pathname)?.id) ?? navItems[0]?.id;
    setActiveTab(activeId)
  },[location])

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: BarChart2, path: "" },
    { id: "search", label: "Image Search", icon: Search, path: "/search" },
    { id: "similarity", label: "Similarity Search", icon: Images, path: "/similarity" },
    { id: "generate", label: "Generate Images", icon: Wand2, path: "/generate" },
    { id: "annotate", label: "Object Detection", icon: Box, path: "/detect" },
  ];

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-studio-purple flex items-center justify-center">
              <Box className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-heading font-bold">Annotation Studio</span>
          </div>

          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === item.id
                    ? "bg-studio-purple text-white"
                    : "text-gray-700 hover:bg-studio-bg"
                }`}
                onClick={() => setActiveTab(item.id)}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              Import Dataset
            </Button>
            <Button variant="default" size="sm">
              <span>New Project</span>
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>

            <div className="block md:hidden">
              <Button variant="ghost" size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
