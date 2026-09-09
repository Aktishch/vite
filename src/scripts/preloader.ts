import { Container, getData, hideScrollbar, isEn, logError, showScrollbar } from '@utils'

const DATA_PRELOADER = getData('preloader')
const DURATION = 500

const loadTimePreloader = (preloader: HTMLElement | null) => {
  return new Promise<HTMLElement>((resolve, reject) => {
    if (preloader) {
      hideScrollbar()
      preloader.style.transitionDuration = `${DURATION}ms`
      preloader.classList.add('invisible', 'opacity-0')

      setTimeout(() => {
        resolve(preloader)
      }, DURATION)
    } else {
      reject(isEn ? `${DATA_PRELOADER} was not found` : `${DATA_PRELOADER} не был найден`)
    }
  })
}

export default async (container: Container = document) => {
  await loadTimePreloader(container.querySelector(`*[${DATA_PRELOADER}]`))
    .then((preloader) => {
      showScrollbar()
      preloader.remove()
    })
    .catch((error: string) => {
      logError(error)
    })
}
