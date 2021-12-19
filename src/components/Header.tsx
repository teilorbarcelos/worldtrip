import { Flex, Image } from "@chakra-ui/react"

export default function Header() {

  return (
    <Flex
      as="header"
      w='100%'
      h={[50, 100]}
      justify="center"
      align="center"
    >
      <Image
        src="/logo.svg"
        alt="World Trip Logo"
        h={["20px", "45px"]}
      />
    </Flex>
  )
}