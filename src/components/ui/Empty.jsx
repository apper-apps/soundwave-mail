import { cn } from '@/utils/cn';
import ApperIcon from '@/components/ApperIcon';

const Empty = ({ 
  message = "No tracks available",
  description = "Add some music to get started",
  onAction,
  actionLabel = "Add Music",
  className,
  ...props 
}) => {
  return (
    <div className={cn("flex items-center justify-center p-8", className)} {...props}>
      <div className="glass-panel p-8 text-center max-w-md">
        <div className="mb-6">
          <div className="w-20 h-20 mx-auto bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mb-4">
            <ApperIcon name="Music" className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-xl font-display font-semibold gradient-text mb-2">
            {message}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            {description}
          </p>
        </div>
        
        {onAction && (
          <button
            onClick={onAction}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium hover:from-secondary hover:to-accent transition-all duration-200 hover:scale-105 shadow-glow"
          >
            <ApperIcon name="Plus" className="w-4 h-4 mr-2" />
            {actionLabel}
          </button>
        )}
        
        <div className="mt-6 pt-4 border-t border-white/10">
          <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
            <span className="flex items-center">
              <ApperIcon name="Music2" className="w-3 h-3 mr-1" />
              MP3, WAV, FLAC
            </span>
            <span className="flex items-center">
              <ApperIcon name="Upload" className="w-3 h-3 mr-1" />
              Drag & Drop
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Empty;