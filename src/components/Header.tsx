import { Flex, Image, Link as ChakraLink } from "@chakra-ui/react"
import Link from "next/link"
import { useRouter } from "next/router"

export default function Header() {
  const { asPath } = useRouter()

  return (
    <Flex
      as="header"
      w='100%'
      maxW={1160}
      h={[50, 100]}
      mx="auto"
      justify="space-between"
      align="center"
    >
      {
        asPath === '/' ?
          <div /> :
          <Link
            href="/"
            passHref
          >
            <ChakraLink
              ml="16px"
            >
              <Image
                src="/back.svg"
                alt="Back button"
                cursor="pointer"
                w={["16px", "32px"]}
              />
            </ChakraLink>
          </Link>
      }

      <Image
        src="/logo.svg"
        alt="World Trip Logo"
        h={["20px", "45px"]}
      />

      <div />
    </Flex>
  )
}