import React, { useEffect, useState, } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { authState, } from "../stores/auth/atom";
import { useNavigate } from "react-router-dom";
import { Image, Button, Flex, Input } from "@chakra-ui/react";

function Login() {

    const [auth, setAuth] = useRecoilState(authState); 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // från react-router dom
  const reset= useResetRecoilState(authState);

  function profileData (auth) {
    fetch(`https://k4backend.osuka.dev/users/${auth.userId}`)
    .then((res) => res.json())
    .then((json) => setAuth({
        ...auth,
        user: json
      }));

    }

  function handleLogin() {
    fetch("https://k4backend.osuka.dev/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((json) => profileData(json));

    navigate("/");

    
  }

  function handleLogout () { 
  reset();

}

 

  return (
    <div>
      <p>Username:</p>
      <Input
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      ></Input>
      <p>Password:</p>
      <Input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></Input>
      <Button onClick={handleLogin}>Login</Button>

      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}

export default Login;
