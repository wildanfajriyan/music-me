import { StyleSheet, View } from 'react-native';
import { useTrackPlayer } from '../hooks/useTrackPlayer';
import TrackRow from './TrackRow';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import PlayPauseButton from './PlayPauseButton';

const CurrentlyPlayingBar = () => {
  const { navigate } =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList>
    >();

  const { activeTrack, duration } = useTrackPlayer();

  if (!activeTrack) return null;

  return (
    <View style={styles.container}>
      <View style={styles.trackDetailContainer}>
        <TrackRow
          track={activeTrack}
          onPress={() => navigate('CurrentlyPlaying')}
        />
      </View>

      <View style={styles.playPauseButtonContainer}>
        <PlayPauseButton size={35} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    minHeight: 'auto',
    paddingBottom: 24,
  },
  trackDetailContainer: {
    flex: 1,
  },
  playPauseButtonContainer: {
    paddingHorizontal: 12,
  },
});

export default CurrentlyPlayingBar;
