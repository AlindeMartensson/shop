import React from "react";
import { Link } from "react-router-dom";
import productList from "../data.json";
import { Image, Box, Flex, Spacer, Button } from "@chakra-ui/react";

function AllProducts() {
  return (
    <div>
      <Box display="flex" flexWrap="wrap" justifyContent="center" padding="5">
        {productList.map((product) => {
          const image = product.image;
          const title = product.title;
          const price = product.price;

          return (
            <Box w="25%">
              <Image src={product.image} boxSize="200px" />

              <div>{title}</div>
              <div>{price} €</div>
              <Button>
                <Link to={`/SingleProduct/${product.id}`}>Go to product</Link>
              </Button>
            </Box>
          );
        })}
      </Box>

      <button>Add to cart</button>
    </div>
  );
}

export default AllProducts;
