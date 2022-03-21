import React from 'react'
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";

import cartState from "../stores/shoppingCart/atom";
import { Image,Button,Flex } from "@chakra-ui/react"


function Cart() {
    const [cart, setCart] = useRecoilState(cartState);
   
    
    function handleDelete(id) {
      const newState = cart.filter(cartItem => cartItem.id !== id);
      
        setCart(newState);
    }
    
    return <div>
  	{
      cart.map(cartItem => {
        return (
          <div>
            <Image src={cartItem.image} boxSize="200px" />
            <p>{cartItem.title}</p>
          	<button onClick={() => handleDelete(cartItem.id)}>Ta bort</button>
          </div>
        )
      })
    }
  </div>
    
  };

export default Cart;
