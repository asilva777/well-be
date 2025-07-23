import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bell, Settings, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import GreetingMessage from './GreetingMessage';
import AuthModal from './AuthModal';
import NotificationPanel from './NotificationPanel';
import ProfileMenu from './ProfileMenu';

const Header = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showNavMenu, setShowNavMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleSettingsClick = () => {
    navigate('/settings');
  };

  const navigationLinks = [
    { name: 'HOME', url: 'https://home.cognitio-plus.com' },
    { name: 'SOLUTIONS', url: 'https://solutions.cognitio-plus.com' },
    { name: 'SERVICES', url: 'https://services.cognitio-plus.com' },
    { name: 'BLOG', url: 'https://blog.cognitio-plus.com' },
    { name: 'RESOURCES', url: 'https://resources.cognitio-plus.com' },
    { name: 'STORE', url: 'https://store.cognitio-plus.com' },
    { name: 'GROWTH TRIBE', url: 'https://growth.cognitio-plus.com' },
    { name: 'FAQ', url: 'https://faq.cognitio-plus.com' },
    { name: 'ABOUT US', url: 'https://about.cognitio-plus.com' },
    { name: 'POLICIES', url: 'https://policies.cognitio-plus.com' },
    { name: 'CONTACT US', url: 'https://contact.cognitio-plus.com' },
    { name: 'SUPPORT', url: 'https://support.cognitio-plus.com' },
    { name: 'APP', url: 'https://app.cognitio-plus.com' }
  ];

  return (
    <>
      <header className="bg-[#c80ec9] border-b border-[#b425aa] px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="https://cognitio-plus.com" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <img 
                  src="https://cognitio-plus.appimize.app/assets/apps/user_1097/app_3046/draft/icon/app_logo.png?1752092909" 
                  alt="Well-Be Logo" 
                  className="w-8 h-8 rounded-lg"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-[#f3e329] font-[Oswald]">
                  Well-Be
                </h1>
                <p className="text-xs text-white">by Cognitio+</p>
              </div>
            </a>
          </div>
          
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="sm"
              className="md:hidden text-white hover:bg-[#b425aa]"
              onClick={() => setShowNavMenu(!showNavMenu)}
            >
              {showNavMenu ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
            
            {isLoggedIn && (
              <Badge className="bg-[#f3e329] text-[#c80ec9] border-[#f3e329]">
                Premium
              </Badge>
            )}
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="relative text-white hover:bg-[#b425aa]"
              onClick={() => setShowNotifications(true)}
            >
              <Bell className="h-4 w-4" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#f3e329] rounded-full"></div>
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm"
              className="text-white hover:bg-[#b425aa]"
              onClick={handleSettingsClick}
            >
              <Settings className="h-4 w-4" />
            </Button>
            
            <ProfileMenu 
              isLoggedIn={isLoggedIn}
              onAuthClick={() => setShowAuthModal(true)}
              onLogout={handleLogout}
            />
          </div>
        </div>
        
        {showNavMenu && (
          <div className="mt-4 md:hidden">
            <div className="grid grid-cols-2 gap-2">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#f3e329] text-sm py-2 px-3 rounded hover:bg-[#b425aa] transition-colors font-[Roboto_Condensed]"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
        
        <GreetingMessage />
      </header>
      
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)}
        onLogin={handleLogin}
      />
      
      <NotificationPanel 
        isOpen={showNotifications} 
        onClose={() => setShowNotifications(false)} 
      />
    </>
  );
};

export default Header;
