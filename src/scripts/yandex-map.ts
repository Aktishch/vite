import { Container, getData, isEn, logError, source } from '@utils'
import ymaps from 'ymaps'

type ymaps = typeof ymaps

interface YandexOptions extends ymaps {
  load: (api: string) => Promise<ymaps>
}

const DATA_YANDEX = getData('yandex')
const YANDEX_LANGUARE = isEn ? 'en_US' : 'ru_RU'

const options: IntersectionObserverInit = {
  root: null,
  rootMargin: '0px',
  threshold: 0
}

const callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
  entries.forEach((entry) => {
    const yandex = entry.target as HTMLElement

    if (entry.isIntersecting) {
      const yandexMap: HTMLElement | null = yandex.querySelector(`*[${DATA_YANDEX}-map]`)

      if (!yandexMap) return

      const value = yandexMap.dataset.yandexMap

      if (!value) {
        logError(isEn ? `${DATA_YANDEX}-map is missing a value` : `У ${DATA_YANDEX}-map отсутствует значение`)
        return
      }

      const loader: HTMLDivElement | null = yandex.querySelector('*[data-loader]')
      const coordinates = value.split(',')
      const pointSize = [62, 62]
      const mark: number[] = []

      for (let i = 0; i < coordinates.length; i++) {
        mark.push(Number(coordinates[i]))
      }

      ;(ymaps as YandexOptions)
        .load(`https://api-maps.yandex.ru/2.1/?lang=${YANDEX_LANGUARE}`)
        .then((maps) => {
          const map = new maps.Map(yandexMap, {
            center: mark,
            zoom: 16
          })
          const placemark = new maps.Placemark(
            mark,
            {},
            {
              iconLayout: 'default#image',
              iconImageHref: `${source}/img/pictures/point.svg`,
              iconImageSize: pointSize,
              iconImageOffset: [pointSize[0] / -2, pointSize[1] / -2]
            }
          )

          map.controls.remove('geolocationControl')
          map.controls.remove('searchControl')
          map.controls.remove('trafficControl')
          map.controls.remove('typeSelector')
          map.controls.remove('fullscreenControl')
          map.controls.remove('zoomControl')
          map.controls.remove('rulerControl')
          map.behaviors.disable(['scrollZoom'])
          map.geoObjects.add(placemark)
          loader?.remove()
        })
        .catch((error: string) => {
          logError(error)
        })

      observer.unobserve(yandex)
    }
  })
}

const observer = new IntersectionObserver(callback, options)

export default (container: Container = document) => {
  const yandex: HTMLElement | null = container.querySelector(`*[${DATA_YANDEX}]`)

  if (!yandex) return

  observer.observe(yandex)
}
