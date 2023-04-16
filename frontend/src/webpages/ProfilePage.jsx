import css from '../css/ProfilePage.css';
import NavItem from "../components/NavItem";
import React from 'react';
import { Button, Heading } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Badge } from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/react'
import { useState, useEffect } from "react";
import { SimpleGrid } from '@chakra-ui/react'
import { CheckCircleIcon,WarningIcon} from '@chakra-ui/icons'
import { Container } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { BookList } from '../components';
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
    Wrap,
  } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Form } from 'react-router-dom';
import axios from 'axios';
import { FiHome,
    FiSettings,
    FiPlusCircle,
    FiPackage,
    FiUser,
    FiAlignLeft
} from "react-icons/fi";

export const ProfilePage = () => {
    // const [rating, setRating] = useState(0);

    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [privileges, setPrivileges] = useState("");
    const [createpword, setCreatepword] = useState("");
    const [confirmpword, setConfirmpword] = useState("");
    const [books, setBooks] = useState([]);

    const nav = useNavigate();

    useEffect(() => {
        const fetchBooksBySeller = async (email) => {
            try {
              const response = await axios.get(`http://localhost:8000/books/${email}`);
              console.log('Books fetched successfully:', response.data);
              setBooks(response.data);
              return response.data;
            } catch (error) {
              console.error('Error fetching books:', error);
            }
          };
        fetchBooksBySeller(email);
      },[email]);

      useEffect(() => {
        axios.get("http://localhost:8000/login").then((response) => {
          if (response.data.loggedIn == true){
            setFirst(response.data.user[0].firstName)
            setEmail(response.data.user[0].email)
            setLast(response.data.user[0].lastName)
            setPrivileges(response.data.user[0].privileges)

          } else {
            setFirst("Not logged in.")
            }
         })
        });
      

    return (
        <>
        <Heading mt= '2rem' as='h1' size='2xl' textAlign='center' class='head'>My Account</Heading>
        <NavItem navSize="large" icon={FiHome} id="dashboard" title="Dashboard" description="This is the description for the dashboard." action={() => nav('/dashboard')}/>
        <div class="profileInfo">
            <Image mt='.5rem' borderRadius='full' boxSize='150px'src='https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.webp' alt='default pic' />
            <Badge>{first}</Badge>
            <h2>{last} ({privileges})</h2>
            <h4>Current Rating</h4>

            <h4>Temp #Reviews</h4>
            <Textarea placeholder='Here is a sample placeholder' />
            <h4>Temp #Listings</h4>
            
            <Wrap spacing={4} width="100%">
                {books.map((book) => (
                    <BookList key={book.IBSN} book = {book} />
                ))}
            </Wrap>
            
            <h4>Temp #Purchases Log</h4>
            <Container>
            <Box>
            <List spacing={3}>
                <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green.500' />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green.500' />
                    Assumenda, quia temporibus eveniet a libero incidunt suscipit
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green.500' />
                    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                </ListItem>
                {/* You can also use custom icons from react-icons */}
                <ListItem>
                    <ListIcon as={WarningIcon} color='green.500' />
                    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                </ListItem>
            </List>
            </Box>
        </Container>
        </div>
        </>
    )
};