import React from 'react';
import Button from 'components/button';
import InputCount from 'components/input-count';

export default function ItemCount({ onCountChange, item }) {
  const [isShowingCount, setIsShowingCount] = React.useState(false);
  return isShowingCount === true ? (
    <InputCount onCountChange={onCountChange} item={item} />
  ) : (
    <Button
      onPress={() => {
        setIsShowingCount(true);
        onCountChange(item, 1);
      }}
      label="AGREGAR"
    />
  );
}
