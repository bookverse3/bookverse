'use client';

import { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, Maximize, Settings, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { motion, AnimatePresence } from 'framer-motion';

interface PageFlipReaderProps {
  title: string;
  progress: number;
}

export function PageFlipReader({ title, progress }: PageFlipReaderProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isAutoRead, setIsAutoRead] = useState(false);
  const [readingProgress, setReadingProgress] = useState(progress);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev'>('next');

  const totalPages = 247;
  const currentPagePercent = (currentPage / totalPages) * 100;

  const handlePrevPage = () => {
    if (currentPage > 1 && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection('prev');
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setReadingProgress(Math.max(0, readingProgress - (100 / totalPages)));
        setIsFlipping(false);
      }, 300);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection('next');
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setReadingProgress(Math.min(100, readingProgress + (100 / totalPages)));
        setIsFlipping(false);
      }, 300);
    }
  };

  const generatePageContent = (pageNum: number) => {
    const lines = [];
    for (let i = 0; i < 12; i++) {
      const width = Math.random() * 40 + 60; // Random width between 60-100%
      lines.push(
        <div
          key={i}
          className="h-3 bg-gray-300 dark:bg-gray-600 rounded mb-3 animate-pulse"
          style={{ width: `${width}%` }}
        />
      );
    }
    return lines;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
      {/* Book Display Area */}
      <div className="relative aspect-[4/3] lg:aspect-[3/2] bg-gradient-to-br from-amber-50 to-orange-100 dark:from-gray-700 dark:to-gray-800 p-4 lg:p-8 flex items-center justify-center">
        {/* Book Container */}
        <div className="relative w-full max-w-4xl aspect-[3/2] perspective-1000">
          <div className="relative w-full h-full">
            {/* Left Page */}
            <motion.div
              className="absolute left-0 top-0 w-1/2 h-full bg-white dark:bg-gray-100 border border-gray-200 shadow-lg p-4 lg:p-6 flex flex-col"
              style={{ transformOrigin: 'right center' }}
              animate={
                isFlipping && flipDirection === 'next'
                  ? { rotateY: -180, scale: 0.95 }
                  : { rotateY: 0, scale: 1 }
              }
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              <div className="flex-1 space-y-2 lg:space-y-3">
                {generatePageContent(currentPage)}
              </div>
              <div className="text-xs text-gray-400 text-center mt-4">
                {currentPage}
              </div>
            </motion.div>
            
            {/* Right Page */}
            <motion.div
              className="absolute right-0 top-0 w-1/2 h-full bg-white dark:bg-gray-100 border border-gray-200 shadow-lg p-4 lg:p-6 flex flex-col"
              style={{ transformOrigin: 'left center' }}
              animate={
                isFlipping && flipDirection === 'prev'
                  ? { rotateY: 180, scale: 0.95 }
                  : { rotateY: 0, scale: 1 }
              }
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              <div className="flex-1 space-y-2 lg:space-y-3">
                {generatePageContent(currentPage + 1)}
              </div>
              <div className="text-xs text-gray-400 text-center mt-4">
                {currentPage + 1}
              </div>
            </motion.div>
            
            {/* Book Spine */}
            <div className="absolute left-1/2 top-0 w-1 h-full bg-gray-300 dark:bg-gray-600 shadow-inner transform -translate-x-1/2 z-10"></div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <Button
          variant="ghost"
          size="icon"
          onClick={handlePrevPage}
          disabled={currentPage === 1 || isFlipping}
          className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm rounded-full h-8 w-8 lg:h-10 lg:w-10"
        >
          <ChevronLeft className="h-4 w-4 lg:h-5 lg:w-5" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={handleNextPage}
          disabled={currentPage >= totalPages || isFlipping}
          className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm rounded-full h-8 w-8 lg:h-10 lg:w-10"
        >
          <ChevronRight className="h-4 w-4 lg:h-5 lg:w-5" />
        </Button>
      </div>

      {/* Compact Controls */}
      <div className="p-3 lg:p-4 bg-white dark:bg-gray-800 space-y-3">
        {/* Reading Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs lg:text-sm text-gray-600 dark:text-gray-400">
            <span>Page {currentPage} of {totalPages}</span>
            <span>{Math.round(readingProgress)}% complete</span>
          </div>
          <Progress value={readingProgress} className="h-1.5 lg:h-2" />
        </div>

        {/* Control Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 lg:gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handlePrevPage}
              disabled={currentPage === 1 || isFlipping}
              className="text-gray-600 dark:text-gray-400 h-8 px-2 lg:px-3"
            >
              <ChevronLeft className="h-3 w-3 lg:h-4 lg:w-4 mr-1" />
              <span className="hidden lg:inline">Prev</span>
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsAutoRead(!isAutoRead)}
              className="h-8 w-8 lg:h-9 lg:w-9"
            >
              {isAutoRead ? <Pause className="h-3 w-3 lg:h-4 lg:w-4" /> : <Play className="h-3 w-3 lg:h-4 lg:w-4" />}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={handleNextPage}
              disabled={currentPage >= totalPages || isFlipping}
              className="text-gray-600 dark:text-gray-400 h-8 px-2 lg:px-3"
            >
              <span className="hidden lg:inline">Next</span>
              <ChevronRight className="h-3 w-3 lg:h-4 lg:w-4 ml-1" />
            </Button>
          </div>

          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Volume2 className="h-3 w-3 lg:h-4 lg:w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <RotateCcw className="h-3 w-3 lg:h-4 lg:w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Settings className="h-3 w-3 lg:h-4 lg:w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Maximize className="h-3 w-3 lg:h-4 lg:w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}