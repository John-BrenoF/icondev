import IconCard from "./IconCard";

interface Icon {
  name: string;
  component: React.ReactNode;
  svgString: string;
}

interface IconGridProps {
  icons: Icon[];
}

const IconGrid = ({ icons }: IconGridProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-6">
      {icons.map((icon) => (
        <IconCard
          key={icon.name}
          icon={icon.component}
          name={icon.name}
          svgString={icon.svgString}
        />
      ))}
    </div>
  );
};

export default IconGrid;
