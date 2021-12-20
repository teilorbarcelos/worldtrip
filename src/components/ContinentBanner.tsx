import { Flex, Text } from "@chakra-ui/react"

interface Props {
  image: string
  name: string
}

export default function ContinentBanner({ image, name }: Props) {

  return (
    <Flex
      w='100%'
      h={["150px", "500px"]}
      justify={["center", "unset"]}
      align={["center", "end"]}
      bgImage={image}
      bgRepeat="no-repeat"
      bgSize="cover"
      pb={[0, "59px"]}
      pl={[0, "140px"]}
    >
      <Text
        color="white.500"
        fontWeight="semibold"
        fontSize={[28, 48]}
      >
        {name}
      </Text>
    </Flex>
  )
}