import React from 'react'
import { Link } from "react-router-dom";
import {useRecoilState} from "recoil";
import {authState} from "../stores/auth/atom.js"


function Home () {

    const [auth, setAuth] = useRecoilState(authState); 

    return (
        <h1>Home {auth.token}</h1>
    )
}

export default Home;