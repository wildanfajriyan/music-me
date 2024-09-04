import { ComponentProps } from 'react';
import { useTrackPlayer } from '../hooks/useTrackPlayer';
import IconButton from './IconButton';

type PlayButtonProps = Omit<
  ComponentProps<typeof IconButton>,
  'name'
>;

const PlayPauseButton = (props: PlayButtonProps) => {
  const { isPlaying, play, pause } = useTrackPlayer();

  return isPlaying ? (
    <IconButton
      onPress={pause}
      name="pause-circle"
      {...props}
    />
  ) : (
    <IconButton
      onPress={play}
      name="play-circle"
      {...props}
    />
  );
};

export default PlayPauseButton;
