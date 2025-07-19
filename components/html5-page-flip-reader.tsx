'use client';

import { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, Maximize, Settings, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import HTMLFlipBook from 'react-pageflip';

interface HTML5PageFlipReaderProps {
  title: string;
  progress: number;
}

export function HTML5PageFlipReader({ title, progress }: HTML5PageFlipReaderProps) {
  const flipBookRef = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isAutoRead, setIsAutoRead] = useState(false);
  const [readingProgress, setReadingProgress] = useState(progress);
  const [totalPages, setTotalPages] = useState(20); // Sample pages

  const handlePrevPage = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipPrev();
    }
  };

  const handleNextPage = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipNext();
    }
  };

  const onFlip = (e: any) => {
    const newPage = e.data;
    setCurrentPage(newPage);
    setReadingProgress((newPage / totalPages) * 100);
  };

  const generatePageContent = (pageNum: number) => {
    const lines = [];
    for (let i = 0; i < 15; i++) {
      const width = Math.random() * 30 + 70; // Random width between 70-100%
      lines.push(
        <div
          key={i}
          className="h-2 bg-gray-300 dark:bg-gray-600 rounded mb-2"
          style={{ width: `${width}%` }}
        />
      );
    }
    return lines;
  };

  const PageComponent = ({ pageNumber, children }: { pageNumber: number; children: React.ReactNode }) => (
    <div className="page bg-white shadow-lg border border-gray-200">
      <div className="p-4 h-full flex flex-col">
        <div className="flex-1">
          {children}
        </div>
        <div className="text-center text-xs text-gray-400 mt-4">
          {pageNumber}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
      {/* Book Display Area */}
      <div className="relative bg-gray-100 dark:bg-gray-700 p-4 md:p-8 flex items-center justify-center min-h-[400px] md:min-h-[500px]">
        <div className="relative w-full max-w-4xl">
          <HTMLFlipBook
            ref={flipBookRef}
            width={300}
            height={400}
            size="stretch"
            minWidth={250}
            maxWidth={600}
            minHeight={300}
            maxHeight={500}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={false}
            onFlip={onFlip}
            className="flip-book"
            style={{}}
            startPage={0}
            drawShadow={true}
            flippingTime={1000}
            usePortrait={true}
            startZIndex={0}
            autoSize={true}
            clickEventForward={true}
            useMouseEvents={true}
            swipeDistance={30}
            showPageCorners={true}
            disableFlipByClick={false}
          >
            {/* Cover Page */}
            <PageComponent pageNumber={0}>
              <div className="text-center h-full flex flex-col justify-center">
                <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">{title}</h1>
                <div className="w-32 h-48 bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg mx-auto mb-4"></div>
                <p className="text-sm text-gray-600">Click or drag to turn pages</p>
              </div>
            </PageComponent>

            {/* Content Pages */}
            {Array.from({ length: totalPages - 1 }, (_, i) => (
              <PageComponent key={i + 1} pageNumber={i + 1}>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Chapter {Math.floor(i / 2) + 1}</h3>
                  {generatePageContent(i + 1)}
                </div>
              </PageComponent>
            ))}
          </HTMLFlipBook>
        </div>

        {/* Navigation Buttons */}
        <Button
          variant="ghost"
          size="icon"
          onClick={handlePrevPage}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm rounded-full h-8 w-8 md:h-10 md:w-10"
        >
          <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={handleNextPage}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm rounded-full h-8 w-8 md:h-10 md:w-10"
        >
          <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
        </Button>
      </div>

      {/* Compact Controls */}
      <div className="p-3 md:p-4 bg-white dark:bg-gray-800 space-y-3">
        {/* Reading Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs md:text-sm text-gray-600 dark:text-gray-400">
            <span>Page {currentPage + 1} of {totalPages}</span>
            <span>{Math.round(readingProgress)}% complete</span>
          </div>
          <Progress value={readingProgress} className="h-1.5 md:h-2" />
        </div>

        {/* Control Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 md:gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handlePrevPage}
              className="text-gray-600 dark:text-gray-400 h-8 px-2 md:px-3"
            >
              <ChevronLeft className="h-3 w-3 md:h-4 md:w-4 mr-1" />
              <span className="hidden md:inline">Prev</span>
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsAutoRead(!isAutoRead)}
              className="h-8 w-8 md:h-9 md:w-9"
            >
              {isAutoRead ? <Pause className="h-3 w-3 md:h-4 md:w-4" /> : <Play className="h-3 w-3 md:h-4 md:w-4" />}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={handleNextPage}
              className="text-gray-600 dark:text-gray-400 h-8 px-2 md:px-3"
            >
              <span className="hidden md:inline">Next</span>
              <ChevronRight className="h-3 w-3 md:h-4 md:w-4 ml-1" />
            </Button>
          </div>

          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Volume2 className="h-3 w-3 md:h-4 md:w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <RotateCcw className="h-3 w-3 md:h-4 md:w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Settings className="h-3 w-3 md:h-4 md:w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Maximize className="h-3 w-3 md:h-4 md:w-4" />
            </Button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .flip-book {
          margin: 0 auto;
        }
        .page {
          color: #000;
          background: white;
          display: flex;
          flex-direction: column;
        }
        .stf__parent {
          margin: 0 auto;
        }
        .stf__block {
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
}