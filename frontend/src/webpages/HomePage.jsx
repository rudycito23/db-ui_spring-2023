import { Header, JoinModal } from "../components";
import hero from "../images/hero.png";
import "../css/HomePage.css";
import {
  SimpleGrid,
  Box,
  Image,
  Grid,
  GridItem,
  Heading,
  Center,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
  Divider,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react"
import axios from 'axios';
import { Link } from "react-router-dom";

//import { Alert } from 'react-alert'

export const HomePage = () => {
  const [input, setInput] = useState("");
  const handleInputChange = (e) => setInput(e.target.value);

  const [email, setEmail] = useState("");
  const [createpword, setCreatepword] = useState("");
  const [confirmpword, setConfirmpword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");
  
  axios.defaults.withCredentials = true;

  const login = () => {
    axios.post("http://localhost:8000/login", {
      email: email,
      createPass: createpword,
      confirmPass: confirmpword
    }).then((response) => {
     
      if (response.data.msg) {
        setLoginStatus(response.data.msg)
        alert(response.data.msg)
        
      } else {
        setLoginStatus(response.data[0].email)
        alert(response.data[0].email)
      }

    });
  };

  useEffect(() => {
    axios.get("http://localhost:8000/login").then((response) => {
      setLoginStatus(response.data.user[0].email)
    })
  },[])

  if (!loginStatus.msg && loginStatus != "Not logged in.") {
     <Link to="/dashboard" />;
  }
  
  return (
    <>
      <Grid
        templateAreas={`"nav nav"
                        "main hero"
                        "main hero"`}
        gridTemplateRows={`auto 1fr`}
        gridTemplateColumns="60% 1fr"
        gap="4"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem area={"nav"} bg="black" color='white'>
          {loginStatus}
        </GridItem>
        <GridItem area={"main"} m="auto">
          <Heading
            as="h1"
            size="2xl"
            margin="auto auto"
            textAlign="center"
          >
            Books 4 Less
          </Heading>
          <Heading as="h2" size="lg" mt="2rem" textAlign="center">
            Buy. Sell. Textbooks.
          </Heading>
          <FormControl mt="2rem" isRequired>
            <FormLabel>Email:</FormLabel>
            <Input
              type="email"
              w='100%'
              placeHolder="name@email.com"
              onChange={(e) => {
                handleInputChange(e);
                setEmail(e.target.value);
                }}
            />

            <FormLabel mt="1rem">Password:</FormLabel>
            <Input
              type="text"
              w='100%'
              placeHolder=""
              onChange={(e) => {
                handleInputChange(e);
                setCreatepword(e.target.value);
                setConfirmpword(e.target.value);
                }}
            />
          </FormControl>
          <a class="login-button" href="/">
            <span onClick={login} class="login-button-span">Sign in</span>
          </a>
          <div className="left-right-divider">
            <p className="divider-text">or</p>
          </div>
          <JoinModal />
        </GridItem>
        <GridItem area={"hero"} m='auto'>
          <Center justifyContent='center'>
          <Image className="hero" src={hero} alt="college students tutoring" /></Center>
        </GridItem>
      </Grid>
    </>
  );
};
