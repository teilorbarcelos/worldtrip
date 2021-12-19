import { Box, Flex, Grid, GridItem, Image, Text, useBreakpointValue } from "@chakra-ui/react"
import TravelTypeItem from "./TravelTypeItem"

export default function TravelType() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  const travelItens = [
    {
      imageUrl: "/cocktail.svg",
      imageAlt: "Cocktail illustration",
      title: "vida noturna"
    },
    {
      imageUrl: "/surf.svg",
      imageAlt: "Surf illustration",
      title: "praia"
    },
    {
      imageUrl: "/building.svg",
      imageAlt: "Building illustration",
      title: "moderno"
    },
    {
      imageUrl: "/museum.svg",
      imageAlt: "Museum illustration",
      title: "clássico"
    },
    {
      imageUrl: "/earth.svg",
      imageAlt: "Earth illustration",
      title: "e mais..."
    },
  ]

  return (
    <Flex
      px={['12', '10']}
      mb={['3', '20']}
      mx="auto"
      mt={["36px", "80px"]}
      w="100%"
      maxW={1160}
      justify='space-between'
      wrap={isWideVersion ? 'nowrap' : 'wrap'}
    >

      {
        travelItens.map((travelItem, index) => {
          if (!isWideVersion && index === travelItens.length - 1) {
            return (
              <Flex
                key={index}
                w="100%"
                justifyContent="center"
              >
                <TravelTypeItem
                  imageUrl={travelItem.imageUrl}
                  imageAlt={travelItem.imageAlt}
                  title={travelItem.title}
                />
              </Flex>
            )
          }

          return (
            <TravelTypeItem
              key={index}
              imageUrl={travelItem.imageUrl}
              imageAlt={travelItem.imageAlt}
              title={travelItem.title}
            />
          )
        })
      }

    </Flex>
  )
}