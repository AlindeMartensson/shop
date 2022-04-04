import React, { useEffect, useState,  } from "react";
import { useRecoilState,useRecoilValue } from "recoil";
import { authState } from "../stores/auth/atom";
import { useNavigate } from "react-router-dom"
import { Image,Button,Flex,Input } from "@chakra-ui/react"


function Profile () {

    const [auth, setAuth] = useRecoilState(authState); 

   
    function profileData () {
    fetch(`https://k4backend.osuka.dev/users/${auth.userId}`)
    .then((res) => res.json())
    .then((json) => setAuth({
        ...auth,
        user: json
      }));

    }

    useEffect(() => {profileData()}, []);
    

    if (!auth.user) {
        return <div>Not logged in</div>
    }


    return (
        <div>
        <h1>Profile {auth.token}</h1>
        <h1>Username: {auth.user.username}</h1>
        <h1>First name: {auth.user.name.firstname}</h1>
        <h1>Last name: {auth.user.name.lastname}</h1>
       
        </div>
    )
}

export default Profile;