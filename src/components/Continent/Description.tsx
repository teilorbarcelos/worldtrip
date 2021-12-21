import { Flex, Text, Tooltip, VStack } from "@chakra-ui/react"
import { FiInfo } from 'react-icons/fi'

interface CityProps {
  cityName: string
  countryName: string
  countryCode: string
  cityImage: string
}

interface ContinentProps {
  description: string
  numberOfCountries: number
  numberOfLanguages: number
  amountMostPopularCities: number
  mostPopularCities: CityProps[]
}

interface Props {
  continent: ContinentProps
}

export function Description({ continent }: Props) {
  return (
    <Flex
      direction={["column", "row"]}
      w="100%"
      maxW={1160}
      pt={["24px", "80px"]}
      pb={["32px", "80px"]}
      px={["16px", 0]}
    >
      <Text
        align="justify"
        maxW="600px"
        fontSize="24px"
      >
        {continent.description}
      </Text>

      <Flex
        w="100%"
        align="center"
        justify={["space-between", "center"]}
        gap={[0, "42px"]}
      >
        <Flex
          direction="column"
          align={["left", "center"]}
        >
          <Text
            fontWeight="semibold"
            fontSize={["24px", "48px"]}
            color="yellow.500"
            lineHeight="55px"
          >
            {continent.numberOfCountries}
          </Text>

          <Text
            fontWeight="semibold"
            fontSize={["18px", "24px"]}
            lineHeight="25px"
          >
            países
          </Text>
        </Flex>

        <Flex
          direction="column"
          align={["left", "center"]}
        >
          <Text
            fontWeight="semibold"
            fontSize={["24px", "48px"]}
            color="yellow.500"
            lineHeight="55px"
          >
            {continent.numberOfLanguages}
          </Text>

          <Text
            fontWeight="semibold"
            fontSize={["18px", "24px"]}
            lineHeight="25px"
          >
            línguas
          </Text>
        </Flex>

        <Flex
          direction="column"
          align={["left", "center"]}
        >
          <Text
            fontWeight="semibold"
            fontSize={["24px", "48px"]}
            color="yellow.500"
            lineHeight="55px"
          >
            {continent.amountMostPopularCities}
          </Text>

          <Flex
            fontWeight="semibold"
            fontSize={["18px", "24px"]}
            lineHeight="25px"
            gap="5px"
            alignItems="center"
          >
            cidades +100
            <Flex
              direction="column-reverse"
              fontSize={["10px", "16px"]}
            >
              <Tooltip
                label={
                  continent.mostPopularCities.map((city, index) => {
                    if (index === continent.mostPopularCities.length - 1) {
                      return `${city.cityName}.`
                    }
                    return `${city.cityName}, `
                  })
                }
                fontSize='md'
              >
                <Text as="span">
                  <FiInfo style={{ opacity: '50%' }} />
                </Text>
              </Tooltip>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}