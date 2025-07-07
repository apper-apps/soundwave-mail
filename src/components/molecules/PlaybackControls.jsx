import { cn } from '@/utils/cn';
import IconButton from '@/components/atoms/IconButton';

const PlaybackControls = ({ 
  isPlaying = false,
  isLoading = false,
  onPlay,
  onPause,
  onNext,
  onPrevious,
  repeat = 'off',
  shuffle = false,
  onToggleRepeat,
  onToggleShuffle,
  className 
}) => {
  const getRepeatIcon = () => {
    switch (repeat) {
      case 'one': return 'Repeat1';
      case 'all': return 'Repeat';
      default: return 'Repeat';
    }
  };

  const getPlayIcon = () => {
    if (isLoading) return 'Loader2';
    return isPlaying ? 'Pause' : 'Play';
  };

  return (
    <div className={cn("flex items-center justify-center space-x-4", className)}>
      <IconButton
        icon="Shuffle"
        variant={shuffle ? "accent" : "glass"}
        size="md"
        onClick={onToggleShuffle}
        className="transition-all duration-200"
      />
      
      <IconButton
        icon="SkipBack"
        variant="glass"
        size="lg"
        onClick={onPrevious}
      />
      
      <IconButton
        icon={getPlayIcon()}
        variant="default"
        size="xl"
        onClick={isPlaying ? onPause : onPlay}
        disabled={isLoading}
        className={cn(
          "relative",
          isLoading && "animate-spin"
        )}
      />
      
      <IconButton
        icon="SkipForward"
        variant="glass"
        size="lg"
        onClick={onNext}
      />
      
      <IconButton
        icon={getRepeatIcon()}
        variant={repeat !== 'off' ? "accent" : "glass"}
        size="md"
        onClick={onToggleRepeat}
        className="transition-all duration-200"
      />
    </div>
  );
};

export default PlaybackControls;