
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PageWrapperProps {
  children: ReactNode;
  title?: string;
  className?: string;
  withGrid?: boolean;
  withScanlines?: boolean;
}

const PageWrapper = ({ 
  children, 
  title, 
  className,
  withGrid = true,
  withScanlines = true
}: PageWrapperProps) => {
  return (
    <div className={cn(
      'min-h-screen pt-16 flex flex-col relative',
      withGrid && 'ctos-grid',
      className
    )}>
      {withScanlines && <div className="scanline"></div>}
      
      {title && (
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center mb-8">
            <div className="h-px flex-grow bg-ctos-cyan/30 mr-4"></div>
            <h1 className="text-2xl md:text-3xl font-orbitron text-ctos-cyan tracking-wider">
              :: {title} ::
            </h1>
            <div className="h-px flex-grow bg-ctos-cyan/30 ml-4"></div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 flex-grow">
        {children}
      </div>
      
      <footer className="mt-auto border-t border-ctos-cyan/20 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <div>
              <span className="text-ctos-cyan">[HEXEL PROTOX]</span> © {new Date().getFullYear()} • ALL RIGHTS RESERVED
            </div>
            <div className="mt-2 md:mt-0">
    <span className="block md:inline-block md:ml-2">
        Made By
        <strong className="inline-flex items-center gap-2 ml-1">
            Abu Ubaidah
            <img
                src="https://i.ibb.co/RW6y2Yp/x.jpg"
                alt="Flag of Palestine"
                className="inline-block h-3 w-auto"
            />
        </strong>
    </span>
</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PageWrapper;
