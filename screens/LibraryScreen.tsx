import { View, StyleSheet } from 'react-native';
import { useTrackPlayer } from '../hooks/useTrackPlayer';
import TrackList from '../components/TrackList';
import CurrentlyPlayingBar from '../components/CurrentlyPlayingBar';

const LibraryScreen = () => {
  const { activeTrack, tracks, isPlaying, play, stop } =
    useTrackPlayer();

  return (
    <View style={styles.container}>
      <View style={styles.trackListContainer}>
        <TrackList tracks={tracks} />
      </View>
      {activeTrack && (
        <View style={styles.currPlayingBarContainer}>
          <CurrentlyPlayingBar />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 12,
  },
  trackListContainer: {
    flex: 1,
  },
  currPlayingBarContainer: {
    height: 65,
  },
});

export default LibraryScreen;
