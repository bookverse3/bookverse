'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  PlaySquare, 
  Heart, 
  Clock, 
  BookOpen, 
  Library,
  TrendingUp,
  Users,
  Grid3X3,
  Settings
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navigationItems = [
  { href: '/', label: 'Home', icon: Home, section: 'main' },
  { href: '/shorts', label: 'Shorts', icon: PlaySquare, section: 'main' },
  { href: '/subscriptions', label: 'Subscriptions', icon: Users, section: 'main' },
];

const libraryItems = [
  { href: '/library', label: 'Your Library', icon: Library, section: 'library' },
  { href: '/history', label: 'History', icon: Clock, section: 'library' },
  { href: '/favorites', label: 'Favorites', icon: Heart, section: 'library' },
  { href: '/reading-list', label: 'Reading List', icon: BookOpen, section: 'library' },
];

const discoverItems = [
  { href: '/trending', label: 'Trending', icon: TrendingUp, section: 'discover' },
  { href: '/authors', label: 'Authors', icon: Users, section: 'discover' },
  { href: '/genres', label: 'Browse Genres', icon: Grid3X3, section: 'discover' },
];

const bottomItems = [
  { href: '/settings', label: 'Settings', icon: Settings, section: 'bottom' },
];

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const pathname = usePathname();

  const NavItem = ({ href, label, icon: Icon, section }: { 
    href: string; 
    label: string; 
    icon: any; 
    section: string; 
  }) => (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
        'hover:bg-gray-100 dark:hover:bg-gray-800',
        pathname === href 
          ? 'bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400' 
          : 'text-gray-700 dark:text-gray-300'
      )}
    >
      <Icon className="h-5 w-5 flex-shrink-0" />
      <span className={cn('transition-opacity duration-200', !isOpen && 'lg:opacity-0 lg:hidden')}>
        {label}
      </span>
    </Link>
  );

  return (
    <aside className={cn(
      'fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transition-all duration-300 z-30',
      'lg:relative lg:top-0 lg:h-screen lg:border-t-0',
      isOpen ? 'w-64' : 'w-16 lg:w-20',
      'lg:block',
      !isOpen && 'hidden lg:block'
    )}>
      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          <div className="p-4 space-y-1">
            {navigationItems.map((item) => (
              <NavItem key={item.href} {...item} />
            ))}
          </div>

          <div className="border-t border-gray-200 dark:border-gray-800 my-2" />

          <div className="p-4">
            <h3 className={cn(
              'text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3',
              !isOpen && 'lg:hidden'
            )}>
              Your Library
            </h3>
            <div className="space-y-1">
              {libraryItems.map((item) => (
                <NavItem key={item.href} {...item} />
              ))}
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-800 my-2" />

          <div className="p-4">
            <h3 className={cn(
              'text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3',
              !isOpen && 'lg:hidden'
            )}>
              Discover
            </h3>
            <div className="space-y-1">
              {discoverItems.map((item) => (
                <NavItem key={item.href} {...item} />
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 p-4">
          {bottomItems.map((item) => (
            <NavItem key={item.href} {...item} />
          ))}
        </div>
      </div>
    </aside>
  );
}