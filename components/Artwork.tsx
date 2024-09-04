import { Image, ImageProps } from 'expo-image';

import React from 'react';

const Artwork = (props: ImageProps) => {
  return (
    <Image
      {...props}
      cachePolicy="memory-disk"
      style={Object.assign(
        { borderRadius: 2 },
        props.style,
      )}
    />
  );
};

export default Artwork;
