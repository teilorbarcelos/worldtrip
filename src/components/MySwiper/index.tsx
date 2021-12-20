import { Swiper, SwiperSlide } from 'swiper/react'
import { Box, Flex, Stack, Text } from '@chakra-ui/react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import Link from 'next/link'

import styles from './styles.module.css'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

interface ContinentProps {
  slug: string
  name: string
  title: string
  swiperImage: string
}

interface Props {
  continents: ContinentProps[]
}

export function MySwiper({ continents }: Props) {
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
        {
          continents.map(continent => (
            <SwiperSlide key={continent.slug}>
              <Flex
                bgImage={continent.swiperImage}
                bgRepeat="no-repeat"
                bgSize="cover"
                w="100%"
                h="100%"
                justify="center"
                align="center"
              >
                <Link
                  href={`/continent/${continent.slug}`}
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
                        {continent.name}
                      </Text>

                      <Text
                        fontWeight="bold"
                        fontSize={["14px", "24px"]}
                        color="white.500"
                        textAlign="center"
                      >
                        {continent.title}
                      </Text>
                    </Stack>
                  </a>
                </Link>
              </Flex>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </Box>
  )
}