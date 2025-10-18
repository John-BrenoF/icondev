import { useState } from "react";
import { Copy, Download, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface IconCardProps {
  icon: React.ReactNode;
  name: string;
  svgString: string;
}

const IconCard = ({ icon, name, svgString }: IconCardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(svgString);
      setCopied(true);
      toast.success("SVG copiado para área de transferência!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Erro ao copiar SVG");
    }
  };

  const handleDownload = () => {
    const blob = new Blob([svgString], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${name}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast.success("SVG baixado com sucesso!");
  };

  return (
    <div className="group relative flex flex-col items-center justify-center rounded-xl border border-border bg-icon-card p-6 transition-all hover:bg-icon-card-hover hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative mb-4 text-foreground transition-transform group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]">
        {icon}
      </div>
      
      <p className="relative mb-3 text-xs text-muted-foreground font-medium group-hover:text-foreground transition-colors">{name}</p>
      
      <div className="relative flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button
          size="icon"
          variant="secondary"
          className="h-8 w-8 bg-purple-600/20 hover:bg-purple-600/40 border-purple-500/30"
          onClick={handleCopy}
          title="Copiar SVG"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
        
        <Button
          size="icon"
          variant="secondary"
          className="h-8 w-8 bg-purple-600/20 hover:bg-purple-600/40 border-purple-500/30"
          onClick={handleDownload}
          title="Baixar SVG"
        >
          <Download className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default IconCard;
