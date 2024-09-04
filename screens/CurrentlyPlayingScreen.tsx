import { Text, View, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import { useTrackPlayer } from '../hooks/useTrackPlayer';
import IconButton from '../components/IconButton';
import PlayPauseButton from '../components/PlayPauseButton';
import Artwork from '../components/Artwork';

const CurrentlyPlayingScreen = () => {
  const {
    activeTrack,
    tracks,
    activeTrackIndex,
    isLoading,
    position,
    duration,
    previous,
    next,
    seekTo,
  } = useTrackPlayer();
  const loading = isLoading;

  if (!activeTrack) return null;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.trackDetailContainer}>
          <Artwork
            style={styles.artwork}
            source={{ uri: activeTrack.artwork }}
          />

          <Text style={styles.title}>
            {activeTrack.title}
          </Text>
          <Slider
            style={styles.slider}
            minimumTrackTintColor="purple"
            maximumTrackTintColor="white"
            value={position}
            minimumValue={0}
            maximumValue={duration}
            onValueChange={seekTo}
          />
          <View style={styles.controlsContainer}>
            <IconButton
              name="arrow-left"
              size={35}
              onPress={previous}
              disabled={activeTrackIndex === 0}
            />
            <PlayPauseButton size={45} disabled={loading} />
            <IconButton
              name="arrow-right"
              size={35}
              onPress={next}
              disabled={
                activeTrackIndex === tracks.length - 1
              }
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  content: {
    flex: 1,
  },
  trackDetailContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  artwork: {
    width: 250,
    height: 250,
  },
  title: {
    margin: 10,
    fontSize: 28,
    color: '#fff',
  },
  slider: {
    width: '60%',
  },
  controlsContainer: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default CurrentlyPlayingScreen;
