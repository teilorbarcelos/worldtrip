import { SimpleGrid, Stack, Text } from "@chakra-ui/react"
import { CityCard } from "./CityCard"



interface CityProps {
  cityName: string
  countryName: string
  countryCode: string
  cityImage: string
}

interface ContinentProps {
  mostPopularCities: CityProps[]
}

interface Props {
  continent: ContinentProps
}

export function Cities({ continent }: Props) {
  return (
    <Stack
      w="100%"
      maxW={1160}
      pb="35px"
    >
      <Text
        fontWeight="medium"
        fontSize={["24px", "36px"]}
        ml="16px"
      >
        Cidades +100
      </Text>

      <SimpleGrid
        columns={[1, 4]}
        spacing={[5, 10]}
        my={['5', '45px']}
      >
        {continent.mostPopularCities.map((city) => (
          <CityCard
            key={city.cityName}
            city={city}
          />
        ))}
      </SimpleGrid>
    </Stack>
  )
}