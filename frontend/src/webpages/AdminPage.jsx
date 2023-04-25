import {
    InputGroup,
    InputLeftElement,
    Box,
    Wrap,
    Text,
    Input,
    Grid,
    GridItem,
    Stack,
    VStack,
    Flex,
    SimpleGrid,
    Center,
    Heading,
    Button,
    ButtonGroup,
    Divider,
    Drawer,
    DrawerBody,
    Image,
    useColorModeValue,
    useDisclosure,
  } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { useState, useEffect } from "react";
import { usesideBarigate } from "react-router-dom";
import { Clock } from "../components";
import { Icon } from '@chakra-ui/react';
import { TbBooks} from "react-icons/tb";
import { TbReportMoney } from "react-icons/tb";
import { TbUsers } from "react-icons/tb";
import {TbMessageReport} from "react-icons/tb";
import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
  } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import {BookSearch} from './bookSearch.jsx'
import {AdminTab} from '../components/AdminTab';

export const AdminPage = () => {
    const colors = useColorModeValue(
        ['blue.50', 'teal.50', 'red.50','purple.50'],
        ['blue.100', 'teal.900', 'red.50', 'purple.900'],
      )
    const [tabIndex, setTabIndex] = useState(0)
    const bg = colors[tabIndex]

    return (
        <>
            <Grid
            templateAreas={`"sideBar header"
                            "sideBar Dashboard"
                            "sideBar footer"
            `}
            gridTemplateRows={'50px 1fr 30px'}
            gridTemplateColumns={'150px 1fr'}
            h='600px'
            gap='1'
            color='blackAlpha.700'
            fontWeight='bold'
            border={'1px'}
            borderColor='gray.200'
            >
                <GridItem pl='2' area={'header'}>
                    <Center>   
                    <Heading
                        bgGradient='linear(to-l, #7928CA, #FF0080)'
                        bgClip='text'
                        fontWeight='bold'
                        >Admin Page </Heading>
                    </Center>
                </GridItem>
                <GridItem pl='2' bg='pink.300' area={'sideBar'}>
                    Side Bar
                </GridItem>
                <GridItem pl='2' bgGradient='linear(red.100 0%, orange.100 25%, yellow.100 50%)' area={'Dashboard'}>
                    Dashboard
                        <Stack direction='row' spacing={4} align='center'>
                            <Card flex={1} textAlign='center'>
                                <CardHeader bgGradient="linear(to-b, purple.500, blue.500)" >
                                    <Heading size='md' color={"white"}>Shelf </Heading>
                                </CardHeader>
                                <CardBody>
                                    <Icon as={ TbBooks } w={8} h={8} color='blue.200' />
                                    <Stat>
                                        <StatLabel>Book Count</StatLabel>
                                        <StatNumber>0.00</StatNumber>
                                    </Stat>
                                </CardBody>
                                <CardFooter justifyContent='center'>
                                    <Clock />
                                </CardFooter>
                            </Card>
                            <Card flex={1} textAlign='center'>
                                <CardHeader  bgGradient="linear(to-b, green.200, teal.400)">
                                    <Heading size='md' color={"white"} > Sales</Heading>
                                </CardHeader>
                                <CardBody>
                                    <Icon as={ TbReportMoney } w={8} h={8} color='green.200' />
                                    <Stat>
                                        <StatLabel> Shelf Value </StatLabel>
                                        <StatNumber>0.00</StatNumber>
                                    </Stat>
                                </CardBody>
                                <CardFooter justifyContent='center'>
                                    <Clock />
                                </CardFooter>
                            </Card>
                            <Card flex={1} textAlign="center" border="2px" borderColor="red.500" borderRadius="md">
                                <CardHeader bgGradient="linear(to-r, red.400, pink.500)">
                                    <Heading size='md' color={"white"}> Report </Heading>
                                </CardHeader>
                                <CardBody>
                                    <Icon as={ TbMessageReport } w={8} h={8} color='red.400' />
                                    <Stat>
                                        <StatLabel>Number of Report</StatLabel>
                                        <StatNumber>0.00</StatNumber>
                                    </Stat>
                                </CardBody>
                                <CardFooter justifyContent='center'>
                                    <Clock />
                                </CardFooter>
                            </Card>
                            <Card flex={1} textAlign='center'>
                                <CardHeader bgGradient="linear(to-b, pink.200, pink.400)">
                                    <Heading size='md' color={"white"}> User</Heading>
                                </CardHeader>
                                <CardBody>
                                    <Icon as={ TbUsers } w={8} h={8} color='pink.200' />
                                    <Stat>
                                        <StatLabel>User Count</StatLabel>
                                        <StatNumber>0.00</StatNumber>
                                    </Stat>
                                </CardBody>
                                <CardFooter justifyContent='center'>
                                    <Clock />
                                </CardFooter>
                            </Card>
                        </Stack>
                        <Divider />
                        <Tabs onChange={(index) => setTabIndex(index)} bg={bg}>
                            <TabList>
                                <Tab>Shelf</Tab>
                                <Tab>Listing</Tab>
                                <Tab>Report</Tab>
                                <Tab>Users</Tab>
                            </TabList>
                            <TabPanels p='2rem'>
                                <TabPanel>
                                    {/* <BookSearch /> */}
                                    <AdminTab />
                                    <AdminTab />
                                    <AdminTab />
                                    <AdminTab />
                                    <AdminTab />
                                    <AdminTab />
                                    <AdminTab />
                                    <AdminTab />
                                    <AdminTab />
                                </TabPanel>
                                <TabPanel>
                                    {/* <BookSearch /> */}
                                    <AdminTab />
                                    <AdminTab />
                                    <AdminTab />
                                    <AdminTab />
                                    <AdminTab />
                                    <AdminTab />
                                    <AdminTab />
                                    <AdminTab />
                                    <AdminTab />
                                </TabPanel>
                                <TabPanel>
                                    {/* <BookSearch /> */}
                                    <AdminTab />
                                    <AdminTab />
                                    <AdminTab />
                                    <AdminTab />
                                    <AdminTab />
                                    <AdminTab />
                                    <AdminTab />
                                    <AdminTab />
                                    <AdminTab />
                                    <AdminTab />
                                </TabPanel>
                                <TabPanel>
                                    {/* <BookSearch /> */}
                                    <AdminTab />
                                    <AdminTab />
                                    <AdminTab />
                                    <AdminTab />
                                    <AdminTab />
                                    <AdminTab />
                                    <AdminTab />
                                    <AdminTab />
                                    <AdminTab />
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                </GridItem>
                <GridItem pl='2' bg='blue.300' area={'footer'}>
                    Footer
                </GridItem>
            </Grid>     
        </>
    );
}