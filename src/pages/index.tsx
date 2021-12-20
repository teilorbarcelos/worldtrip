import { Flex, Stack, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Banner from '../components/Banner'
import { Divider } from '../components/Divider'
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

      <Divider />

      <Text
        color="gray.500"
        fontWeight="medium"
        fontSize={["20px", "36px"]}
        textAlign="center"
        mb={["20px", "52px"]}
      >
        Vamos nessa? <br />
        Então escolha seu continente
      </Text>
    </Flex>
  )
}

export default Home
