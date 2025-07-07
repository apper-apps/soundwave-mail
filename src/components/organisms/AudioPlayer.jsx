import { cn } from '@/utils/cn';
import WaveformDisplay from '@/components/molecules/WaveformDisplay';
import PlaybackControls from '@/components/molecules/PlaybackControls';
import VolumeControl from '@/components/molecules/VolumeControl';
import TrackInfo from '@/components/molecules/TrackInfo';
import ProgressBar from '@/components/molecules/ProgressBar';

const AudioPlayer = ({ 
  player,
  className 
}) => {
  return (
    <div className={cn("glass-panel p-6 rounded-2xl space-y-6", className)}>
      {/* Hidden Audio Element */}
      <audio 
        ref={player.audioRef}
        src={player.currentTrack?.url}
        preload="metadata"
        crossOrigin="anonymous"
      />
      
      {/* Track Info */}
      <TrackInfo 
        track={player.currentTrack}
        isPlaying={player.isPlaying}
        currentTime={player.currentTime}
        duration={player.duration}
      />
      
      {/* Waveform Display */}
      <WaveformDisplay 
        waveformData={player.currentTrack?.waveformData || []}
        currentTime={player.currentTime}
        duration={player.duration}
        isPlaying={player.isPlaying}
        onSeek={player.seek}
      />
      
      {/* Progress Bar */}
      <ProgressBar 
        currentTime={player.currentTime}
        duration={player.duration}
        onSeek={player.seek}
      />
      
      {/* Playback Controls */}
      <PlaybackControls 
        isPlaying={player.isPlaying}
        isLoading={player.isLoading}
        onPlay={player.play}
        onPause={player.pause}
        onNext={player.nextTrack}
        onPrevious={player.prevTrack}
        repeat={player.repeat}
        shuffle={player.shuffle}
        onToggleRepeat={player.toggleRepeat}
        onToggleShuffle={player.toggleShuffle}
      />
      
      {/* Volume Control */}
      <div className="flex justify-center">
        <VolumeControl 
          volume={player.volume}
          isMuted={player.isMuted}
          onVolumeChange={player.setVolume}
          onToggleMute={player.toggleMute}
        />
      </div>
    </div>
  );
};

export default AudioPlayer;