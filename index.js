import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './App';
import { registerRootComponent } from 'expo';
import TrackPlayer from 'react-native-track-player';
import { TrackPlayerProvider } from './hooks/useTrackPlayer';

//And pass appName to AppRegistry
AppRegistry.registerComponent(appName, () => App);

// export const onRegisterPlayback = async () => {
//   TrackPlayer.addEventListener('remote-play', () =>
//     TrackPlayer.play(),
//   );

//   TrackPlayer.addEventListener('remote-pause', () =>
//     TrackPlayer.pause(),
//   );

//   TrackPlayer.addEventListener('remote-stop', () =>
//     TrackPlayer.destroy(),
//   );
// };

// TrackPlayer.registerPlaybackService(() =>
//   require('./services.js'),
// );

registerRootComponent(App);
