import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CategoryNavProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryNav = ({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryNavProps) => {
  return (
    <nav className="w-full border-b border-border bg-card/50 backdrop-blur-lg">
            <div className="container mx-auto flex items-center gap-4 px-4 py-4">
        <Carousel
          opts={{
            align: "start",
            dragFree: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2">
            {categories.map((category) => (
              <CarouselItem key={category} className="basis-auto pl-2">
                <Button
                  variant={activeCategory === category ? "secondary" : "ghost"}
                  onClick={() => onCategoryChange(category)}
                  className={`whitespace-nowrap text-sm font-medium transition-all ${activeCategory === category ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50" : "hover:bg-purple-600/10 hover:text-purple-400"}`}
                >
                  {category}
                </Button>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </nav>
  );
};

export default CategoryNav;
