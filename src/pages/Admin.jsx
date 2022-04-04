import React, { useEffect, useState,  } from "react";
import { useRecoilState } from "recoil";
import { authState } from "../stores/auth/atom";
import { useNavigate, Link } from "react-router-dom"
import { Image,Button,Flex,Input,Box } from "@chakra-ui/react"
import { productsState } from "../stores/products/atom.js";
import { usersState } from "../stores/users/atom.js";





const Admin = () => {

    const [auth, setAuth] = useRecoilState(authState); 
    const navigate = useNavigate();

    const [products, setProducts] = useRecoilState(productsState);
    const [users, setUsers] = useRecoilState(usersState);

   /*
    function profileData () {
    fetch(`https://k4backend.osuka.dev/users/${auth.userId}`)
    .then((res) => res.json())
    .then((json) => setAuth({
        ...auth,
        user: json
      }));

    }

    useEffect(() => {profileData()}, []);*/



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


    
          const fetchUsers = () => {
            fetch('https://k4backend.osuka.dev/users')
            .then(response => {
                return response.json();
              })
              .then(data => {
                setUsers(data)
              })
          }

          useEffect(() => {
            fetchUsers()
          }, [])

          console.log(auth);

          if ( auth.user === null) {
              return <div>Not logged in</div>
          }
          
    
          if (auth.user.role === "user") {
            return <div>Not Admin</div>
        } 


        

    return (
        <div>
          {products.map(product => (
            <Box padding={3} width="25%">
            <p>Product:</p>
            <div key={product.title}>{product.title}</div>
            </Box>
            ))};
            {users.map(user => (
            <Box padding={3} width="25%">
            <p>Username:</p>
            <div key={user.username}>{user.username}</div>
            </Box>
            ))};
            
          </div>
                )

        
}

export default Admin;