import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Image, Box, Flex, Spacer, Button } from "@chakra-ui/react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { productsState } from "../stores/products/atom.js";



const AllProducts = () => {
  const [products, setProducts] = useRecoilState(productsState);

  const fetchData = () => {
    fetch("https://k4backend.osuka.dev/products")
      .then(response => {
        return response.json();
      })
      .then(data => {
        setProducts(data)
      })
      
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (

          <Flex flexWrap="wrap">
          {products.map(product => (
            <Box padding={3} width="25%">

            <div ><Image width="250px" key={product.image} src={product.image} /></div>
            <div key={product.title}>{product.title}</div>
            <div key={product.price}>{product.price}$</div>
            
            <Button><Link to={`/SingleProduct/${product.id}`}>Go to product</Link></Button>
            </Box>
          ))}
          
          </Flex>
      
    
  )
}


export default AllProducts;

