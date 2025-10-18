import { useState, useMemo } from "react";
import CategoryNav from "@/components/CategoryNav";
import IconGrid from "@/components/IconGrid";
import SearchBar from "@/components/SearchBar";
import Pagination from "@/components/Pagination";
import { categoryIcons, totalIconCount } from "@/data/iconData";

const ICONS_PER_PAGE = 60;

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("All Icons");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const categories = Object.keys(categoryIcons);

  const filteredIcons = useMemo(() => {
    const icons =
      activeCategory in categoryIcons
        ? categoryIcons[activeCategory as keyof typeof categoryIcons]
        : [];
    
    if (!searchQuery) return icons;
    
    return icons.filter((icon) =>
      icon.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [activeCategory, searchQuery]);

  const totalPages = Math.ceil(filteredIcons.length / ICONS_PER_PAGE);
  const startIndex = (currentPage - 1) * ICONS_PER_PAGE;
  const endIndex = startIndex + ICONS_PER_PAGE;
  
  const paginatedIcons = useMemo(() => {
    return filteredIcons.slice(startIndex, endIndex);
  }, [filteredIcons, currentPage]);

  const handleCategoryChange = (category: string) => {
    if (category === activeCategory) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveCategory(category);
      setCurrentPage(1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => setIsAnimating(false), 50);
    }, 150);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };
  
  const handlePageChange = (page: number) => {
    if (page === currentPage) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => setIsAnimating(false), 50);
    }, 150);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-600 via-violet-600 to-pink-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
                <img src="/logo.png" alt="IconDev Logo" className="h-7 w-7" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground bg-gradient-to-r from-purple-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                  IconDev
                </h1>
                <p className="text-sm text-muted-foreground">
                  {totalIconCount.toLocaleString()} ícones SVG gratuitos
                </p>
              </div>
            </div>
            <SearchBar value={searchQuery} onChange={handleSearchChange} />
          </div>
        </div>
      </header>

      <CategoryNav
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      <main className={`container mx-auto transition-opacity duration-150 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
        {filteredIcons.length > 0 ? (
          <>
            <div className="px-6 pt-6 pb-2">
              <p className="text-sm text-muted-foreground">
                Mostrando {startIndex + 1} - {Math.min(endIndex, filteredIcons.length)} de {filteredIcons.length.toLocaleString()} ícones
              </p>
            </div>
            <IconGrid icons={paginatedIcons} />
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <p className="text-lg text-muted-foreground">Nenhum ícone encontrado</p>
            <p className="text-sm text-muted-foreground mt-2">
              Tente buscar por outro termo
            </p>
          </div>
        )}
      </main>

      <footer className="border-t border-border bg-card/50 backdrop-blur-lg mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-center gap-4">
            <a
              href="https://github.com/john-brenof"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group"
            >
              <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <span className="text-lg font-semibold">john-brenof</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
