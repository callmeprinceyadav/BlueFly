
import React from 'react';
import products from './recom_product';
import { VStack, Flex, Text } from '@chakra-ui/react'; // Assuming Chakra UI components

const ProductList = () => {
  return (
    <div className="grid-container">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.name} />

          <VStack>
            <Text className="price" as="b">
              {product.name}
            </Text>
            <Flex>
              <Text className="price" as="del">
                ${product.originalPrice}
              </Text>
              <Text className="price" as="b">
                ${product.discountedPrice}
              </Text>
              <Text className="price" as="kbd" color="red">
                Save {product.discountPercentage}%
              </Text>
            </Flex>
            <button className="add-to-cart-btn">Add To Cart</button>
          </VStack>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
