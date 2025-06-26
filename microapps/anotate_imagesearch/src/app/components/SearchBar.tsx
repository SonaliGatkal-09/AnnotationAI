
import { Search } from "lucide-react";
import { Button, Input } from "@bosch-annotate/anotate-controls";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar = ({
  placeholder = "Search images...",
  onSearch,
  value = "",
  onChange,
}: SearchBarProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch && onSearch(value || "");
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-3xl gap-2">
      <div className="relative flex-grow">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          placeholder={placeholder}
          className="pl-9 pr-12 py-6 text-base rounded-lg border-muted"
          value={value}
          onChange={onChange}
        />
      </div>
      <Button type="submit" className="px-6">Search</Button>
    </form>
  );
};
