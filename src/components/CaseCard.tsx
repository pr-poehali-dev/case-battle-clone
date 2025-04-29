import { Button } from "@/components/ui/button";

interface CaseCardProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  items: {
    name: string;
    imageUrl: string;
    rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  }[];
}

const CaseCard = ({ id, name, price, imageUrl, items }: CaseCardProps) => {
  // Determine border color based on price range
  const getBorderClass = () => {
    if (price < 500) return "border-gray-600";
    if (price < 1000) return "border-blue-600";
    if (price < 2500) return "border-purple";
    return "border-yellow-600";
  };

  return (
    <div className={`bg-dark-card rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300 border ${getBorderClass()}`}>
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-white truncate">{name}</h3>
          <span className="bg-purple text-white px-2 py-1 rounded text-xs font-medium">
            {price.toFixed(2)} ₽
          </span>
        </div>
        
        <div className="relative mb-4 aspect-square overflow-hidden rounded-md">
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        
        <div className="flex space-x-1 mb-3">
          {items.slice(0, 5).map((item, index) => (
            <div 
              key={index} 
              className="w-1/5 aspect-square rounded-md overflow-hidden"
              title={item.name}
            >
              <img 
                src={item.imageUrl} 
                alt={item.name} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        
        <Button className="w-full bg-purple hover:bg-purple-light">
          Открыть кейс
        </Button>
      </div>
    </div>
  );
};

export default CaseCard;