import { Stack, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Banner from '../components/Banner'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <Stack>
      <Header />
      <Banner />
    </Stack>
  )
}

export default Home
