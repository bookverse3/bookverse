'use client';

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Sidebar } from '@/components/sidebar';
import { HTML5PageFlipReader } from '@/components/html5-page-flip-reader';
import { CommentsSection } from '@/components/comments-section';
import { UpNextSidebar } from '@/components/up-next-sidebar';
import { Book } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ThumbsUp, 
  ThumbsDown, 
  Share, 
  Download, 
  Eye, 
  Calendar,
  BookOpen
} from 'lucide-react';

interface BookDetailsClientProps {
  book: Book;
}

export default function BookDetailsClient({ book }: BookDetailsClientProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [likes, setLikes] = useState(book.likes);
  const [dislikes, setDislikes] = useState(book.dislikes);
  const [userVote, setUserVote] = useState<'like' | 'dislike' | null>(null);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleLike = () => {
    if (userVote === 'like') {
      setLikes(likes - 1);
      setUserVote(null);
    } else {
      if (userVote === 'dislike') {
        setDislikes(dislikes - 1);
      }
      setLikes(likes + 1);
      setUserVote('like');
    }
  };

  const handleDislike = () => {
    if (userVote === 'dislike') {
      setDislikes(dislikes - 1);
      setUserVote(null);
    } else {
      if (userVote === 'like') {
        setLikes(likes - 1);
      }
      setDislikes(dislikes + 1);
      setUserVote('dislike');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar onMenuToggle={toggleSidebar} />
      
      <div className="flex pt-16">
        <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
        
        <main className={`flex-1 transition-all duration-300 ${
          sidebarOpen ? 'lg:ml-64' : 'lg:ml-16'
        }`}>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 p-4 lg:p-6">
            {/* Main Content */}
            <div className="flex-1 space-y-4 lg:space-y-6">
              {/* Book Reader */}
              <HTML5PageFlipReader title={book.title} progress={book.progress || 0} />

              {/* Book Info */}
              <div className="bg-white dark:bg-gray-800 rounded-lg lg:rounded-xl p-4 lg:p-6 shadow-sm">
                <h1 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {book.title} by {book.author}
                </h1>

                {/* Channel Info & Actions */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4 lg:mb-6">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-10 w-10 lg:h-12 lg:w-12">
                      <AvatarImage src={book.channelAvatar} />
                      <AvatarFallback>{book.channel.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                    
                    <div>
                      <h3 className="text-sm lg:text-base font-semibold text-gray-900 dark:text-white">
                        {book.channel}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {book.subscribers} subscribers • 200 books
                      </p>
                    </div>

                    <Button
                      onClick={() => setIsSubscribed(!isSubscribed)}
                      size="sm"
                      className={`ml-4 ${
                        isSubscribed 
                          ? 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600' 
                          : 'bg-purple-600 hover:bg-purple-700 text-white'
                      }`}
                    >
                      {isSubscribed ? 'Subscribed' : 'Subscribe'}
                    </Button>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-1 lg:gap-2 flex-wrap">
                    <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-full">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleLike}
                        className={`rounded-l-full ${userVote === 'like' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400' : ''}`}
                      >
                        <ThumbsUp className="h-3 w-3 lg:h-4 lg:w-4 mr-1" />
                        <span className="text-xs lg:text-sm">{likes.toLocaleString()}</span>
                      </Button>
                      <div className="w-px h-6 bg-gray-300 dark:bg-gray-600" />
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleDislike}
                        className={`rounded-r-full ${userVote === 'dislike' ? 'bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400' : ''}`}
                      >
                        <ThumbsDown className="h-3 w-3 lg:h-4 lg:w-4" />
                        <span className="text-xs lg:text-sm">{dislikes > 0 ? dislikes.toLocaleString() : ''}</span>
                      </Button>
                    </div>

                    <Button variant="outline" size="sm">
                      <Share className="h-3 w-3 lg:h-4 lg:w-4 mr-1 lg:mr-2" />
                      <span className="hidden lg:inline">Share</span>
                    </Button>

                    <Button variant="outline" size="sm">
                      <Download className="h-3 w-3 lg:h-4 lg:w-4 mr-1 lg:mr-2" />
                      <span className="hidden lg:inline">Download</span>
                    </Button>
                  </div>
                </div>

                {/* Book Stats */}
                <div className="flex flex-wrap items-center gap-2 lg:gap-4 text-xs lg:text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Eye className="h-3 w-3 lg:h-4 lg:w-4" />
                    <span>{book.views} views</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3 lg:h-4 lg:w-4" />
                    <span>Uploaded by {book.channel}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-3 w-3 lg:h-4 lg:w-4" />
                    <span>200K views • 2 weeks ago</span>
                  </div>
                  <Badge className="ml-auto text-xs">
                    {book.category}
                  </Badge>
                </div>

                {/* Description */}
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-3 lg:p-4">
                  <p className="text-sm lg:text-base text-gray-800 dark:text-gray-200 leading-relaxed">
                    {book.description}
                    <span className="text-blue-600 dark:text-blue-400 cursor-pointer ml-2">
                      ...see more
                    </span>
                  </p>
                </div>
              </div>

              {/* Comments Section */}
              <div className="bg-white dark:bg-gray-800 rounded-lg lg:rounded-xl p-4 lg:p-6 shadow-sm">
                <CommentsSection commentCount={book.comments} />
              </div>
            </div>

            {/* Right Sidebar - Up Next */}
            <div className="lg:w-80 xl:w-96 space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg lg:rounded-xl p-4 lg:p-6 shadow-sm lg:sticky lg:top-6">
                <UpNextSidebar />
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
}