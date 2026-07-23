import { Container, getData, hideScrollbar, isEn, logError, showScrollbar } from '@utils'

const DATA_PRELOADER = getData('preloader')

const loadTimePreloader = (preloader: HTMLDivElement) => {
  return new Promise<HTMLDivElement>((resolve, reject) => {
    if (preloader) {
      const duration = 500

      hideScrollbar()
      preloader.style.transitionDuration = `${duration}ms`
      preloader.classList.add('invisible', 'opacity-0')

      setTimeout(() => {
        resolve(preloader)
      }, duration)
    } else {
      reject(isEn ? `${DATA_PRELOADER} was not found` : `${DATA_PRELOADER} не был найден`)
    }
  })
}

export default async (container: Container = document) => {
  await loadTimePreloader(container.querySelector(`*[${DATA_PRELOADER}]`) as HTMLDivElement)
    .then((preloader) => {
      showScrollbar()
      preloader.remove()
    })
    .catch((error: string) => {
      logError(error)
    })
}
