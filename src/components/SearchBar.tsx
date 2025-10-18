import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="relative w-full max-w-md">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Buscar ícones..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10 bg-input border-border focus-visible:ring-ring"
      />
    </div>
  );
};

export default SearchBar;
