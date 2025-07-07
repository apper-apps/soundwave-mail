import { cn } from '@/utils/cn';
import ApperIcon from '@/components/ApperIcon';
import { motion } from 'framer-motion';

const Playlist = ({ 
  tracks = [], 
  currentTrackIndex = 0,
  onTrackSelect,
  className 
}) => {
  const formatDuration = (seconds) => {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (tracks.length === 0) {
    return (
      <div className={cn("glass-panel p-6 rounded-2xl", className)}>
        <div className="text-center space-y-4">
          <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
            <ApperIcon name="Music" className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-lg gradient-text">
              No Tracks Available
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Add some music to create your playlist
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("glass-panel rounded-2xl overflow-hidden", className)}>
      <div className="p-4 border-b border-white/10">
        <h3 className="font-display font-semibold text-lg gradient-text">
          Playlist
        </h3>
        <p className="text-gray-400 text-sm">
          {tracks.length} tracks
        </p>
      </div>
      
      <div className="max-h-96 overflow-y-auto custom-scrollbar">
        {tracks.map((track, index) => (
          <motion.div
            key={track.Id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={cn(
              "flex items-center p-4 cursor-pointer transition-all duration-200",
              "hover:bg-white/5 border-b border-white/5 last:border-b-0",
              index === currentTrackIndex && "bg-gradient-to-r from-primary/20 to-secondary/20"
            )}
            onClick={() => onTrackSelect?.(index)}
          >
            <div className="flex-shrink-0 w-12 h-12 mr-4">
              {track.artwork ? (
                <img 
                  src={track.artwork} 
                  alt={track.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-r from-primary/30 to-secondary/30 rounded-lg flex items-center justify-center">
                  <ApperIcon name="Music" className="w-6 h-6 text-white" />
                </div>
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <h4 className={cn(
                "font-medium truncate",
                index === currentTrackIndex ? "gradient-text" : "text-white"
              )}>
                {track.title}
              </h4>
              <p className="text-gray-400 text-sm truncate">
                {track.artist}
              </p>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-sm font-mono">
                {formatDuration(track.duration)}
              </span>
              {index === currentTrackIndex && (
                <ApperIcon name="Play" className="w-4 h-4 text-accent" />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;