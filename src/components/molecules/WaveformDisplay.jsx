import { useMemo } from 'react';
import { cn } from '@/utils/cn';

const WaveformDisplay = ({ 
  waveformData = [], 
  currentTime = 0, 
  duration = 0,
  isPlaying = false,
  onSeek,
  className 
}) => {
  const progressPercentage = useMemo(() => {
    if (!duration) return 0;
    return (currentTime / duration) * 100;
  }, [currentTime, duration]);

  const handleClick = (e) => {
    if (!onSeek || !duration) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    const newTime = percentage * duration;
    onSeek(newTime);
  };

  return (
    <div 
      className={cn(
        "relative w-full h-24 cursor-pointer group",
        "glass-panel p-4 rounded-2xl overflow-hidden",
        className
      )}
      onClick={handleClick}
    >
      <div className="flex items-end justify-center h-full space-x-1">
        {waveformData.map((height, index) => {
          const isActive = (index / waveformData.length) * 100 <= progressPercentage;
          const barHeight = Math.max(height * 100, 8);
          
          return (
            <div
              key={index}
              className={cn(
                "transition-all duration-150 rounded-full",
                "group-hover:opacity-80",
                isActive 
                  ? "waveform-bar" + (isPlaying ? " active" : "")
                  : "bg-gradient-to-t from-gray-600 to-gray-500"
              )}
              style={{
                height: `${barHeight}%`,
                width: `${Math.max(100 / waveformData.length, 2)}%`,
                minWidth: '2px',
              }}
            />
          );
        })}
      </div>
      
      {/* Progress indicator */}
      <div 
        className="absolute top-0 left-0 h-full bg-gradient-to-r from-accent/20 to-transparent pointer-events-none"
        style={{ width: `${progressPercentage}%` }}
      />
      
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
    </div>
  );
};

export default WaveformDisplay;