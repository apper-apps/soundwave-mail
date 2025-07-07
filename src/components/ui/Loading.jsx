import { cn } from '@/utils/cn';

const Loading = ({ className, ...props }) => {
  return (
    <div className={cn("flex items-center justify-center p-8", className)} {...props}>
      <div className="glass-panel p-8 flex flex-col items-center space-y-6">
        {/* Waveform Skeleton */}
        <div className="flex items-end space-x-1 h-24 w-full max-w-md">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="bg-gradient-to-t from-primary/50 to-secondary/50 rounded-full animate-pulse"
              style={{
                height: `${Math.random() * 80 + 20}%`,
                width: '6px',
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>
        
        {/* Player Controls Skeleton */}
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full animate-pulse" />
          <div className="w-16 h-16 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full animate-pulse" />
          <div className="w-12 h-12 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full animate-pulse" />
        </div>
        
        {/* Track Info Skeleton */}
        <div className="text-center space-y-2">
          <div className="h-6 w-48 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full animate-pulse" />
          <div className="h-4 w-32 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full animate-pulse mx-auto" />
        </div>
        
        {/* Loading Text */}
        <div className="text-center">
          <div className="gradient-text font-display font-semibold text-lg">
            Loading Audio Player...
          </div>
          <p className="text-gray-400 text-sm mt-2">
            Preparing your music experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loading;