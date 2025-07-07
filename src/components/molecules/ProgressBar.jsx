import { cn } from '@/utils/cn';
import Slider from '@/components/atoms/Slider';

const ProgressBar = ({ 
  currentTime = 0, 
  duration = 0, 
  onSeek,
  className 
}) => {
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  const handleSeek = (value) => {
    if (!duration) return;
    const newTime = (value / 100) * duration;
    onSeek?.(newTime);
  };

  return (
    <div className={cn("w-full space-y-2", className)}>
      <Slider
        value={progress}
        min={0}
        max={100}
        step={0.1}
        onChange={handleSeek}
        className="w-full"
      />
      
      <div className="flex justify-between text-xs text-gray-400 font-mono">
        <span>
          {Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60).toString().padStart(2, '0')}
        </span>
        <span>
          {Math.floor(duration / 60)}:{Math.floor(duration % 60).toString().padStart(2, '0')}
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;