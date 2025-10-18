import { Button } from "@/components/ui/button";

interface CategoryNavProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryNav = ({ categories, activeCategory, onCategoryChange }: CategoryNavProps) => {
  return (
    <nav className="w-full border-b border-border bg-card/50 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "secondary" : "ghost"}
              onClick={() => onCategoryChange(category)}
              className={`whitespace-nowrap text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
                  : "hover:bg-purple-600/10 hover:text-purple-400"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default CategoryNav;
