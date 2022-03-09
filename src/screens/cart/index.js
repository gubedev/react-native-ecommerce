import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, FlatList } from 'react-native';
import { scale } from 'react-native-size-matters';
import Container from 'components/container';
import Title from 'components/title';
import ProductCard from 'components/product-card';
import { updateCartItem } from 'store/actions/cart.action';
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
    </Container>
  );
};

export default Cart;
