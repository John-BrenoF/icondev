import * as LucideIcons from "lucide-react";
import { LucideIcon } from "lucide-react";

// Helper to convert icon name to SVG string representation
const iconToSvgString = (name: string) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-${name.toLowerCase()}"><title>${name}</title></svg>`;
};

// Get all available icons from lucide-react
const getAllLucideIcons = () => {
  const icons: { name: string; component: React.ReactNode; svgString: string; IconComponent: LucideIcon }[] = [];
  
  // Exclude non-icon exports
  const excludeKeys = ['createLucideIcon', 'Icon', 'icons', 'dynamicIconImports'];
  
  Object.keys(LucideIcons).forEach((key) => {
    if (!excludeKeys.includes(key)) {
      const IconComponent = (LucideIcons as any)[key] as LucideIcon;
      if (typeof IconComponent === 'function' || typeof IconComponent === 'object') {
        icons.push({
          name: key,
          component: <IconComponent size={32} />,
          svgString: iconToSvgString(key),
          IconComponent: IconComponent
        });
      }
    }
  });
  
  return icons;
};

const allAvailableIcons = getAllLucideIcons();

// Categorize icons based on their names
const categorizeIcons = () => {
  const categories: { [key: string]: typeof allAvailableIcons } = {
    "All Icons": allAvailableIcons,
    "Arrows & Navigation": [],
    "UI & Interface": [],
    "Media & Files": [],
    "Communication": [],
    "Development": [],
    "Business & Finance": [],
    "Social Media": [],
    "Weather & Nature": [],
    "Shopping & Commerce": [],
    "Education & Learning": [],
    "Health & Medical": [],
    "Transportation": [],
    "Sports & Activities": [],
    "Food & Drink": [],
    "Symbols & Shapes": [],
    "Miscellaneous": []
  };

  allAvailableIcons.forEach((icon) => {
    const name = icon.name.toLowerCase();
    
    // Arrows & Navigation
    if (name.includes('arrow') || name.includes('chevron') || name.includes('corner') || 
        name.includes('move') || name.includes('navigation') || name.includes('compass') ||
        name.includes('map') || name.includes('route')) {
      categories["Arrows & Navigation"].push(icon);
    }
    
    // UI & Interface
    else if (name.includes('menu') || name.includes('layout') || name.includes('grid') ||
             name.includes('list') || name.includes('panel') || name.includes('sidebar') ||
             name.includes('window') || name.includes('maximize') || name.includes('minimize') ||
             name.includes('square') || name.includes('circle') || name.includes('check') ||
             name.includes('x') || name.includes('plus') || name.includes('minus') ||
             name.includes('eye') || name.includes('settings') || name.includes('sliders')) {
      categories["UI & Interface"].push(icon);
    }
    
    // Media & Files
    else if (name.includes('file') || name.includes('folder') || name.includes('image') ||
             name.includes('video') || name.includes('music') || name.includes('audio') ||
             name.includes('camera') || name.includes('film') || name.includes('play') ||
             name.includes('pause') || name.includes('skip') || name.includes('volume') ||
             name.includes('mic') || name.includes('radio')) {
      categories["Media & Files"].push(icon);
    }
    
    // Communication
    else if (name.includes('mail') || name.includes('message') || name.includes('chat') ||
             name.includes('phone') || name.includes('bell') || name.includes('inbox') ||
             name.includes('send') || name.includes('at') || name.includes('hash')) {
      categories["Communication"].push(icon);
    }
    
    // Development
    else if (name.includes('code') || name.includes('terminal') || name.includes('git') ||
             name.includes('github') || name.includes('gitlab') || name.includes('bug') ||
             name.includes('cpu') || name.includes('server') || name.includes('database') ||
             name.includes('command') || name.includes('package') || name.includes('component') ||
             name.includes('brackets') || name.includes('binary')) {
      categories["Development"].push(icon);
    }
    
    // Business & Finance
    else if (name.includes('briefcase') || name.includes('building') || name.includes('bank') ||
             name.includes('chart') || name.includes('trending') || name.includes('pie') ||
             name.includes('bar') || name.includes('dollar') || name.includes('credit') ||
             name.includes('wallet') || name.includes('receipt') || name.includes('calculator') ||
             name.includes('percent') || name.includes('coins')) {
      categories["Business & Finance"].push(icon);
    }
    
    // Social Media
    else if (name.includes('facebook') || name.includes('twitter') || name.includes('instagram') ||
             name.includes('linkedin') || name.includes('youtube') || name.includes('twitch') ||
             name.includes('share') || name.includes('thumbs') || name.includes('heart') ||
             name.includes('star') || name.includes('bookmark') || name.includes('rss')) {
      categories["Social Media"].push(icon);
    }
    
    // Weather & Nature
    else if (name.includes('sun') || name.includes('moon') || name.includes('cloud') ||
             name.includes('rain') || name.includes('snow') || name.includes('wind') ||
             name.includes('tree') || name.includes('leaf') || name.includes('flower') ||
             name.includes('sprout') || name.includes('feather') || name.includes('flame')) {
      categories["Weather & Nature"].push(icon);
    }
    
    // Shopping & Commerce
    else if (name.includes('shopping') || name.includes('cart') || name.includes('bag') ||
             name.includes('store') || name.includes('tag') || name.includes('gift') ||
             name.includes('package') || name.includes('truck') || name.includes('box')) {
      categories["Shopping & Commerce"].push(icon);
    }
    
    // Education & Learning
    else if (name.includes('book') || name.includes('library') || name.includes('graduation') ||
             name.includes('school') || name.includes('pen') || name.includes('pencil') ||
             name.includes('edit') || name.includes('clipboard') || name.includes('award')) {
      categories["Education & Learning"].push(icon);
    }
    
    // Health & Medical
    else if (name.includes('heart') || name.includes('activity') || name.includes('pulse') ||
             name.includes('pill') || name.includes('syringe') || name.includes('stethoscope') ||
             name.includes('bandage') || name.includes('cross') || name.includes('ambulance')) {
      categories["Health & Medical"].push(icon);
    }
    
    // Transportation
    else if (name.includes('car') || name.includes('bus') || name.includes('train') ||
             name.includes('plane') || name.includes('ship') || name.includes('bike') ||
             name.includes('truck') || name.includes('rocket') || name.includes('ferry')) {
      categories["Transportation"].push(icon);
    }
    
    // Sports & Activities
    else if (name.includes('dumbbell') || name.includes('bike') || name.includes('football') ||
             name.includes('trophy') || name.includes('target') || name.includes('flame') ||
             name.includes('activity') || name.includes('zap')) {
      categories["Sports & Activities"].push(icon);
    }
    
    // Food & Drink
    else if (name.includes('coffee') || name.includes('cup') || name.includes('utensils') ||
             name.includes('pizza') || name.includes('apple') || name.includes('wine') ||
             name.includes('beer') || name.includes('egg') || name.includes('milk')) {
      categories["Food & Drink"].push(icon);
    }
    
    // Symbols & Shapes
    else if (name.includes('triangle') || name.includes('hexagon') || name.includes('diamond') ||
             name.includes('pentagon') || name.includes('octagon') || name.includes('infinity') ||
             name.includes('asterisk') || name.includes('atom') || name.includes('badge')) {
      categories["Symbols & Shapes"].push(icon);
    }
    
    // Miscellaneous - everything else
    else {
      categories["Miscellaneous"].push(icon);
    }
  });

  return categories;
};

export const categoryIcons = categorizeIcons();

// Export total count
export const totalIconCount = allAvailableIcons.length;
