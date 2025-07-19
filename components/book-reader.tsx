'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, Maximize, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Progress } from '@/components/ui/progress';

interface BookReaderProps {
  title: string;
  progress: number;
}

export function BookReader({ title, progress }: BookReaderProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isAutoRead, setIsAutoRead] = useState(false);
  const [readingProgress, setReadingProgress] = useState(progress);

  const totalPages = 247;
  const currentPagePercent = (currentPage / totalPages) * 100;

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setReadingProgress(Math.max(0, readingProgress - (100 / totalPages)));
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setReadingProgress(Math.min(100, readingProgress + (100 / totalPages)));
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-xl overflow-hidden shadow-2xl">
      {/* Book Display Area */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-teal-600 to-teal-800 p-8 flex items-center justify-center">
        {/* Book Pages */}
        <div className="relative w-full max-w-2xl aspect-[3/2]">
          <div className="absolute inset-0 bg-white rounded-lg shadow-2xl border-8 border-gray-300 transform perspective-1000 rotate-y-2">
            {/* Left Page */}
            <div className="absolute left-0 top-0 w-1/2 h-full bg-white border-r border-gray-200 p-6 flex flex-col">
              <div className="flex-1 space-y-4">
                <div className="w-full h-3 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-5/6 h-3 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-full h-3 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-4/5 h-3 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-full h-3 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-3/4 h-3 bg-gray-200 rounded animate-pulse"></div>
              </div>
              <div className="text-xs text-gray-400 text-center">{currentPage}</div>
            </div>
            
            {/* Right Page */}
            <div className="absolute right-0 top-0 w-1/2 h-full bg-white p-6 flex flex-col">
              <div className="flex-1 space-y-4">
                <div className="w-full h-3 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-4/5 h-3 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-full h-3 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-5/6 h-3 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-full h-3 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-2/3 h-3 bg-gray-200 rounded animate-pulse"></div>
              </div>
              <div className="text-xs text-gray-400 text-center">{currentPage + 1}</div>
            </div>
            
            {/* Book Spine Shadow */}
            <div className="absolute left-1/2 top-0 w-1 h-full bg-gray-400 shadow-inner transform -translate-x-1/2"></div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <Button
          variant="ghost"
          size="icon"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm rounded-full"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={handleNextPage}
          disabled={currentPage >= totalPages}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm rounded-full"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Controls */}
      <div className="p-4 bg-white dark:bg-gray-800 space-y-4">
        {/* Reading Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
            <span>Reading Progress</span>
            <span>{Math.round(readingProgress)}%</span>
          </div>
          <Progress value={readingProgress} className="h-2" />
        </div>

        {/* Control Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-600 dark:text-gray-400"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsAutoRead(!isAutoRead)}
              className="mx-2"
            >
              {isAutoRead ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="text-gray-600 dark:text-gray-400"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Volume2 className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Maximize className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}