import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { authState } from "../stores/auth/atom";
import { useNavigate } from "react-router-dom";
import { Image, Button, Flex, Input } from "@chakra-ui/react";


function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const navigate = useNavigate(); 

  function addUser() {
    fetch("https://k4backend.osuka.dev/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        username: username,
        password: password,
        
        role: "user",
        name: {
          firstname: firstname,
          lastname: lastname,
        },
        address: {
          city: "kilcoole",
          street: "7835 new road",
          number: 3,
          zipcode: "12926-3874",
        },
        phone: "1-570-236-7033", 
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));

      navigate("/Profile");
  }

  console.log(addUser);

  return (
    <div>
      <h1>Register user</h1>
      <br />
      <p>First name:</p>
      <Input
        type="text"
        value={firstname}
        onChange={(e) => {
          setFirstname(e.target.value);
        }}
      ></Input>
      <p>Last name:</p>
      <Input
        type="text"
        value={lastname}
        onChange={(e) => {
          setLastname(e.target.value);
        }}
      ></Input>
      
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
      <p>Email:</p>
      <Input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></Input>

      <Button onClick={addUser}>Register</Button>
    </div>
  );
}

export default Register;
