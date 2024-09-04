import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import { Track } from 'react-native-track-player';
import Artwork from './Artwork';

type TrackRowProps = {
  track: Track;
  onPress: () => void;
};

const TrackRow = ({ track, onPress }: TrackRowProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
    >
      <Artwork
        style={styles.artwork}
        source={{ uri: track.artwork }}
      />
      <Text style={styles.title}>{track.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  artwork: {
    height: 50,
    width: 50,
  },
  title: {
    marginLeft: 10,
    color: 'white',
  },
});

export default TrackRow;
