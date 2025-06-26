
import { useRef, useState, useEffect } from "react";
import { X, Edit, Check } from "lucide-react";
import { Button } from "@bosch-annotate/anotate-controls";
import { cn } from "@bosch-annotate/anotate-controls";

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

interface AnnotationCanvasProps {
  imageSrc: string;
  boxes: BoundingBox[];
  onBoxChange?: (boxes: BoundingBox[]) => void;
  editable?: boolean;
  className?: string;
}

export const AnnotationCanvas = ({
  imageSrc,
  boxes = [],
  onBoxChange,
  editable = true,
  className,
}: AnnotationCanvasProps) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [activeBoxId, setActiveBoxId] = useState<string | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const [isDrawing, setIsDrawing] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (imageRef.current && imageRef.current.complete) {
      setImageLoaded(true);
      setImageSize({
        width: imageRef.current.width,
        height: imageRef.current.height,
      });
    }
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
    if (imageRef.current) {
      setImageSize({
        width: imageRef.current.width,
        height: imageRef.current.height,
      });
    }
  };

  const handleBoxClick = (boxId: string) => {
    if (!editable) return;
    setActiveBoxId(activeBoxId === boxId ? null : boxId);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!editable || !canvasRef.current) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Check if we're clicking inside an existing box
    const clickedBox = (boxes || []).find((box) => {
      const boxX = box.x * imageSize.width;
      const boxY = box.y * imageSize.height;
      const boxWidth = box.width * imageSize.width;
      const boxHeight = box.height * imageSize.height;

      return (
        x >= boxX &&
        x <= boxX + boxWidth &&
        y >= boxY &&
        y <= boxY + boxHeight
      );
    });

    if (clickedBox) {
      handleBoxClick(clickedBox.id);
      return;
    }

    // Otherwise start drawing a new box
    setIsDrawing(true);
    setStartPos({ x, y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDrawing || !canvasRef.current || !editable) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, imageSize.width));
    const y = Math.max(0, Math.min(e.clientY - rect.top, imageSize.height));

    // Update the temporary drawing box
    const tempBox = document.getElementById("temp-box");
    if (tempBox) {
      const width = x - startPos.x;
      const height = y - startPos.y;

      if (width > 0 && height > 0) {
        tempBox.style.left = `${startPos.x}px`;
        tempBox.style.top = `${startPos.y}px`;
        tempBox.style.width = `${width}px`;
        tempBox.style.height = `${height}px`;
        tempBox.style.display = "block";
      } else if (width < 0 && height > 0) {
        tempBox.style.left = `${x}px`;
        tempBox.style.top = `${startPos.y}px`;
        tempBox.style.width = `${Math.abs(width)}px`;
        tempBox.style.height = `${height}px`;
        tempBox.style.display = "block";
      } else if (width > 0 && height < 0) {
        tempBox.style.left = `${startPos.x}px`;
        tempBox.style.top = `${y}px`;
        tempBox.style.width = `${width}px`;
        tempBox.style.height = `${Math.abs(height)}px`;
        tempBox.style.display = "block";
      } else {
        tempBox.style.left = `${x}px`;
        tempBox.style.top = `${y}px`;
        tempBox.style.width = `${Math.abs(width)}px`;
        tempBox.style.height = `${Math.abs(height)}px`;
        tempBox.style.display = "block";
      }
    }
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDrawing || !canvasRef.current || !editable) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, imageSize.width));
    const y = Math.max(0, Math.min(e.clientY - rect.top, imageSize.height));

    // Minimum size check
    const width = Math.abs(x - startPos.x);
    const height = Math.abs(y - startPos.y);
    
    if (width > 10 && height > 10) {
      // Calculate normalized coordinates
      const left = Math.min(startPos.x, x) / imageSize.width;
      const top = Math.min(startPos.y, y) / imageSize.height;
      const boxWidth = width / imageSize.width;
      const boxHeight = height / imageSize.height;

      // Create new box
      const newBox: BoundingBox = {
        id: `box-${Date.now()}`,
        x: left,
        y: top,
        width: boxWidth,
        height: boxHeight,
        label: "unlabeled",
        color: getRandomColor(),
      };

      const updatedBoxes = [...(boxes || []), newBox];
      onBoxChange && onBoxChange(updatedBoxes);
      setActiveBoxId(newBox.id);
    }

    // Hide temporary box
    const tempBox = document.getElementById("temp-box");
    if (tempBox) {
      tempBox.style.display = "none";
    }
    
    setIsDrawing(false);
  };

  const getRandomColor = () => {
    const colors = ["#9b87f5", "#7E69AB", "#6E59A5", "#D6BCFA", "#E5DEFF"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const deleteBox = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updatedBoxes = (boxes || []).filter((box) => box.id !== id);
    onBoxChange && onBoxChange(updatedBoxes);
    if (activeBoxId === id) {
      setActiveBoxId(null);
    }
  };

  const updateBoxLabel = (id: string, label: string) => {
    const updatedBoxes = (boxes || []).map((box) =>
      box.id === id ? { ...box, label } : box
    );
    onBoxChange && onBoxChange(updatedBoxes);
  };

  return (
    <div className={cn("annotation-canvas", className)}>
      <div
        ref={canvasRef}
        className="relative overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => setIsDrawing(false)}
      >
        <img
          ref={imageRef}
          src={imageSrc}
          alt="Annotation canvas"
          className="max-w-full h-auto"
          onLoad={handleImageLoad}
        />

        {/* Temporary drawing box */}
        <div
          id="temp-box"
          className="absolute border-2 border-dashed border-studio-purple bg-studio-purple/20 pointer-events-none"
          style={{ display: "none" }}
        ></div>

        {/* Render all bounding boxes */}
        {imageLoaded &&
          (boxes || []).map((box) => {
            const boxStyle = {
              left: `${box.x * imageSize.width}px`,
              top: `${box.y * imageSize.height}px`,
              width: `${box.width * imageSize.width}px`,
              height: `${box.height * imageSize.height}px`,
              borderColor: box.color,
              backgroundColor: `${box.color}20`,
            };

            const isActive = activeBoxId === box.id;

            return (
              <div
                key={box.id}
                className={`absolute border-2 cursor-pointer transition-all ${
                  isActive
                    ? "border-white shadow-lg"
                    : ""
                }`}
                style={boxStyle}
                onClick={() => handleBoxClick(box.id)}
              >
                <div
                  className={`absolute -top-7 left-0 bg-black/70 text-white text-xs px-2 py-1 rounded-t-md whitespace-nowrap flex items-center gap-1 ${
                    isActive ? "bg-studio-purple" : ""
                  }`}
                >
                  {isActive && editable ? (
                    <>
                      <input
                        type="text"
                        value={box.label}
                        onChange={(e) => updateBoxLabel(box.id, e.target.value)}
                        className="bg-transparent outline-none text-white w-24"
                        onClick={(e) => e.stopPropagation()}
                      />
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-4 w-4 text-white hover:text-white"
                        onClick={(e) => deleteBox(box.id, e)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </>
                  ) : (
                    <>
                      {box.label}
                      {box.confidence !== undefined && (
                        <span className="ml-1 text-gray-300">
                          ({Math.round(box.confidence * 100)}%)
                        </span>
                      )}
                    </>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
