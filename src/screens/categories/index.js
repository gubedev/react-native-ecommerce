import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { scale } from 'react-native-size-matters';
import TouchableRipple from 'react-native-touch-ripple';
import Container from 'components/container';
import Label from 'components/label';
import Title from 'components/title';
import ProductCard from 'components/product-card';
import { COLORS, SHADOW } from 'utils/constants/colors';
import { CATEGORIES } from 'utils/data/categories';
import { selectCategory, fetchProducts } from 'store/actions/shop.action';
import { updateCartItem } from 'store/actions/cart.action';
import { DEFAULT_CATEGORY } from 'store/reducers/shop.reducer';

import styles from './styles';

const Categories = () => {
  const dispatch = useDispatch();
  const { isLoading, selectedCategory, products } = useSelector(
    state => state.shop,
  );
  React.useEffect(() => {
    dispatch(selectCategory(DEFAULT_CATEGORY));
  }, []);
  React.useEffect(() => {
    if (selectCategory !== undefined) {
      dispatch(fetchProducts(selectedCategory?.id));
    }
  }, [selectedCategory]);
  const RenderTitle = ({ heading, rightLabel }) => {
    return <Title heading={heading} rightLabel={rightLabel} />;
  };
  const Placeholder = () => {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  };
  const handleCountChange = (item, quantity) => {
    dispatch(updateCartItem(item, quantity));
  };
  return (
    <Container isScrollable style={styles.container}>
      <View>
        <RenderTitle heading="Categorias" />
        <FlatList
          style={{ marginTop: scale(16), marginBottom: scale(16) }}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={CATEGORIES}
          ItemSeparatorComponent={() => <View style={{ padding: scale(10) }} />}
          renderItem={({ item, index }) => {
            const { label, Icon } = item;
            return (
              <View key={index} style={{ alignItems: 'center' }}>
                <TouchableRipple
                  onPress={() => {
                    dispatch(selectCategory(item));
                  }}
                  rippleColor={COLORS.primary}
                  rippleContainerBorderRadius={scale(40)}
                  rippleDuration={800}
                  style={{
                    ...SHADOW,
                    backgroundColor: COLORS.white,
                    height: scale(70),
                    width: scale(70),
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: scale(40),
                  }}>
                  <Icon />
                </TouchableRipple>
                <View style={{ marginTop: scale(15) }}>
                  <Label text={label} style={{ fontSize: scale(14) }} />
                </View>
              </View>
            );
          }}
        />
      </View>
      <View>
        {selectedCategory !== undefined ? (
          <RenderTitle heading={selectedCategory.label} />
        ) : (
          <></>
        )}
        {isLoading === true ? (
          <View style={{ marginTop: scale(64) }}>
            <Placeholder />
          </View>
        ) : (
          <View>
            <FlatList
              style={{ marginTop: scale(16) }}
              ItemSeparatorComponent={() => (
                <View style={{ padding: scale(10) }} />
              )}
              data={products}
              renderItem={({ item, index }) => (
                <ProductCard
                  key={index}
                  item={item}
                  onCountChange={handleCountChange}
                />
              )}
            />
          </View>
        )}
      </View>
    </Container>
  );
};

export default Categories;
