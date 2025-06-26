
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "../utils";
import { Button } from "./button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "./command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./popover";
import { useState } from "react";

interface ModelOption {
  value: string;
  label: string;
  description?: string;
  category?: string;
}

interface ModelSelectorProps {
  options: ModelOption[];
  value?: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
}

export const ModelSelector = ({
  options,
  value,
  onValueChange,
  placeholder = "Select model...",
}: ModelSelectorProps) => {
  const [open, setOpen] = useState(false);
  
  const selectedOption = options.find((option) => option.value === value);

  const optionsByCategory = options.reduce((acc, option) => {
    const category = option.category || "Uncategorized";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(option);
    return acc;
  }, {} as Record<string, ModelOption[]>);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value ? selectedOption?.label : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder={`Search ${placeholder.toLowerCase()}`} />
          <CommandEmpty>No model found.</CommandEmpty>
          {Object.entries(optionsByCategory).map(([category, categoryOptions]) => (
            <CommandGroup key={category} heading={category}>
              {categoryOptions.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={() => {
                    onValueChange(option.value);
                    setOpen(false);
                  }}
                  className="flex items-center"
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  <div>
                    <div>{option.label}</div>
                    {option.description && (
                      <div className="text-xs text-muted-foreground">
                        {option.description}
                      </div>
                    )}
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </Command>
      </PopoverContent>
    </Popover>
  );
};
