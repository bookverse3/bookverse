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
      <Navbar onMenuToggle={toggleSidebar} />
      
      <div className="flex pt-16">
        <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
        
        <main className={`flex-1 transition-all duration-300 ${
          sidebarOpen ? 'lg:ml-64' : 'lg:ml-20'
        }`}>
          <div className="p-4 lg:p-6">
            {/* Welcome Section */}
            <div className="text-center mb-8">
              <h1 className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-3">
                Welcome to BookTube by satish
              </h1>
              <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Discover, read, and share amazing books with our community of readers
              </p>
            </div>

            {/* Category Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-8">
              {categoryStats.map((category) => (
                <div
                  key={category.name}
                  className="bg-white dark:bg-gray-800 p-4 lg:p-6 rounded-lg lg:rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
                >
                  <div className={`w-8 h-8 lg:w-12 lg:h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-3 lg:mb-4 group-hover:scale-110 transition-transform`}>
                    <category.icon className="h-4 w-4 lg:h-6 lg:w-6 text-white" />
                  </div>
                  <h3 className="text-sm lg:text-base font-semibold text-gray-900 dark:text-white mb-1">
                    {category.name}
                  </h3>
                  <p className="text-xs lg:text-sm text-gray-500 dark:text-gray-400">
                    {category.count} books
                  </p>
                </div>
              ))}
            </div>

            {/* Trending Now Section */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
                  Trending Now
                </h2>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Updated hourly
                </span>
              </div>

              {/* Horizontal Scroll Container */}
              <div className="overflow-x-auto pb-4">
                <div className="flex gap-4 lg:gap-6 w-max">
                  {trendingBooks.map((book) => (
                    <div key={book.id} className="w-72 lg:w-80 flex-shrink-0">
                      <BookCard book={book} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Featured Books Grid */}
            <div>
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Featured Books
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 lg:gap-6">
                {trendingBooks.slice(0, 8).map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
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