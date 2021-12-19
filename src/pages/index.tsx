import { Flex, Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Banner from '../components/Banner'
import Header from '../components/Header'
import TravelType from '../components/TravelType'

const Home: NextPage = () => {
  return (
    <Flex
      direction="column"
      justify="center"
    >
      <Header />
      <Banner />
      <TravelType />
    </Flex>
  )
}

export default Home
