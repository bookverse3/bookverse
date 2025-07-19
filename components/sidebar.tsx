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
  Podcast
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navigationItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/explore', label: 'Explore', icon: Compass },
  { href: '/subscriptions', label: 'Subscriptions', icon: Users },
];

const youItems = [
  { href: '/channel', label: 'Your channel', icon: User },
  { href: '/history', label: 'History', icon: History },
  { href: '/reading-list', label: 'Reading list', icon: BookOpen },
  { href: '/favorites', label: 'Favorites', icon: Heart },
  { href: '/liked', label: 'Liked books', icon: ThumbsUp },
  { href: '/downloads', label: 'Downloads', icon: Download },
];

const subscriptionsItems = [
  { href: '/channel/classic-lit', label: 'Classic Literature', avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop' },
  { href: '/channel/booktube-editorial', label: 'BookTube Editorial', avatar: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop' },
  { href: '/channel/literary-voices', label: 'Literary Voices', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop' },
  { href: '/channel/fantasy-realm', label: 'Fantasy Realm', avatar: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop' },
];

const exploreItems = [
  { href: '/trending', label: 'Trending', icon: TrendingUp },
  { href: '/music', label: 'Music', icon: Music },
  { href: '/gaming', label: 'Gaming', icon: Gamepad2 },
  { href: '/news', label: 'News', icon: Newspaper },
  { href: '/sports', label: 'Sports', icon: Trophy },
  { href: '/learning', label: 'Learning', icon: Lightbulb },
  { href: '/fashion', label: 'Fashion & Beauty', icon: Shirt },
  { href: '/podcasts', label: 'Podcasts', icon: Podcast },
];

const bottomItems = [
  { href: '/settings', label: 'Settings', icon: Settings },
  { href: '/report', label: 'Report history', icon: Flag },
  { href: '/help', label: 'Help', icon: HelpCircle },
  { href: '/feedback', label: 'Send feedback', icon: Lightbulb },
];

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const pathname = usePathname();

  const NavItem = ({ href, label, icon: Icon }: { 
    href: string; 
    label: string; 
    icon: React.ComponentType<any>; 
  }) => (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-6 px-6 py-2.5 text-sm font-medium transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg mx-3',
        pathname === href 
          ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white' 
          : 'text-gray-700 dark:text-gray-300'
      )}
      onClick={() => {
        // Close sidebar on mobile when clicking a link
        if (window.innerWidth < 1024) {
          onToggle();
        }
      }}
    >
      <Icon className="h-6 w-6 flex-shrink-0" />
      {isOpen && <span className="truncate">{label}</span>}
    </Link>
  );

  const ChannelItem = ({ href, label, avatar }: { 
    href: string; 
    label: string; 
    avatar: string; 
  }) => (
    <Link
      href={href}
      className="flex items-center gap-6 px-6 py-2.5 text-sm font-medium transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg mx-3 text-gray-700 dark:text-gray-300"
      onClick={() => {
        if (window.innerWidth < 1024) {
          onToggle();
        }
      }}
    >
      <img src={avatar} alt={label} className="h-6 w-6 rounded-full flex-shrink-0" />
      {isOpen && <span className="truncate">{label}</span>}
    </Link>
  );

  const SectionTitle = ({ title }: { title: string }) => (
    isOpen ? (
      <h3 className="text-sm font-medium text-gray-900 dark:text-white px-6 py-2 mt-4 mb-1">
        {title}
      </h3>
    ) : null
  );

  const Divider = () => (
    <div className="border-t border-gray-200 dark:border-gray-800 my-3 mx-3" />
  );

  return (
    <>
      {/* Sidebar */}
      <aside className={cn(
        'fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transition-all duration-300 z-30 overflow-y-auto',
        isOpen ? 'w-60' : 'w-16'
      )}>
        <div className="py-3">
          {/* Main Navigation */}
          <div className="space-y-1">
            {navigationItems.map((item) => (
              <NavItem key={item.href} {...item} />
            ))}
          </div>

          {isOpen && (
            <>
              <Divider />

              {/* You Section */}
              <div>
                <SectionTitle title="You" />
                <div className="space-y-1">
                  {youItems.map((item) => (
                    <NavItem key={item.href} {...item} />
                  ))}
                </div>
              </div>

              <Divider />

              {/* Subscriptions */}
              <div>
                <SectionTitle title="Subscriptions" />
                <div className="space-y-1">
                  {subscriptionsItems.map((item) => (
                    <ChannelItem key={item.href} href={item.href} label={item.label} avatar={item.avatar} />
                  ))}
                </div>
              </div>

              <Divider />

              {/* Explore */}
              <div>
                <SectionTitle title="Explore" />
                <div className="space-y-1">
                  {exploreItems.map((item) => (
                    <NavItem key={item.href} {...item} />
                  ))}
                </div>
              </div>

              <Divider />

              {/* Bottom Items */}
              <div className="space-y-1">
                {bottomItems.map((item) => (
                  <NavItem key={item.href} {...item} />
                ))}
              </div>
            </>
          )}
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={onToggle}
        />
      )}
    </>
  );
}