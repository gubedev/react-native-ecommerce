import React from 'react';
import { View } from 'react-native';
import { scale } from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/dist/Feather';
import { COLORS } from 'utils/constants/colors';
import Label from 'components/label';

import styles from './styles';

export default function InputCount({ containerStyle }) {
  const [focused, setFocused] = React.useState(false);
  const onFocus = () => {
    setFocused(!focused);
  };
  return (
    <View
      style={[
        styles.container,
        containerStyle,
        focused ? styles.activeBorder : styles.blurBorder,
      ]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: scale(8),
          paddingRight: scale(8),
        }}>
        <Feather name={'minus'} size={scale(20)} color={COLORS.primary}  />
        <Label style={{ padding: scale(16) }} />
        <Feather name={'plus'} size={scale(20)} color={COLORS.primary} />
      </View>
    </View>
  );
}
