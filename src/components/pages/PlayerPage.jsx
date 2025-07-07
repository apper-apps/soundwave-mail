import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import AudioPlayer from '@/components/organisms/AudioPlayer';
import Playlist from '@/components/organisms/Playlist';
import Loading from '@/components/ui/Loading';
import Error from '@/components/ui/Error';
import Empty from '@/components/ui/Empty';
import { trackService } from '@/services/api/trackService';
import { useAudioPlayer } from '@/hooks/useAudioPlayer';
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts';

const PlayerPage = () => {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const player = useAudioPlayer(tracks);
  useKeyboardShortcuts(player);

  const loadTracks = async () => {
    try {
      setLoading(true);
      setError(null);
      const tracksData = await trackService.getAll();
      setTracks(tracksData);
    } catch (err) {
      setError(err.message);
      toast.error('Failed to load tracks');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTracks();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} onRetry={loadTracks} />;
  }

  if (tracks.length === 0) {
    return (
      <Empty 
        message="No Music Found"
        description="Add some tracks to start your musical journey"
        onAction={loadTracks}
        actionLabel="Refresh"
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-surface to-background p-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-display font-bold gradient-text mb-2">
            SoundWave Pro
          </h1>
          <p className="text-gray-400 text-lg">
            Professional WordPress Audio Player
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Player */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <AudioPlayer player={player} />
          </motion.div>

          {/* Playlist */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Playlist 
              tracks={tracks}
              currentTrackIndex={player.currentTrackIndex}
              onTrackSelect={player.playTrack}
            />
          </motion.div>
        </div>

        {/* Keyboard Shortcuts Info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 glass-panel p-4 rounded-2xl"
        >
          <h3 className="font-display font-semibold text-lg gradient-text mb-3">
            Keyboard Shortcuts
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            <div className="flex items-center space-x-2">
              <kbd className="px-2 py-1 bg-surface rounded text-xs">Space</kbd>
              <span className="text-gray-400">Play/Pause</span>
            </div>
            <div className="flex items-center space-x-2">
              <kbd className="px-2 py-1 bg-surface rounded text-xs">←/→</kbd>
              <span className="text-gray-400">Seek</span>
            </div>
            <div className="flex items-center space-x-2">
              <kbd className="px-2 py-1 bg-surface rounded text-xs">↑/↓</kbd>
              <span className="text-gray-400">Volume</span>
            </div>
            <div className="flex items-center space-x-2">
              <kbd className="px-2 py-1 bg-surface rounded text-xs">N/P</kbd>
              <span className="text-gray-400">Next/Prev</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PlayerPage;