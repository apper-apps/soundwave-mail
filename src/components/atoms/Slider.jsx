import { forwardRef } from 'react';
import { cn } from '@/utils/cn';

const Slider = forwardRef(({ 
  className, 
  value = 0,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  ...props 
}, ref) => {
  return (
    <div className={cn("relative w-full", className)}>
      <input
        ref={ref}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange?.(parseFloat(e.target.value))}
        className="w-full h-2 bg-gray-700 rounded-full appearance-none cursor-pointer slider"
        {...props}
      />
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          background: linear-gradient(135deg, #6366F1, #8B5CF6);
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
          transition: all 0.2s ease;
        }
        .slider::-webkit-slider-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 0 15px rgba(99, 102, 241, 0.8);
        }
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: linear-gradient(135deg, #6366F1, #8B5CF6);
          border-radius: 50%;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
          transition: all 0.2s ease;
        }
        .slider::-moz-range-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 0 15px rgba(99, 102, 241, 0.8);
        }
      `}</style>
    </div>
  );
});

Slider.displayName = 'Slider';

export default Slider;