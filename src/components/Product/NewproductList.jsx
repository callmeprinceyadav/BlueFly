import React from 'react';
import newproducts from './new_arrival';
import { VStack, Flex, Text } from '@chakra-ui/react'; // Assuming Chakra UI components

const NewProductList = () => {
  return (
    <div className="grid-container">
      {newproducts.map((newproduct) => (
        <div key={newproduct.id} className="product-item">
          <img src={newproduct.image} alt={newproduct.title} />

          <VStack>
            <Text className="price" as="b">
              {newproduct.title} {/* Use title instead of name */}
            </Text>
            <Flex>
              <Text className="price" as="del">
                {newproduct.oldPrice} {/* Use oldPrice instead of originalPrice */}
              </Text>
              <Text className="price" as="b">
                {newproduct.newPrice} {/* Use newPrice instead of discountedPrice */}
              </Text>
              <Text className="price" as="kbd" color="red">
                {newproduct.discount} {/* Use discount instead of calculating percentage */}
              </Text>
            </Flex>
            <button className="add-to-cart-btn">Add To Cart</button>
          </VStack>
        </div>
      ))}
    </div>
  );
};

export default NewProductList;
