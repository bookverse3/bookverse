'use client';

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Sidebar } from '@/components/sidebar';
import { BookCard } from '@/components/book-card';
import { trendingBooks } from '@/lib/data';
import { TrendingUp, Clock, Star, Users } from 'lucide-react';

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const categoryStats = [
    { name: 'Trending', count: 27, icon: TrendingUp, color: 'from-red-500 to-red-600' },
    { name: 'New Releases', count: 37, icon: Clock, color: 'from-blue-500 to-blue-600' },
    { name: 'Top Rated', count: 39, icon: Star, color: 'from-yellow-500 to-yellow-600' },
    { name: 'Popular', count: 57, icon: Users, color: 'from-green-500 to-green-600' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar onMenuToggle={toggleSidebar} sidebarOpen={sidebarOpen} />
      
      <div className="flex pt-16">
        <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
        
        <main className={`flex-1 transition-all duration-300 ${
          sidebarOpen ? 'ml-60' : 'ml-16'
        }`}>
          <div className="p-3 md:p-4 lg:p-6 max-w-7xl mx-auto">
            {/* Welcome Section */}
            <div className="text-center mb-6 md:mb-8">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                Welcome to BookTube
              </h1>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                Discover, read, and share amazing books with our community
              </p>
            </div>

            {/* Category Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
              {categoryStats.map((category) => (
                <div
                  key={category.name}
                  className="bg-white dark:bg-gray-800 p-3 md:p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group"
                >
                  <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-2 md:mb-3 group-hover:scale-110 transition-transform`}>
                    <category.icon className="h-4 w-4 md:h-5 md:w-5 text-white" />
                  </div>
                  <h3 className="text-sm md:text-base font-semibold text-gray-900 dark:text-white mb-1">
                    {category.name}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                    {category.count} books
                  </p>
                </div>
              ))}
            </div>

            {/* Trending Now Section */}
            <div className="mb-6 md:mb-8">
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
                  Trending Now
                </h2>
                <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                  Updated hourly
                </span>
              </div>

              {/* Responsive Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
                {trendingBooks.slice(0, 10).map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            </div>

            {/* Featured Books Grid */}
            <div>
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
                Featured Books
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
                {trendingBooks.slice(0, 15).map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

    </div>
  );
}