import Image from 'next/image';
import Link from 'next/link';
import { Clock, Eye } from 'lucide-react';
import { upNextBooks } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function UpNextSidebar() {
  return (
    <div className="space-y-4">
      <h3 className="text-base lg:text-lg font-semibold text-gray-900 dark:text-white">
        Up Next
      </h3>
      
      <div className="space-y-2 lg:space-y-3">
        {upNextBooks.map((book) => (
          <Link
            key={book.id}
            href={`/book/${book.id}`}
            className="group flex gap-2 lg:gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <div className="relative flex-shrink-0">
              <div className="relative w-32 lg:w-40 aspect-video rounded-lg overflow-hidden">
                <Image
                  src={book.cover}
                  alt={book.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute bottom-1 right-1">
                  <span className="bg-black/80 text-white text-xs px-1 lg:px-1.5 py-0.5 rounded">
                    {book.readingTime}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-xs lg:text-sm text-gray-900 dark:text-white line-clamp-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors mb-1">
                {book.title}
              </h4>
              
              <div className="flex items-center gap-1 lg:gap-2 mb-1 lg:mb-2">
                <Avatar className="h-4 w-4 lg:h-5 lg:w-5">
                  <AvatarImage src={book.channelAvatar} />
                  <AvatarFallback className="text-xs">
                    {book.channel.slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  {book.channel}
                </span>
              </div>
              
              <div className="flex items-center gap-1 lg:gap-3 text-xs text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <Eye className="h-3 w-3" />
                  <span>{book.views}</span>
                </div>
                <span>•</span>
                <span>{formatDate(book.uploadDate)}</span>
              </div>
              
              <div className="mt-1 lg:mt-2">
                <span className={`inline-block text-xs px-2 py-1 rounded-full ${getCategoryColor(book.category)}`}>
                  {book.category}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    'Interviews': 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400',
    'Literature': 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
    'Fantasy': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-400',
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