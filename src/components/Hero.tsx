import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="bg-dark-bg py-8 md:py-16 mb-8">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Открывай кейсы и <span className="text-purple">выигрывай</span> крутые призы!
            </h1>
            <p className="text-dark-text text-lg">
              На Case Battle ты можешь открывать уникальные кейсы с гарантированными призами. 
              Попробуй удачу прямо сейчас и выиграй ценные предметы!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-purple hover:bg-purple-light text-white px-8 py-6">
                Открыть кейсы
              </Button>
              <Button variant="outline" className="border-purple text-purple hover:text-white hover:bg-purple px-8 py-6">
                Как это работает
              </Button>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="bg-dark-card rounded-lg px-4 py-3">
                <p className="text-purple font-bold text-xl">100,000+</p>
                <p className="text-dark-text text-sm">Открытых кейсов</p>
              </div>
              <div className="bg-dark-card rounded-lg px-4 py-3">
                <p className="text-purple font-bold text-xl">50,000+</p>
                <p className="text-dark-text text-sm">Счастливых игроков</p>
              </div>
              <div className="bg-dark-card rounded-lg px-4 py-3">
                <p className="text-purple font-bold text-xl">98%</p>
                <p className="text-dark-text text-sm">Положительных отзывов</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=1000" 
                alt="Case Battle - Открывай кейсы и выигрывай призы" 
                className="rounded-xl shadow-2xl w-full max-w-lg mx-auto"
              />
            </div>
            <div className="absolute top-0 -right-4 w-60 h-60 bg-purple opacity-20 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 -left-4 w-40 h-40 bg-purple opacity-20 rounded-full filter blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;