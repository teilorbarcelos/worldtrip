import { Swiper, SwiperSlide } from 'swiper/react'
import { Box, Flex, Stack, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import Link from 'next/link'

import styles from './styles.module.css'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

interface Props {
  children: ReactNode
}

export function MySwiper() {
  return (
    <Box
      w='100%'
      h={['250', '450']}
      mb={10}
    >
      <Swiper
        className={styles.swiper}
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{
          clickable: true
        }}
        navigation
        scrollbar={{ draggable: true }}
        mousewheel
        keyboard
        autoplay={{
          delay: 4000,
        }}
      >
        <SwiperSlide>
          <Flex
            bgImage={`/europa.png`}
            bgRepeat="no-repeat"
            bgSize="cover"
            w="100%"
            h="100%"
            justify="center"
            align="center"
          >
            <Link
              href={`/continent/europa`}
            >
              <a>
                <Stack
                  spacing={[3, 4]}
                >
                  <Text
                    fontWeight="bold"
                    fontSize={["24px", "48px"]}
                    color="white.500"
                    textAlign="center"
                  >
                    Europa
                  </Text>

                  <Text
                    fontWeight="bold"
                    fontSize={["14px", "24px"]}
                    color="white.500"
                    textAlign="center"
                  >
                    O continente mais antigo.
                  </Text>
                </Stack>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}