import { useEffect, useState } from "react";

interface LiveDrop {
  id: string;
  username: string;
  caseName: string;
  itemName: string;
  itemValue: number;
  itemImage: string;
  timestamp: Date;
}

const LiveDrops = () => {
  const [liveDrops, setLiveDrops] = useState<LiveDrop[]>([
    {
      id: "drop1",
      username: "Player123",
      caseName: "Премиум кейс",
      itemName: "Rare Item X",
      itemValue: 3500,
      itemImage: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=150",
      timestamp: new Date(Date.now() - 5000),
    },
    {
      id: "drop2",
      username: "GamerX",
      caseName: "Стартовый кейс",
      itemName: "Common Item Y",
      itemValue: 350,
      itemImage: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=150",
      timestamp: new Date(Date.now() - 25000),
    },
    {
      id: "drop3",
      username: "Winner777",
      caseName: "Luxury кейс",
      itemName: "Legendary Item Z",
      itemValue: 7800,
      itemImage: "https://images.unsplash.com/photo-1593035453605-40ac521668b4?w=150",
      timestamp: new Date(Date.now() - 45000),
    },
  ]);

  // Simulating live drops
  useEffect(() => {
    const interval = setInterval(() => {
      const randomNames = ["User" + Math.floor(Math.random() * 1000), "Gamer" + Math.floor(Math.random() * 500), "Player" + Math.floor(Math.random() * 200)];
      const randomCases = ["Стартовый кейс", "Популярный кейс", "Премиум кейс", "Luxury кейс"];
      const randomItems = ["Common Item", "Rare Find", "Epic Loot", "Legendary Treasure"];
      const randomImages = [
        "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=150",
        "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=150",
        "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=150",
        "https://images.unsplash.com/photo-1593035453605-40ac521668b4?w=150"
      ];
      
      const newDrop: LiveDrop = {
        id: "drop" + Date.now(),
        username: randomNames[Math.floor(Math.random() * randomNames.length)],
        caseName: randomCases[Math.floor(Math.random() * randomCases.length)],
        itemName: randomItems[Math.floor(Math.random() * randomItems.length)] + " " + Math.floor(Math.random() * 100),
        itemValue: Math.floor(Math.random() * 10000) + 100,
        itemImage: randomImages[Math.floor(Math.random() * randomImages.length)],
        timestamp: new Date(),
      };
      
      setLiveDrops(prev => [newDrop, ...prev.slice(0, 9)]);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Calculate time ago
  const getTimeAgo = (timestamp: Date) => {
    const seconds = Math.floor((Date.now() - timestamp.getTime()) / 1000);
    
    if (seconds < 60) return `${seconds} сек. назад`;
    if (seconds < 3600) return `${Math.floor(seconds / 60)} мин. назад`;
    return `${Math.floor(seconds / 3600)} ч. назад`;
  };

  return (
    <div className="py-6 container mx-auto px-4 lg:px-6">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Недавние дропы</h2>
      
      <div className="bg-dark-card rounded-lg p-4 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-dark-border">
              <tr>
                <th className="text-left py-3 text-dark-text font-semibold">Пользователь</th>
                <th className="text-left py-3 text-dark-text font-semibold">Кейс</th>
                <th className="text-left py-3 text-dark-text font-semibold">Предмет</th>
                <th className="text-right py-3 text-dark-text font-semibold">Стоимость</th>
                <th className="text-right py-3 text-dark-text font-semibold">Время</th>
              </tr>
            </thead>
            <tbody>
              {liveDrops.map((drop) => (
                <tr key={drop.id} className="border-b border-dark-border hover:bg-dark-border/20 transition-colors">
                  <td className="py-3 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-purple/20 flex items-center justify-center">
                      <span className="text-xs text-white">{drop.username.substring(0, 2).toUpperCase()}</span>
                    </div>
                    <span className="text-white truncate max-w-[80px] sm:max-w-none">
                      {drop.username}
                    </span>
                  </td>
                  <td className="py-3 text-dark-text">{drop.caseName}</td>
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <img src={drop.itemImage} alt={drop.itemName} className="w-8 h-8 rounded object-cover" />
                      <span className="text-white truncate max-w-[80px] sm:max-w-none">{drop.itemName}</span>
                    </div>
                  </td>
                  <td className="py-3 text-right text-purple font-semibold">{drop.itemValue.toFixed(2)} ₽</td>
                  <td className="py-3 text-right text-dark-text text-sm">{getTimeAgo(drop.timestamp)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LiveDrops;