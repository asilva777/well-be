import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { User, Settings, Crown, LogOut, UserCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProfileMenuProps {
  isLoggedIn: boolean;
  onAuthClick: () => void;
  onLogout: () => void;
}

const ProfileMenu = ({ isLoggedIn, onAuthClick, onLogout }: ProfileMenuProps) => {
  const navigate = useNavigate();

  if (!isLoggedIn) {
    return (
      <Button 
        variant="ghost" 
        size="sm"
        onClick={onAuthClick}
      >
        <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
          <User className="h-3 w-3 text-white" />
        </div>
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
            <User className="h-3 w-3 text-white" />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem>
          <UserCircle className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => navigate('/settings')}>
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => navigate('/subscription')}>
          <Crown className="mr-2 h-4 w-4" />
          <span>Upgrade to Premium</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileMenu;
