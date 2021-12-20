import { Stack } from "@chakra-ui/react"
import { GetStaticProps } from "next"
import ContinentBanner from "../../components/ContinentBanner"
import Header from "../../components/Header"
import { api } from "../api"

interface CityProps {
  cityName: string
  countryName: string
  countryCode: string
  cityImage: string
}

interface ContinentProps {
  slug: string
  name: string
  title: string
  description: string
  swiperImage: string
  numberOfCountries: number
  numberOfLanguages: number
  amountMostPopularCities: number
  mostPopularCities: CityProps[]
}

interface Props {
  continent: ContinentProps
}

export default function Continent({ continent }: Props) {
  return (
    <Stack>
      <Header />

      <ContinentBanner
        image={continent.swiperImage}
        name={continent.name}
      />
    </Stack>
  )
}

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => { // para SSG (Static)
  const { slug } = params as { slug: string }

  const continent = await (await api.get(`/continents/${slug}`)).data

  return {
    props: {
      continent
    },
    revalidate: 60 * 60 * 24 // time to generate new page (one time a day) (Only for SSG)
  }
}