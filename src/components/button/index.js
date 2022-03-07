import React from 'react';
import { Text, ActivityIndicator } from 'react-native';
import { scale } from 'react-native-size-matters';
import { COLORS } from 'utils/constants/colors';
import TouchableRipple from 'react-native-touch-ripple';
import Feather from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

export default function Button({
  icon,
  unFilled,
  label,
  style,
  onPress,
  labelStyle,
  isLoading,
}) {
  return (
    <TouchableRipple
      rippleColor={COLORS.primary}
      onPress={onPress}
      rippleDuration={800}
      style={[styles.container, unFilled ? styles.unFilled : {}, style]}>
      {icon && (
        <Feather
          name={icon}
          size={scale(20)}
          color={unFilled ? COLORS.black : COLORS.white}
        />
      )}
      {!isLoading ? (
        <Text
          style={[
            styles.label,
            unFilled ? styles.unFilledLabel : {},
            labelStyle,
          ]}>
          {`${label}`.toUpperCase()}
        </Text>
      ) : (
        <ActivityIndicator size={'large'} color={COLORS.white} />
      )}
    </TouchableRipple>
  );
}
