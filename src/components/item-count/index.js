import React from 'react';
import Button from 'components/button';
import InputCount from 'components/input-count';

export default function ItemCount({ onCountChange, itemId }) {
  const [isShowingCount, setIsShowingCount] = React.useState(false);
  return isShowingCount === true ? (
    <InputCount onCountChange={onCountChange} itemId={itemId} />
  ) : (
    <Button
      onPress={() => {
        setIsShowingCount(true);
      }}
      label="AGREGAR"
    />
  );
}
