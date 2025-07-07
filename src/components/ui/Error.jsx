import { cn } from '@/utils/cn';
import ApperIcon from '@/components/ApperIcon';

const Error = ({ 
  message = "Something went wrong", 
  onRetry,
  className,
  ...props 
}) => {
  return (
    <div className={cn("flex items-center justify-center p-8", className)} {...props}>
      <div className="glass-panel p-8 text-center max-w-md">
        <div className="mb-6">
          <div className="w-16 h-16 mx-auto bg-gradient-to-r from-error/20 to-error/10 rounded-full flex items-center justify-center mb-4">
            <ApperIcon name="AlertCircle" className="w-8 h-8 text-error" />
          </div>
          <h3 className="text-xl font-display font-semibold text-white mb-2">
            Audio Player Error
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            {message}
          </p>
        </div>
        
        {onRetry && (
          <button
            onClick={onRetry}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium hover:from-secondary hover:to-accent transition-all duration-200 hover:scale-105 shadow-glow"
          >
            <ApperIcon name="RefreshCw" className="w-4 h-4 mr-2" />
            Try Again
          </button>
        )}
        
        <div className="mt-6 pt-4 border-t border-white/10">
          <p className="text-xs text-gray-500">
            Check your internet connection or audio file format
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error;