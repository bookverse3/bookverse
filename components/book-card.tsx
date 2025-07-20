import Link from 'next/link';
import Image from 'next/image';
import { Clock, Eye, ThumbsUp } from 'lucide-react';
import { Book } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

interface BookCardProps {
  book: Book;
  size?: 'default' | 'small';
}

export function BookCard({ book, size = 'default' }: BookCardProps) {
  const isSmall = size === 'small';
  
  return (
    <Link href={`/book/${book.id}`} className="group block">
      <div className={`bg-white dark:bg-gray-800 rounded-lg lg:rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden ${
        isSmall ? 'max-w-sm' : ''
      }`}>
        <div className="relative">
          <div className={`relative ${isSmall ? 'aspect-[3/2]' : 'aspect-video'} overflow-hidden`}>
            <Image
              src={book.cover}
              alt={book.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Reading time badge */}
            <div className="absolute bottom-2 right-2">
              <Badge className="bg-black/80 text-white text-xs px-2 py-1">
                <Clock className="h-3 w-3 mr-1" />
                {book.readingTime} min read
              </Badge>
            </div>

            {/* Category badge */}
            <div className="absolute top-2 left-2">
              <Badge className={`text-xs px-2 py-1 ${getCategoryColor(book.category)}`}>
                {book.category}
              </Badge>
            </div>
          </div>
        </div>

        <div className={`p-3 lg:p-4 ${isSmall ? 'p-3' : ''}`}>
          <h3 className={`font-semibold text-gray-900 dark:text-white line-clamp-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors ${
            isSmall ? 'text-sm mb-2' : 'text-sm lg:text-base mb-2 lg:mb-3'
          }`}>
            {book.title}
          </h3>

          <div className="flex items-center gap-2 lg:gap-3 mb-2 lg:mb-3">
            <Avatar className={isSmall ? 'h-6 w-6' : 'h-8 w-8'}>
              <AvatarImage src={book.channelAvatar} />
              <AvatarFallback className="text-xs">
                {book.channel.slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className={`font-medium text-gray-900 dark:text-white ${isSmall ? 'text-xs' : 'text-sm'}`}>
                {book.channel}
              </p>
              <p className={`text-gray-500 dark:text-gray-400 ${isSmall ? 'text-xs' : 'text-xs'}`}>
                {book.subscribers} subscribers
              </p>
            </div>
          </div>

          <div className={`flex items-center gap-2 lg:gap-4 text-gray-500 dark:text-gray-400 ${isSmall ? 'text-xs' : 'text-xs lg:text-sm'}`}>
            <div className="flex items-center gap-1">
              <Eye className="h-3 w-3" />
              <span>{book.views}</span>
            </div>
            <div className="flex items-center gap-1">
              <ThumbsUp className="h-3 w-3" />
              <span>{book.likes.toLocaleString()}</span>
            </div>
            <span>•</span>
            <span>{formatDate(book.uploadDate)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    'Classic': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-400',
    'Ebooks': 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400',
    'Interviews': 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400',
    'Literature': 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
    'Fantasy': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-400',
    'Writing': 'bg-rose-100 text-rose-800 dark:bg-rose-900/20 dark:text-rose-400',
  };
  return colors[category] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
  
  if (diffInDays === 0) return 'Today';
  if (diffInDays === 1) return '1 day ago';
  if (diffInDays < 7) return `${diffInDays} days ago`;
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
  return `${Math.floor(diffInDays / 30)} months ago`;
}