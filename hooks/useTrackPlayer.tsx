import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import TrackPlayer, {
  Capability,
  State,
  Track,
  useActiveTrack,
  usePlaybackState,
  useProgress,
} from 'react-native-track-player';
import defaultTracks from '../data/defaultTracks.json';

type TrackPlayerContextType = {
  activeTrack?: Track;
  tracks: Track[];
  activeTrackIndex: number;
  isPlaying: boolean;
  isLoading: boolean;
  isBuffering: boolean;
  position: number;
  duration: number;
  play: () => void;
  pause: () => void;
  stop: () => void;
  skip: (idx: number) => void;
  previous: () => void;
  next: () => void;
  seekTo: (position: number) => void;
};

const TrackPlayerContext = createContext(
  {} as TrackPlayerContextType,
);

export function TrackPlayerProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [isPlayerSetup, setIsPlayerSetup] = useState(false);
  const { state } = usePlaybackState();
  const { position, duration } = useProgress();
  const isPlaying = state === State.Playing;
  const isLoading = state === State.Loading;
  const isBuffering = state === State.Buffering;
  const activeTrack = useActiveTrack();
  const activeTrackIndex = activeTrack
    ? tracks.findIndex(
        (track) => track.title === activeTrack.title,
      )
    : -1;

  const play = () => TrackPlayer.play();
  const pause = () => TrackPlayer.pause();
  const stop = () => TrackPlayer.stop();
  const skip = (idx: number) => TrackPlayer.skip(idx);
  const previous = () => TrackPlayer.skipToPrevious();
  const next = () => TrackPlayer.skipToNext();
  const seekTo = (position: number) =>
    TrackPlayer.seekTo(position);

  const setupPlayer = async () => {
    try {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.updateOptions({
        capabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
        ],
      });
      await TrackPlayer.reset();
      await TrackPlayer.add(defaultTracks);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!isPlayerSetup) {
      setupPlayer();
      setTracks(defaultTracks);
      setIsPlayerSetup(true);
    }
  }, [isPlayerSetup]);

  return (
    <TrackPlayerContext.Provider
      value={{
        activeTrack,
        tracks,
        activeTrackIndex,
        isPlaying,
        isLoading,
        isBuffering,
        position,
        duration,
        play,
        pause,
        stop,
        skip,
        previous,
        next,
        seekTo,
      }}
    >
      {children}
    </TrackPlayerContext.Provider>
  );
}

export const useTrackPlayer = () =>
  useContext(TrackPlayerContext);
