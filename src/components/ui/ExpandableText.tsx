'use client';
import { useState } from 'react';

interface Props {
  text: string;
  className?: string;
}

export default function ExpandableText({ text, className = '' }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <p
        className={`text-text-muted leading-relaxed transition-all duration-300 ${className}`}
        style={{
          display: '-webkit-box',
          WebkitLineClamp: isExpanded ? 'unset' : '3',
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        {text}
      </p>
      {text.length > 150 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent/80 transition-colors group"
          aria-expanded={isExpanded}
        >
          {isExpanded ? (
            <>
              <span>Leer menos</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:-translate-y-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </>
          ) : (
            <>
              <span>Leer más</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-y-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </>
          )}
        </button>
      )}
    </div>
  );
}
