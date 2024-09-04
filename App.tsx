import {
  NavigationContainer,
  Theme,
  DefaultTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LibraryScreen from './screens/LibraryScreen';
import CurrentlyPlayingScreen from './screens/CurrentlyPlayingScreen';
import { RootStackParamList } from './types';
import { TrackPlayerProvider } from './hooks/useTrackPlayer';

const RootStack =
  createNativeStackNavigator<RootStackParamList>();

const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: '#fff',
    background: '#343a40',
  },
};

export default function App() {
  return (
    <TrackPlayerProvider>
      <NavigationContainer theme={theme}>
        <RootStack.Navigator
          initialRouteName="Library"
          screenOptions={{
            headerStyle: { backgroundColor: '#343a40' },
            headerTitleStyle: { color: '#fff' },
          }}
        >
          <RootStack.Screen
            name="Library"
            component={LibraryScreen}
            options={{ title: 'MusicMe' }}
          />
          <RootStack.Screen
            name="CurrentlyPlaying"
            component={CurrentlyPlayingScreen}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </TrackPlayerProvider>
  );
}
