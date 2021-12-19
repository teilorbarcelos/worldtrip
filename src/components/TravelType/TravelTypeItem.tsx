import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react"

interface Props {
  imageUrl: string
  imageAlt: string
  title: string
}

export default function TravelTypeItem({ imageUrl, imageAlt, title }: Props) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex
      direction={["row", "column"]}
      align="center"
      gap={["8px", "28px"]}
      mb={['6', 0]}
    >
      {
        isWideVersion ?
          <Image
            src={imageUrl}
            alt={imageAlt}
          />
          :
          <Box
            w={2}
            h={2}
            bg="yellow.500"
            borderRadius={4}
          />
      }

      <Text
        fontWeight={['medium', 'semibold']}
        fontSize={[18, 24]}
        lineHeight={["21px", "36px"]}
      >
        {title}
      </Text>
    </Flex>
  )
}