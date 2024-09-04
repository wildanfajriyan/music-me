import { ComponentProps } from 'react';
import { FontAwesome } from '@expo/vector-icons';

const IconButton = (
  props: ComponentProps<typeof FontAwesome.Button>,
) => {
  return (
    <FontAwesome.Button
      borderRadius={100}
      backgroundColor="transparent"
      selectionColor="transparent"
      color="#fff"
      style={{
        ...props.style,
        padding: 0,
        opacity: props.disabled ? 0.5 : 1,
      }}
      iconStyle={{
        ...props.iconStyle,
        marginRight: 0,
        textAlign: 'center',
      }}
      {...props}
    />
  );
};

export default IconButton;
