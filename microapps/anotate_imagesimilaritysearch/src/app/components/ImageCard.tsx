
import { useState } from "react";
import { Maximize2, Edit, Trash2 } from "lucide-react";
import { Button } from "@bosch-annotate/anotate-controls";

interface ImageCardProps {
  src: string;
  alt?: string;
  title?: string;
  similarity?: number;
  onView?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

export const ImageCard = ({
  src,
  alt = "Image",
  title,
  similarity,
  onView,
  onEdit,
  onDelete,
}: ImageCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="image-card group bg-white rounded-lg overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 flex flex-col justify-end">
          {similarity !== undefined && (
            <div className="bg-black/60 text-white text-xs font-medium px-2 py-1 rounded-full w-fit mb-2">
              {Math.round(similarity * 100)}% match
            </div>
          )}
          {title && (
            <h3 className="text-white font-medium truncate text-sm">{title}</h3>
          )}
          <div className="flex gap-1 mt-2">
            {onView && (
              <Button
                size="icon"
                variant="secondary"
                className="h-7 w-7"
                onClick={(e) => {
                  e.stopPropagation();
                  onView();
                }}
              >
                <Maximize2 className="h-3.5 w-3.5" />
              </Button>
            )}
            {onEdit && (
              <Button
                size="icon"
                variant="secondary"
                className="h-7 w-7"
                onClick={(e) => {
                  e.stopPropagation();
                  onEdit();
                }}
              >
                <Edit className="h-3.5 w-3.5" />
              </Button>
            )}
            {onDelete && (
              <Button
                size="icon"
                variant="destructive"
                className="h-7 w-7"
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete();
                }}
              >
                <Trash2 className="h-3.5 w-3.5" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
