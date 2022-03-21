import React from "react";
import productList from "../data.json";
import { useParams } from "react-router-dom"
import { Image,Button,Flex } from "@chakra-ui/react"


import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

import cartState from "../stores/shoppingCart/atom";


import { useState } from 'react';

   

function SingleProduct () {

    const params = useParams();

    const product = productList.find((p) => p.id === parseInt(params.id) );


    const [cart, setCart] = useRecoilState(cartState);
  

    function handleAdd() {
        const newState = [...cart]; 
      
      newState.push(product); 
      
      setCart(newState) 

      
    }


    console.log(handleAdd);


    
    
    

    return (
     
        <Flex justifyContent="center" margin="50">
        <div>
        <Image src={product.image} boxSize="200px" />
        <div>{product.title}</div>
        <div>{product.description}</div>
        <div>{product.price}€</div>
        
        

          <Button onClick={handleAdd}>
              Add</Button>
        
              
          
        
        </div>
        </Flex>
    )
}





export default SingleProduct;