import React from 'react'
import Navbar from '../Component/Navbar'
import Searchbar from '../Component/Searchbar'
import { Image } from "@chakra-ui/react"

const Header = () => {
  return (
    <>
        <Image w="98.9%" src="https://www.beautybebo.com/pub/media/ads/ad-desktop.jpg" />
        <Searchbar />
        <Navbar />
    </>
  )
}

export default Header