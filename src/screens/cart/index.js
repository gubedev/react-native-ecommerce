import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, FlatList } from 'react-native';
import { scale } from 'react-native-size-matters';
import Container from 'components/container';
import Title from 'components/title';
import ProductCard from 'components/product-card';
import Button from 'components/button';
import { updateCartItem, cleanupCart } from 'store/actions/cart.action';
import styles from './styles';

const Cart = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.cart);
  const RenderTitle = ({ heading, rightLabel }) => {
    return <Title heading={heading} rightLabel={rightLabel} />;
  };
  const handleCountChange = (item, quantity) => {
    dispatch(updateCartItem(item, quantity));
  };
  const sumTotal = items =>
    items.map(item => item.quantity * item.price).reduce((a, b) => a + b, 0);

  const handleCleanup = () => {
    dispatch(cleanupCart());
  };
  const handleEnd = () => {
    dispatch(cleanupCart());
  };
  return (
    <Container isScrollable style={styles.container}>
      <View>
        <RenderTitle heading="Carrito" />
      </View>
      <View>
        <FlatList
          style={{ marginTop: scale(16) }}
          ItemSeparatorComponent={() => <View style={{ padding: scale(10) }} />}
          data={items}
          renderItem={({ item, index }) => (
            <ProductCard
              key={index}
              item={item}
              onCountChange={handleCountChange}
              showCount={true}
              initial={item.quantity}
            />
          )}
        />
      </View>
      <View style={{ marginTop: scale(16) }}>
        <RenderTitle heading="Total" />
        <RenderTitle heading={`$ ${sumTotal(items)}`} />
      </View>
      {items.length > 0 && (
        <View style={{ marginTop: scale(16) }}>
          <Button onPress={handleEnd} label="FINALIZAR" />
          <Button onPress={handleCleanup} label="VACIAR" />
        </View>
      )}
    </Container>
  );
};

export default Cart;
