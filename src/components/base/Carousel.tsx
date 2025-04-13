'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import styles from './carousel.module.css'

type Props = {
  images: string[]
}

export default function Carousel({ images }: Props) {
  const [mainRef, mainApi] = useEmblaCarousel({ loop: false })
  const [thumbRef, thumbApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  })

  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollTo = useCallback(
    (index: number) => {
      if (!mainApi) return
      mainApi.scrollTo(index)
    },
    [mainApi]
  )

  const onSelect = useCallback(() => {
    if (!mainApi || !thumbApi) return
    const index = mainApi.selectedScrollSnap()
    setSelectedIndex(index)
    thumbApi.scrollTo(index)
  }, [mainApi, thumbApi])

  useEffect(() => {
    if (!mainApi) return
    mainApi.on('select', onSelect)
    onSelect()
  }, [mainApi, onSelect])

  return (
    images.length > 0 && (
    <div className={styles.carouselWrapper}>
      {/* Main carousel */}
      <div className={styles.embla} ref={mainRef}>
        <div className={styles.embla__container}>
          {images.map((url, index) => (
            <div className={styles.embla__slide} key={index}>
              <img
                className={styles.embla__image}
                src={url}
                alt={`Image ${index}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Thumbnail carousel */}

      {images.length > 1 && (
      <div className={styles.emblaThumbs} ref={thumbRef}>
        <div className={styles.embla__container}>
          {images.map((url, index) => (
            <div
              key={index}
              className={`${styles.embla__slideThumb} ${
                selectedIndex === index ? styles.selected : ''
              }`}
              onClick={() => scrollTo(index)}
            >
              <img
                className={styles.embla__thumbnail}
                src={url}
                alt={`Thumbnail ${index}`}
              />
            </div>
          ))}
        </div>
      </div>)}
    </div>
  ))
}