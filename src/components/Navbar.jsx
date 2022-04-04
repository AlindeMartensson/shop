import React from "react";
import { Box, Stack } from "@chakra-ui/react"
import { Link } from "react-router-dom"


function Navbar () {

    return (
        <Box bg="lightblue" 
        padding="3" 
        display="flex" 
        justifyContent="space-around" 
        alignItems="center">
          <Stack direction="row" as="nav">
            <Link to="/" ><h2>Home</h2></Link>
            <Link to="/AllProducts" ><h2>Products</h2></Link>
            <Link to="/CartPage" ><h2>Cart</h2></Link>
            <Link to="/Login" ><h2>Login</h2></Link>
            <Link to="/Register" ><h2>Register</h2></Link>
            <Link to="/Profile" ><h2>Profile</h2></Link>
            <Link to="/Admin" ><h2>Admin</h2></Link>

          </Stack>
        </Box>
    )
}

export default Navbar;