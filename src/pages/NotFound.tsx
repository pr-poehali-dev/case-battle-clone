import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col bg-dark-bg">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-16 px-4">
        <div className="text-center max-w-md">
          <div className="text-purple text-9xl font-bold mb-4">404</div>
          <h1 className="text-3xl font-bold text-white mb-4">Страница не найдена</h1>
          <p className="text-dark-text mb-8">
            Упс! Похоже, страница, которую вы ищете, не существует или была перемещена.
          </p>
          <Link to="/">
            <Button className="bg-purple hover:bg-purple-light">
              Вернуться на главную
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;