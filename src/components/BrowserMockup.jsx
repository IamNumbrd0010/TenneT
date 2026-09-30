import React, { useState } from 'react';
import { ExternalLink, Globe, ShieldCheck, Maximize2 } from 'lucide-react';

/**
 * Reusable Browser Window Mockup
 * Renders a realistic browser window chrome containing the website screenshot.
 * Styled with subtle electric blue borders and glows.
 */
export default function BrowserMockup({
  src,
  alt,
  url = 'https://tennet.studio',
  title = '',
  category = '',
  onOpenDetails,
  liveUrl,
  className = '',
  aspectRatio = 'aspect-16/10 sm:aspect-16/9'
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Clean URL for display in browser bar
  const displayUrl = url.replace(/^https?:\/\//, '').replace(/\/$/, '');

  return (
    <div
      className={`group relative rounded-xl overflow-hidden border border-white/10 bg-[#12141c] shadow-2xl transition-all duration-300 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-600/10 ${className}`}
    >
      {/* Browser Chrome Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#141824] border-b border-white/8 select-none">
        {/* Window controls */}
        <div className="flex items-center gap-1.5 w-16">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/80 transition-opacity group-hover:opacity-100" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/80 transition-opacity group-hover:opacity-100" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/80 transition-opacity group-hover:opacity-100" />
        </div>

        {/* Address Bar */}
        <div className="flex items-center justify-center flex-1 max-w-xs sm:max-w-md mx-2 px-3 py-1 bg-[#090b10] rounded-md text-xs text-neutral-400 font-mono border border-white/5 group-hover:border-blue-500/20 transition-colors">
          <ShieldCheck className="w-3 h-3 text-blue-400 mr-1.5 shrink-0" />
          <span className="truncate text-[11px] text-neutral-300 group-hover:text-blue-200 transition-colors">
            {displayUrl}
          </span>
        </div>

        {/* Action icons */}
        <div className="flex items-center justify-end gap-2 w-16">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-blue-400 transition-colors p-1"
              title="Visit external site"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>

      {/* Viewport Content */}
      <div className={`relative ${aspectRatio} bg-[#0b0d14] overflow-hidden`}>
        {!hasError ? (
          <img
            src={src}
            alt={alt || title || 'Website preview'}
            referrerPolicy="no-referrer"
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03] ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ) : (
          /* Graceful Fallback Container */
          <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#12141c] to-[#0a0b0e] text-center">
            <Globe className="w-12 h-12 text-blue-400/60 mb-3" />
            <h4 className="text-lg font-medium text-white">{title || 'Project Preview'}</h4>
            <p className="text-xs text-neutral-400 mt-1">{category || 'Web Application'}</p>
          </div>
        )}

        {/* Interactive hover quick action overlay */}
        {onOpenDetails && (
          <div className="absolute inset-0 bg-[#0a0b0e]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
            <button
              type="button"
              onClick={onOpenDetails}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-md tracking-wider uppercase transition-all duration-200 shadow-lg shadow-blue-600/30 flex items-center gap-1.5 cursor-pointer transform translate-y-2 group-hover:translate-y-0"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Inspect Case Study</span>
            </button>
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-medium rounded-md tracking-wider uppercase transition-colors border border-white/10 flex items-center gap-1"
              >
                <span>Live Site</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
