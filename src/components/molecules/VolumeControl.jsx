import { useState } from 'react';
import { cn } from '@/utils/cn';
import IconButton from '@/components/atoms/IconButton';
import Slider from '@/components/atoms/Slider';

const VolumeControl = ({ 
  volume = 1, 
  isMuted = false, 
  onVolumeChange, 
  onToggleMute,
  className 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getVolumeIcon = () => {
    if (isMuted || volume === 0) return 'VolumeX';
    if (volume < 0.5) return 'Volume1';
    return 'Volume2';
  };

  return (
    <div 
      className={cn("relative flex items-center", className)}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <IconButton
        icon={getVolumeIcon()}
        variant="glass"
        size="md"
        onClick={onToggleMute}
        className="z-10"
      />
      
      <div 
        className={cn(
          "absolute left-12 top-1/2 -translate-y-1/2",
          "glass-panel px-4 py-2 rounded-full",
          "transition-all duration-300 transform",
          isExpanded 
            ? "opacity-100 scale-100 translate-x-0" 
            : "opacity-0 scale-95 -translate-x-4 pointer-events-none"
        )}
      >
        <div className="flex items-center space-x-2 w-20">
          <Slider
            value={isMuted ? 0 : volume * 100}
            min={0}
            max={100}
            step={1}
            onChange={(value) => onVolumeChange?.(value / 100)}
            className="flex-1"
          />
          <span className="text-xs text-gray-400 min-w-[2rem]">
            {Math.round((isMuted ? 0 : volume) * 100)}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default VolumeControl;