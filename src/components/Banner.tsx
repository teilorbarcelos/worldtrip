import { Flex, HStack, Image, Stack, Text, useBreakpointValue } from "@chakra-ui/react"

export default function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  return (
    <Flex
      w='100%'
      h={["163px", "368px"]}
      justify="center"
      align="center"
      bgImage="/background.png"
      bgRepeat="no-repeat"
      bgSize={["cover", "unset"]}
    >
      <HStack
        justify="space-between"
        w="100%"
        h="100%"
        maxW={1160}
        mx={4}
        my="28px"
      >
        <Stack>
          <Text
            color="white.500"
            fontWeight="medium"
            fontSize={[20, 36]}
          >
            5 Continentes, <br />
            infinitas possibilidades.
          </Text>
          <Text
            color="gray.100"
            fontWeight="normal"
            fontSize={[14, 20]}
            maxW={[333, 524]}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Stack>

        {
          isWideVersion &&
          <Stack>
            <Image
              src="/airplane.svg"
              alt="Airplane image illustration"
              maxW={417}
              mt="76px"
            />
          </Stack>
        }

      </HStack>

    </Flex>
  )
}