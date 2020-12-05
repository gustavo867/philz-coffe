import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

import { products } from "./Model";

const { width } = Dimensions.get("window");

const SIZE = 200;

interface Props {
  x: Animated.SharedValue<number>;
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
});

interface Product {
  product: typeof products[0];
  index: number;
  x: Animated.SharedValue<number>;
}

const Product = ({ product, index, x }: Product) => {
  const style = useAnimatedStyle(() => {
    const inputRange = [
      width * (index - 1),
      width * index,
      width * (index + 1),
    ];
    const translateX = interpolate(x.value, inputRange, [
      width / 2,
      0,
      -width / 2,
    ]);
    const scale = interpolate(x.value, inputRange, [0.75, 1, 0.75]);

    return {
      transform: [{ translateX }, { scale }],
    };
  });

  return (
    <Animated.View key={index} style={[styles.container, style]}>
      <Image
        source={product.picture}
        style={{ width: SIZE, height: SIZE * product.aspectRatio }}
      />
    </Animated.View>
  );
};

const Products = ({ x }: Props) => {
  return (
    <View style={styles.container} pointerEvents="none">
      {products.map((product, index) => {
        return <Product key={index} product={product} index={index} x={x} />;
      })}
    </View>
  );
};

export default Products;
