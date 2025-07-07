import { useEffect } from 'react';

export const useKeyboardShortcuts = (player) => {
  useEffect(() => {
    const handleKeyPress = (e) => {
      // Don't trigger shortcuts if user is typing in an input
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
      }

      switch (e.code) {
        case 'Space':
          e.preventDefault();
          player.togglePlay();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          player.seek(Math.max(0, player.currentTime - 10));
          break;
        case 'ArrowRight':
          e.preventDefault();
          player.seek(Math.min(player.duration, player.currentTime + 10));
          break;
        case 'ArrowUp':
          e.preventDefault();
          player.setVolume(Math.min(1, player.volume + 0.1));
          break;
        case 'ArrowDown':
          e.preventDefault();
          player.setVolume(Math.max(0, player.volume - 0.1));
          break;
        case 'KeyM':
          e.preventDefault();
          player.toggleMute();
          break;
        case 'KeyR':
          e.preventDefault();
          player.toggleRepeat();
          break;
        case 'KeyS':
          e.preventDefault();
          player.toggleShuffle();
          break;
        case 'KeyN':
          e.preventDefault();
          player.nextTrack();
          break;
        case 'KeyP':
          e.preventDefault();
          player.prevTrack();
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [player]);
};