'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  Compass,
  Heart, 
  Clock, 
  BookOpen, 
  Library,
  TrendingUp,
  Users,
  Settings,
  History,
  ThumbsUp,
  Download,
  User,
  HelpCircle,
  Flag,
  Lightbulb,
  Music,
  Gamepad2,
  Trophy,
  Newspaper,
  Shirt,
  Podcast,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navigationItems = [
  { href: '/', label: 'Home', icon: Home, section: 'main' },
  { href: '/explore', label: 'Explore', icon: Compass, section: 'main' },
  { href: '/subscriptions', label: 'Subscriptions', icon: Users, section: 'main' },
];

const youItems = [
  { href: '/channel', label: 'Your channel', icon: User, section: 'you' },
  { href: '/history', label: 'History', icon: History, section: 'you' },
  { href: '/reading-list', label: 'Reading list', icon: BookOpen, section: 'you' },
  { href: '/favorites', label: 'Favorites', icon: Heart, section: 'you' },
  { href: '/liked', label: 'Liked books', icon: ThumbsUp, section: 'you' },
  { href: '/downloads', label: 'Downloads', icon: Download, section: 'you' },
];

const subscriptionsItems = [
  { href: '/channel/classic-lit', label: 'Classic Literature', icon: BookOpen, section: 'subscriptions', avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop' },
  { href: '/channel/booktube-editorial', label: 'BookTube Editorial', icon: BookOpen, section: 'subscriptions', avatar: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop' },
  { href: '/channel/literary-voices', label: 'Literary Voices', icon: BookOpen, section: 'subscriptions', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop' },
  { href: '/channel/fantasy-realm', label: 'Fantasy Realm', icon: BookOpen, section: 'subscriptions', avatar: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop' },
];

const exploreItems = [
  { href: '/trending', label: 'Trending', icon: TrendingUp, section: 'explore' },
  { href: '/music', label: 'Music', icon: Music, section: 'explore' },
  { href: '/gaming', label: 'Gaming', icon: Gamepad2, section: 'explore' },
  { href: '/news', label: 'News', icon: Newspaper, section: 'explore' },
  { href: '/sports', label: 'Sports', icon: Trophy, section: 'explore' },
  { href: '/learning', label: 'Learning', icon: Lightbulb, section: 'explore' },
  { href: '/fashion', label: 'Fashion & Beauty', icon: Shirt, section: 'explore' },
  { href: '/podcasts', label: 'Podcasts', icon: Podcast, section: 'explore' },
];

const bottomItems = [
  { href: '/settings', label: 'Settings', icon: Settings, section: 'bottom' },
  { href: '/report', label: 'Report history', icon: Flag, section: 'bottom' },
  { href: '/help', label: 'Help', icon: HelpCircle, section: 'bottom' },
  { href: '/feedback', label: 'Send feedback', icon: Lightbulb, section: 'bottom' },
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
    icon: React.ComponentType<any>; 
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
      onClick={() => {
        // Close sidebar on mobile when clicking a link
        if (window.innerWidth < 1024) {
          onToggle();
        }
      }}
    >
      <Icon className="h-5 w-5 flex-shrink-0" />
      <span className={cn('transition-opacity duration-200', !isOpen && 'lg:opacity-0 lg:hidden')}>
        {label}
      </span>
    </Link>
  );

  const ChannelItem = ({ href, label, avatar }: { 
    href: string; 
    label: string; 
    avatar: string; 
  }) => (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
        'hover:bg-gray-100 dark:hover:bg-gray-800',
        'text-gray-700 dark:text-gray-300'
      )}
      onClick={() => {
        if (window.innerWidth < 1024) {
          onToggle();
        }
      }}
    >
      <img src={avatar} alt={label} className="h-6 w-6 rounded-full flex-shrink-0" />
      <span className={cn('transition-opacity duration-200 truncate', !isOpen && 'lg:opacity-0 lg:hidden')}>
        {label}
      </span>
    </Link>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className={cn(
        'fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transition-all duration-300 z-30',
        'hidden lg:block',
        isOpen ? 'w-64' : 'w-16'
      )}>
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto">
            <div className="p-4 space-y-1">
              {navigationItems.map((item) => (
                <NavItem key={item.href} {...item} />
              ))}
            </div>

            {isOpen && (
              <>
                <div className="border-t border-gray-200 dark:border-gray-800 my-2" />

                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                    You
                  </h3>
                  <div className="space-y-1">
                    {youItems.map((item) => (
                      <NavItem key={item.href} {...item} />
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-800 my-2" />

                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                    Subscriptions
                  </h3>
                  <div className="space-y-1">
                    {subscriptionsItems.map((item) => (
                      <ChannelItem key={item.href} href={item.href} label={item.label} avatar={item.avatar} />
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-800 my-2" />

                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                    Explore
                  </h3>
                  <div className="space-y-1">
                    {exploreItems.map((item) => (
                      <NavItem key={item.href} {...item} />
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-800 my-2" />

                <div className="p-4">
                  <div className="space-y-1">
                    {bottomItems.slice(0, 2).map((item) => (
                      <NavItem key={item.href} {...item} />
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          {isOpen && (
            <div className="border-t border-gray-200 dark:border-gray-800 p-4">
              {bottomItems.slice(2).map((item) => (
                <NavItem key={item.href} {...item} />
              ))}
            </div>
          )}
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <aside className={cn(
        'fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transition-all duration-300 z-30',
        'lg:hidden w-64',
        isOpen ? 'translate-x-0' : '-translate-x-full'
      )}>
        <div className="flex flex-col h-full">
          {/* Close button for mobile */}
          <div className="flex justify-end p-4 lg:hidden">
            <Button variant="ghost" size="icon" onClick={onToggle}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="p-4 space-y-1">
              {navigationItems.map((item) => (
                <NavItem key={item.href} {...item} />
              ))}
            </div>

            <div className="border-t border-gray-200 dark:border-gray-800 my-2" />

            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                You
              </h3>
              <div className="space-y-1">
                {youItems.map((item) => (
                  <NavItem key={item.href} {...item} />
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-800 my-2" />

            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                Subscriptions
              </h3>
              <div className="space-y-1">
                {subscriptionsItems.map((item) => (
                  <ChannelItem key={item.href} href={item.href} label={item.label} avatar={item.avatar} />
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-800 my-2" />

            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                Explore
              </h3>
              <div className="space-y-1">
                {exploreItems.map((item) => (
                  <NavItem key={item.href} {...item} />
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-800 my-2" />

            <div className="p-4">
              <div className="space-y-1">
                {bottomItems.slice(0, 2).map((item) => (
                  <NavItem key={item.href} {...item} />
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-800 p-4">
            {bottomItems.slice(2).map((item) => (
              <NavItem key={item.href} {...item} />
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}