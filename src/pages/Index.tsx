import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CasesSection from "@/components/CasesSection";
import LiveDrops from "@/components/LiveDrops";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-dark-bg text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <CasesSection />
        <LiveDrops />
        <div className="container mx-auto px-4 lg:px-6 py-10">
          <div className="bg-gradient-to-r from-purple/20 to-purple-dark/20 rounded-xl p-6 md:p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Присоединяйтесь к сообществу!</h2>
                <p className="text-gray-300 mb-6">
                  Уже более 50,000 игроков выбрали Case Battle. Зарегистрируйтесь сейчас и получите бонус на первое пополнение счета!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-purple hover:bg-purple-light text-white px-6 py-3 rounded-lg font-medium transition-colors">
                    Регистрация
                  </button>
                  <button className="border border-purple text-purple hover:bg-purple/10 px-6 py-3 rounded-lg font-medium transition-colors">
                    Узнать больше
                  </button>
                </div>
              </div>
              <div className="hidden md:block relative">
                <img 
                  src="https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?w=500" 
                  alt="Gaming community" 
                  className="rounded-lg shadow-xl w-full max-w-md mx-auto"
                />
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-purple opacity-20 rounded-full filter blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;