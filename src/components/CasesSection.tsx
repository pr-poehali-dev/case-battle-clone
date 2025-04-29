import { Button } from "@/components/ui/button";
import CaseCard from "./CaseCard";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const dummyCases = [
  {
    id: "case1",
    name: "Стартовый кейс",
    price: 299,
    imageUrl: "https://images.unsplash.com/photo-1605792657660-596af9009e82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtaW5nJTIwYm94fGVufDB8fDB8fHww",
    items: [
      { name: "Предмет 1", imageUrl: "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtaW5nJTIwaXRlbXxlbnwwfHwwfHx8MA%3D%3D", rarity: "common" },
      { name: "Предмет 2", imageUrl: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtaW5nJTIwaXRlbXxlbnwwfHwwfHx8MA%3D%3D", rarity: "uncommon" },
      { name: "Предмет 3", imageUrl: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtaW5nJTIwaXRlbXxlbnwwfHwwfHx8MA%3D%3D", rarity: "rare" },
      { name: "Предмет 4", imageUrl: "https://images.unsplash.com/photo-1605792657660-596af9009e82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtaW5nJTIwYm94fGVufDB8fDB8fHww", rarity: "epic" },
      { name: "Предмет 5", imageUrl: "https://images.unsplash.com/photo-1593035453605-40ac521668b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2FtaW5nJTIwaXRlbXxlbnwwfHwwfHx8MA%3D%3D", rarity: "legendary" },
    ]
  },
  {
    id: "case2",
    name: "Популярный кейс",
    price: 799,
    imageUrl: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtaW5nJTIwaXRlbXxlbnwwfHwwfHx8MA%3D%3D",
    items: [
      { name: "Предмет 1", imageUrl: "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtaW5nJTIwaXRlbXxlbnwwfHwwfHx8MA%3D%3D", rarity: "uncommon" },
      { name: "Предмет 2", imageUrl: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtaW5nJTIwaXRlbXxlbnwwfHwwfHx8MA%3D%3D", rarity: "rare" },
      { name: "Предмет 3", imageUrl: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtaW5nJTIwaXRlbXxlbnwwfHwwfHx8MA%3D%3D", rarity: "epic" },
      { name: "Предмет 4", imageUrl: "https://images.unsplash.com/photo-1605792657660-596af9009e82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtaW5nJTIwYm94fGVufDB8fDB8fHww", rarity: "epic" },
      { name: "Предмет 5", imageUrl: "https://images.unsplash.com/photo-1593035453605-40ac521668b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2FtaW5nJTIwaXRlbXxlbnwwfHwwfHx8MA%3D%3D", rarity: "legendary" },
    ]
  },
  {
    id: "case3",
    name: "Премиум кейс",
    price: 1999,
    imageUrl: "https://images.unsplash.com/photo-1593035453605-40ac521668b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2FtaW5nJTIwaXRlbXxlbnwwfHwwfHx8MA%3D%3D",
    items: [
      { name: "Предмет 1", imageUrl: "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtaW5nJTIwaXRlbXxlbnwwfHwwfHx8MA%3D%3D", rarity: "rare" },
      { name: "Предмет 2", imageUrl: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtaW5nJTIwaXRlbXxlbnwwfHwwfHx8MA%3D%3D", rarity: "epic" },
      { name: "Предмет 3", imageUrl: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtaW5nJTIwaXRlbXxlbnwwfHwwfHx8MA%3D%3D", rarity: "epic" },
      { name: "Предмет 4", imageUrl: "https://images.unsplash.com/photo-1605792657660-596af9009e82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtaW5nJTIwYm94fGVufDB8fDB8fHww", rarity: "legendary" },
      { name: "Предмет 5", imageUrl: "https://images.unsplash.com/photo-1593035453605-40ac521668b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2FtaW5nJTIwaXRlbXxlbnwwfHwwfHx8MA%3D%3D", rarity: "legendary" },
    ]
  },
  {
    id: "case4",
    name: "Luxury кейс",
    price: 4999,
    imageUrl: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtaW5nJTIwaXRlbXxlbnwwfHwwfHx8MA%3D%3D",
    items: [
      { name: "Предмет 1", imageUrl: "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtaW5nJTIwaXRlbXxlbnwwfHwwfHx8MA%3D%3D", rarity: "epic" },
      { name: "Предмет 2", imageUrl: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtaW5nJTIwaXRlbXxlbnwwfHwwfHx8MA%3D%3D", rarity: "epic" },
      { name: "Предмет 3", imageUrl: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtaW5nJTIwaXRlbXxlbnwwfHwwfHx8MA%3D%3D", rarity: "legendary" },
      { name: "Предмет 4", imageUrl: "https://images.unsplash.com/photo-1605792657660-596af9009e82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtaW5nJTIwYm94fGVufDB8fDB8fHww", rarity: "legendary" },
      { name: "Предмет 5", imageUrl: "https://images.unsplash.com/photo-1593035453605-40ac521668b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2FtaW5nJTIwaXRlbXxlbnwwfHwwfHx8MA%3D%3D", rarity: "legendary" },
    ]
  }
];

const CasesSection = () => {
  return (
    <section className="py-8 container mx-auto px-4 lg:px-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Популярные кейсы</h2>
        <Link to="/cases">
          <Button variant="ghost" className="text-purple hover:text-white hover:bg-purple/20">
            Все кейсы <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {dummyCases.map((caseItem) => (
          <CaseCard 
            key={caseItem.id}
            id={caseItem.id}
            name={caseItem.name}
            price={caseItem.price}
            imageUrl={caseItem.imageUrl}
            items={caseItem.items}
          />
        ))}
      </div>
    </section>
  );
};

export default CasesSection;