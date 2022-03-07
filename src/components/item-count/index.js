import React from 'react';
import { Text, View } from 'react-native';
import Button from 'components/button';

const Counter = () => {
  return <View style={{ display: 'flex' }}></View>;
};

export default function ItemCount() {
  const [isShowingCount, setIsShowingCount] = React.useState(false);
  return isShowingCount === true ? (
    <Counter />
  ) : (
    <Button
      onPress={() => {
        setIsShowingCount(true);
      }}
      label="AGREGAR"
    />
  );
}
