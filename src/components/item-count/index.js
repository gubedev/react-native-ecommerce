import React from 'react';
import { scale } from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/dist/Feather';
import Button from 'components/button';
import InputCount from 'components/input-count';
import { COLORS } from 'utils/constants/colors';

export default function ItemCount() {
  const [isShowingCount, setIsShowingCount] = React.useState(false);
  return isShowingCount === true ? (
    <InputCount
      IconLeft={
        <Feather
          name={'mouse-pointer'}
          size={scale(20)}
          color={COLORS.primary}
        />
      }
    />
  ) : (
    <Button
      onPress={() => {
        setIsShowingCount(true);
      }}
      label="AGREGAR"
    />
  );
}
