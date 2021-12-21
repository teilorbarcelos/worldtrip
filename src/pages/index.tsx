import { Flex, Text } from '@chakra-ui/react'
import type { GetStaticProps } from 'next'
import Banner from '../components/Banner'
import { Divider } from '../components/Divider'
import Header from '../components/Header'
import { MySwiper } from '../components/MySwiper'
import TravelType from '../components/TravelType'
import { api } from './api'

interface ContinentProps {
  slug: string
  name: string
  title: string
  swiperImage: string
}

interface Props {
  continents: ContinentProps[]
}

export default function Home({ continents }: Props) {
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

      <MySwiper continents={continents} />
    </Flex>
  )
}

export const getStaticProps: GetStaticProps = async () => { // para SSG (Static)
  const continents = await (await api.get('/continents')).data

  return {
    props: {
      continents
    },
    revalidate: 60 * 60 * 24 // time to generate new page (one time a day) (Only for SSG)
  }
}