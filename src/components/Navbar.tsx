import { Button } from "@/components/ui/button";
import { Wallet, User, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-card border-b border-dark-border">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-purple animate-pulse-glow flex items-center justify-center">
              <span className="text-white font-bold">CB</span>
            </div>
            <span className="text-lg font-bold text-white hidden sm:block">Case Battle</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 items-center">
            <Link to="/" className="text-white hover:text-purple transition-colors px-2 py-1">
              Главная
            </Link>
            <Link to="/cases" className="text-white hover:text-purple transition-colors px-2 py-1">
              Кейсы
            </Link>
            <Link to="/battles" className="text-white hover:text-purple transition-colors px-2 py-1">
              Баттлы
            </Link>
            <Link to="/bonuses" className="text-white hover:text-purple transition-colors px-2 py-1">
              Бонусы
            </Link>
            <Link to="/upgrades" className="text-white hover:text-purple transition-colors px-2 py-1">
              Апгрейды
            </Link>
          </nav>
          
          {/* User Actions */}
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="hidden sm:flex items-center">
              <Wallet className="h-4 w-4 mr-2" />
              <span>0.00 ₽</span>
            </Button>
            
            <Button className="bg-purple hover:bg-purple-light">
              <User className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Войти</span>
            </Button>
            
            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-dark-border">
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className="text-white hover:text-purple transition-colors px-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Главная
              </Link>
              <Link 
                to="/cases" 
                className="text-white hover:text-purple transition-colors px-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Кейсы
              </Link>
              <Link 
                to="/battles" 
                className="text-white hover:text-purple transition-colors px-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Баттлы
              </Link>
              <Link 
                to="/bonuses" 
                className="text-white hover:text-purple transition-colors px-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Бонусы
              </Link>
              <Link 
                to="/upgrades" 
                className="text-white hover:text-purple transition-colors px-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Апгрейды
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;