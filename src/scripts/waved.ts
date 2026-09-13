import { Container, getTouchDevice } from '@utils'

interface WavedOptions {
  clientY: number
  clientX: number
}

const setWaved = (event: Event) => {
  const item: HTMLElement | null = (event.target as HTMLElement).closest('[data-waved]')

  if (!item) return

  const waved = document.createElement('div')
  const circle = document.createElement('div')

  const createWavedCircle = ({ clientY, clientX }: WavedOptions) => {
    const { top, left } = item.getBoundingClientRect()

    const removeWaved = () => {
      waved.remove()
    }

    circle.classList.add('waved-circle')
    circle.style.top = `${clientY - top}px`
    circle.style.left = `${clientX - left}px`
    waved.classList.add('waved')
    waved.appendChild(circle)
    item.appendChild(waved)
    circle.addEventListener('animationend', removeWaved, { once: true })
  }

  switch (event.type) {
    case 'touchstart': {
      if (!getTouchDevice()) return

      const { clientY, clientX } = (event as TouchEvent).touches[0]

      createWavedCircle({ clientY, clientX })
      break
    }

    case 'mousedown': {
      if (getTouchDevice()) return

      const { clientY, clientX } = event as MouseEvent

      createWavedCircle({ clientY, clientX })
      break
    }
  }
}

export default (container: Container = document) => {
  container.addEventListener('touchstart', setWaved, { passive: true })
  container.addEventListener('mousedown', setWaved)
}
