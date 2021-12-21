import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react"
import ReactCountryFlag from "react-country-flag"

interface CityProps {
  cityName: string
  countryName: string
  countryCode: string
  cityImage: string
}

interface Props {
  city: CityProps
}

export function CityCard({
  city
}: Props) {
  return (
    <VStack
      w="100%"
      maxW="256px"
      mx={['auto', '0']}
      mt={['20px', 0]}
      borderRadius={["4px"]}
      spacing={0}
      h="100%"
      maxH="279px"
    >
      <Image
        src={city.cityImage}
        alt={`${city.cityName}, ${city.countryName}`}
        h="170px" w="100%"
        borderRadius={["4px 4px 0 0"]}
      />

      <Flex
        w="100%"
        align="center"
        justify="space-between"
        px={["24px"]}
        border="1px solid"
        borderTop={0}
        borderColor="rgba(255, 186, 8, 0.5)"
        borderRadius={["0 0 4px 4px"]}
        pt="18px"
        pb="25px"
      >
        <Flex
          direction="column"
          gap="12px"
        >
          <Text
            fontWeight="semibold"
            fontSize="20px"
            lineHeight="25px"
            fontFamily="Barlow"
          >
            {city.cityName}
          </Text>

          <Text
            fontWeight="normal"
            fontSize="16px"
            lineHeight="26px"
            fontFamily="Barlow"
            color="gray.300"
          >
            {city.countryName}
          </Text>
        </Flex>

        <ReactCountryFlag
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            objectFit: "cover"
          }}
          aria-label={city.countryName}
          countryCode={city.countryCode}
          svg
        />
      </Flex>
    </VStack>
  )
}