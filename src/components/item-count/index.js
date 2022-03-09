import React from 'react';
import Button from 'components/button';
import InputCount from 'components/input-count';

export default function ItemCount({
  onCountChange,
  item,
  showCount = false,
  initial,
}) {
  const [isShowingCount, setIsShowingCount] = React.useState(showCount);
  return isShowingCount === true ? (
    <InputCount onCountChange={onCountChange} item={item} initial={initial} />
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
