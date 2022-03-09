import React from 'react';
import { Pressable, View } from 'react-native';
import { scale } from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/dist/Feather';
import { COLORS } from 'utils/constants/colors';
import Label from 'components/label';

import styles from './styles';

export default function InputCount({ containerStyle, item, onCountChange }) {
  const [quantity, setQuantity] = React.useState(1);
  return (
    <View style={[styles.container, containerStyle, styles.blurBorder]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: scale(8),
          paddingRight: scale(8),
        }}>
        <Pressable
          onPress={() => {
            if (quantity > 0) {
              setQuantity(quantity - 1);
              onCountChange(item, -1);
            }
          }}>
          <Feather name={'minus'} size={scale(20)} color={COLORS.primary} />
        </Pressable>
        <Label style={{ padding: scale(16) }} text={quantity} />
        <Pressable
          onPress={() => {
            setQuantity(quantity + 1);
            onCountChange(item, 1);
          }}>
          <Feather name={'plus'} size={scale(20)} color={COLORS.primary} />
        </Pressable>
      </View>
    </View>
  );
}
