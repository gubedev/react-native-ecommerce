import React from 'react';
import { View, Image } from 'react-native';
import { scale } from 'react-native-size-matters';
import { COLORS } from 'utils/constants/colors';
import Label from 'components/label';
import ItemCount from 'components/item-count';

export default function ProductCard({ navigation, item, onCountChange }) {
  const { title, description, price, image, isNew } = item;
  return (
    <View style={{ display: 'flex', flexDirection: 'row' }}>
      <Image
        style={{
          height: scale(130),
          width: scale(130),
        }}
        source={{ uri: image }}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          paddingLeft: scale(32),
        }}>
        <View>
          <Label
            text={title?.substring(0, 24)}
            style={{
              fontSize: scale(13),
              color: COLORS.black,
              fontWeight: '800',
            }}
          />
          <Label
            text={description?.substring(0, 24)}
            style={{ fontSize: scale(13), color: COLORS.darkGray }}
          />
          <Label
            text={`$ ${price}`}
            style={{
              fontSize: scale(18),
              fontWeight: '500',
              color: COLORS.primary,
            }}
          />
        </View>
        <View>
          <ItemCount onCountChange={onCountChange} />
        </View>
      </View>
    </View>
  );
}
