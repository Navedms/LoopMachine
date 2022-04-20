import React from 'react';
import { TouchableOpacity } from 'react-native';

import Icon from './Icon';

function Controller({
  onPress,
  name,
  size,
  color,
  backgroundColor,
  simpleLineIcons,
  style
}) {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Icon name={name} size={size} iconColor={color} backgroundColor={backgroundColor} simpleLineIcons={simpleLineIcons} />
    </TouchableOpacity>
  );
}

export default Controller;