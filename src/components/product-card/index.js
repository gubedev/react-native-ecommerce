import React from 'react';
import { View, Image } from 'react-native';
import { scale } from 'react-native-size-matters';
import { COLORS } from 'utils/constants/colors';
import Label from 'components/label';

export default function ProductCard({ navigation, item }) {
  const { title, description, price, image, isNew } = item;
  return (
    <View>
      <View
        style={{
          height: scale(200),
          width: scale(160),
        }}>
        <Image
          resizeMode="contain"
          style={{ height: scale(200), width: scale(180) }}
          source={{ uri: image }}
        />
        {isNew && (
          <View
            style={{
              backgroundColor: COLORS.red,
              position: 'absolute',
              top: scale(10),
              right: scale(20),
              padding: scale(3),
              borderRadius: scale(3),
              paddingHorizontal: scale(10),
            }}>
            <Label
              text="New"
              style={{ fontSize: scale(10), color: COLORS.white }}
            />
          </View>
        )}
      </View>
      <View style={{ paddingVertical: scale(3) }}>
        <Label
          text={title?.substring(0, 20)}
          style={{ fontSize: scale(18), fontWeight: '500' }}
        />
      </View>
      <View style={{ paddingVertical: scale(2) }}>
        <Label
          text={description?.substring(0, 24)}
          style={{ fontSize: scale(13), color: COLORS.darkGray }}
        />
      </View>
      <View style={{ paddingVertical: scale(5) }}>
        <Label
          text={price}
          style={{
            fontSize: scale(18),
            color: COLORS.primary,
            fontWeight: '500',
          }}
        />
      </View>
    </View>
  );
}
