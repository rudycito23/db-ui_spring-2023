
import { InputGroup,InputLeftElement,Box, Wrap, WrapItem, Checkbox, CheckboxGroup, Text, Input, Button, Grid, GridItem, Stack, Menu, MenuButton, IconButton, useColorMode } from "@chakra-ui/react";

import { useState, useRef, useEffect } from "react"
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { CreateListing, BookList } from "../components";

import { MdDensityMedium, MdSearch } from 'react-icons/md';
import Sidebar from "../components/Sidebar";

import "../css/Dashboard.css";

export const Dashboard = () => {
  
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [myBooks, setMyBooks] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [privileges, setPrivileges] = useState("");

  const [navSize, setNavSize] = useState("large");

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const fetchBooksBySeller = async (email) => {
        try {
          const response = await axios.get(`http://localhost:8000/books/${email}`);
          console.log('Books fetched successfully:', response.data);
          setMyBooks(response.data);
          return response.data;
        } catch (error) {
          console.error('Error fetching books:', error);
        }
      };
    fetchBooksBySeller(email);
  },[email]);

  useEffect(() => {
      const fetchBooks = async () => {
        try {
          const response = await axios.get("http://localhost:8000/books", {
            params: {
              searchTerm,
              minPrice,
              maxPrice,
            },
          });
          setBooks(response.data);
        } catch (error) {
          console.error("Error fetching books data:", error);
        }
      };
      fetchBooks();
    }, [searchTerm, minPrice, maxPrice]);

  const nav = useNavigate();

    const [loginStatus, setLoginStatus] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8000/login").then((response) => {
          if (response.data.loggedIn == true){
            setLoginStatus(response.data.user[0].email)
            setFirst(response.data.user[0].firstName)
            setEmail(response.data.user[0].email)
            setLast(response.data.user[0].lastName)
            setPrivileges(response.data.user[0].privileges)
          } else {
            nav("/")
            setLoginStatus("Not logged in.")
          }
        })
      })

      // useEffect(() => {
      //   fetchBooks();
      // }, [searchTerm, minPrice, maxPrice]);

  // const fetchBooks = async () => {
  //   try {
  //     // Construct query string for filters
  //     let queryString = `http://localhost:8000/books?search=${searchTerm}`;
  //     if (minPrice) {
  //       queryString += `&minPrice=${minPrice}`;
  //     }
  //     if (maxPrice) {
  //       queryString += `&maxPrice=${maxPrice}`;
  //     }

  //     const response = await axios.get(queryString);
  //     const data = response.data;
  //     setBooks(data);
  //   } catch (error) {
  //     console.error("Error fetching books:", error);
  //   }
  // };

  

  return (

    <Grid
      templateAreas={`"header header"
                      "nav main"
                      "nav footer"`}
      gridTemplateRows={"auto 1fr auto"}
      gridTemplateColumns={"12% 1fr"}
      h="auto"
      gap="2"
      color="blackAlpha.700"
      fontWeight="bold"
    >
    
      <GridItem className="header-color" area={"header"}>
        <Stack direction="row">
          <InputGroup className="input-group" m="2rem auto" w="50%">
            <InputLeftElement
              pointerEvents='none'
              children={<MdSearch color='#606060' />}
            />
            <Input value={searchTerm} onChange={handleSearchTermChange} variant='filled' bgColor="#82AAAD" color="#606060" placeholder='Search for a textbook' />
          </InputGroup>
        </Stack>
      </GridItem>

      
      <GridItem pl="2" area={"nav"}>
      <Sidebar />
      </GridItem>
      
      <GridItem
        p={2}
        pl="1"
        bgColor="#82AAAD"
        area={"main"}
        marginLeft={navSize == "small" ? "75px" : "200px"}
        h="30rem"
        display="flex"
        flexDirection="column"
        overflowY="auto"
        position="relative" // Add this line
      >
        <Box
          p={4}
        >
          <Text color="white">Current Listings</Text>
          <Wrap spacing={2} mx="2" w="fit-content">
            {books.map((book) => (
              <Box key={book.IBSN} transform="scale(0.8)" transformOrigin="center">
                <BookList book={book} />
            </Box>
            ))}
          </Wrap>
        </Box>
      </GridItem>
      

      <GridItem 
        p={2}
        pl="1"
        bgColor="#82AAAD"
        area={"footer"}
        marginLeft={navSize == "small" ? "75px" : "200px"}
        h="30rem"
        display="flex"
        flexDirection="column"
      
        overflowY="auto"
      >
        <Box flexGrow="1">
            <Text color="white">Your Listings</Text>
            <Wrap spacing={2}  mx="2">
              {myBooks.map((book2) => (
                <Box key={book2.IBSN} transform="scale(0.8)" transformOrigin="center" >
                  <BookList book={book2} />
              </Box>
              ))}
            </Wrap>
        </Box>
      </GridItem>

            {/* <input
        type="text"
        value={searchTerm}
        onChange={handleSearchTermChange}
        placeholder="Search by title, author, or filter by price"
      /> */}
      {/* <CUIAutoComplete
            label="Search"
            items={books.map(book => ({ label: book.Title, value: book.Title }))}
            inputValue={searchTerm}
            onInputValueChange={(value) => setSearchTerm(value)}
            onSelectItem={(item) => setSearchTerm(item.label)}
            renderInput={(props) => (
              <Input
                type="text"
                value={props.inputValue}
                onChange={props.onInputChange}
                placeholder="Search by title, author, or filter by price"
              />
            )}
          /> */}
        
      
      {/* Display books */}
      {/* <Wrap spacing={4}>
        {books.map((book) => (
          <WrapItem key={book.IBSN}>
            <Box p={4} borderWidth={1} borderRadius="md">
              <Text fontWeight="bold">{book.Title}</Text>
              <Text>{book.Author}</Text>
              <Text>{`Price: $${book.Cost}`}</Text>
            </Box>
          </WrapItem>
        ))}
      </Wrap> */}

    </Grid>

  );
};









