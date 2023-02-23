import { Center, Flex, Heading, Image, Input, Select } from '@chakra-ui/react'
import React from 'react'
import { SearchIcon } from "@chakra-ui/icons";
import { Icon } from '@chakra-ui/react'
import { BsFillHeartFill, BsFillPersonFill } from "react-icons/bs";


const Searchbar = () => {
  return (
    <>
    <Center bgColor="#0c0c0c" w={"98.9%"} >
    <Flex  w="60%" bgColor="#0c0c0c" h="100px" justifyContent="space-around" align="center">
        <Image 
        objectFit='cover'
        w={"30%"}
        // h={"80px"}
        src="https://www.linkpicture.com/q/Elegance-removebg-preview.png"/>
        
        <Flex w={"53%"}>

        <Select 
        color={"black"}
        w="50%"
        size={"md"}
        borderRadius={"0px"}
        borderTopLeftRadius={"10px"}
        variant='Unstyled' placeholder='Unstyled'>
            <option  value='option1'>Option 1</option>
            <option  value='option2'>Option 2</option>
            <option  value='option3'>Option 3</option>
        </Select>
        
        <Flex  w={"50%"}>
            <Input borderRadius={"0px"} bgColor={"white"} variant='unstyled' p={"5px"} placeholder='Enter Your Search...'/>
            <Center
            borderBottomRightRadius={"10px"}
             bgColor={"Pink"} p={2.5}>
            <SearchIcon />
            </Center>
        </Flex>
        
        </Flex>

    </Flex>
    <Flex ml={"10%"} w={"20%"} >
        <Center mr={"5%"} bgColor={"white"} p={1.5} border='2px' borderColor='gold'>
            <Icon as={BsFillHeartFill} fontSize="25px" />
        </Center>
        <Center>
        <Center mr={"5px"} bgColor={"white"} p={1} border='2px' borderColor='gold'>
            <Icon as={BsFillPersonFill} fontSize="30px" />
        </Center>
            <Heading as='h4' size='md' color={"white"} >My Account</Heading>
        </Center>
    </Flex>
</Center>
    </>
  )
}

export default Searchbar