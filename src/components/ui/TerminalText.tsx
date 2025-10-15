import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TerminalTextProps {
  lines: string[];
  className?: string;
  typingSpeed?: number;
  cursorBlink?: boolean;
  onComplete?: () => void;
}

const TerminalText = ({
  lines,
  className,
  typingSpeed = 50,
  cursorBlink = true,
  onComplete
}: TerminalTextProps) => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // stop when all lines are done
    if (currentLine >= lines.length) {
      if (!isComplete) {
        setIsComplete(true);
        onComplete?.();
      }
      return;
    }

    const currentText = lines[currentLine];
    let timer: NodeJS.Timeout;

    if (currentChar < currentText.length) {
      // type next character
      timer = setTimeout(() => {
        setDisplayedLines((prev) => {
          const newLines = [...prev];
          if (!newLines[currentLine]) newLines[currentLine] = '';
          newLines[currentLine] = currentText.substring(0, currentChar + 1);
          return newLines;
        });
        setCurrentChar((prev) => prev + 1);
      }, typingSpeed);
    } else {
      // move to next line after a small pause
      timer = setTimeout(() => {
        setCurrentLine((prev) => prev + 1);
        setCurrentChar(0);
      }, 400);
    }

    return () => clearTimeout(timer);
  }, [currentLine, currentChar, lines, typingSpeed, isComplete, onComplete]);

  return (
    <div
      className={cn(
        'font-share text-left text-ctos-green leading-relaxed tracking-wide overflow-y-auto max-h-[70vh] pr-2',
        className
      )}
    >
      {displayedLines.map((line, index) => (
        <div key={index} className="flex items-center">
          <span className="text-ctos-green mr-2">&gt;</span>
          <span>{line}</span>
          {cursorBlink && index === currentLine && !isComplete && (
            <span className="animate-blink-caret ml-1 inline-block w-2 h-4 bg-ctos-cyan"></span>
          )}
        </div>
      ))}

      {isComplete && cursorBlink && (
        <div className="flex items-center">
          <span className="text-ctos-green mr-2">&gt;</span>
          <span className="animate-blink-caret inline-block w-2 h-4 bg-ctos-cyan"></span>
        </div>
      )}
    </div>
  );
};

export default TerminalText;
