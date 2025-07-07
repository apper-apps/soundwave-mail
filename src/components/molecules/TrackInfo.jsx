import { cn } from '@/utils/cn';

const TrackInfo = ({ 
  track, 
  isPlaying = false,
  currentTime = 0,
  duration = 0,
  className 
}) => {
  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className={cn("text-center space-y-2", className)}>
      {track?.artwork && (
        <div className="w-16 h-16 mx-auto mb-4 rounded-xl overflow-hidden shadow-glass">
          <img 
            src={track.artwork} 
            alt={track.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div>
        <h3 className={cn(
          "font-display font-bold text-lg transition-all duration-300",
          isPlaying ? "gradient-text" : "text-white"
        )}>
          {track?.title || 'No Track Selected'}
        </h3>
        <p className="text-gray-400 text-sm font-medium">
          {track?.artist || 'Unknown Artist'}
        </p>
        {track?.album && (
          <p className="text-gray-500 text-xs mt-1">
            {track.album}
          </p>
        )}
      </div>
      
      <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
        <span className="font-mono">
          {formatTime(currentTime)}
        </span>
        <span>•</span>
        <span className="font-mono">
          {formatTime(duration)}
        </span>
      </div>
    </div>
  );
};

export default TrackInfo;