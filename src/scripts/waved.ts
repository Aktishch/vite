import { Container, getTouchDevice } from '@utils'

interface CircleOptions {
  positionY: number
  positionX: number
}

const setWaved = (event: Event) => {
  const item: HTMLElement | null = (event.target as HTMLElement).closest('[data-waved]')

  if (!item) return

  const waved = document.createElement('div')
  const circle = document.createElement('div')

  const createWavedCircle = ({ positionY, positionX }: CircleOptions) => {
    const removeWaved = () => {
      waved.remove()
    }

    circle.classList.add('waved-circle')
    circle.style.top = `${positionY - item.getBoundingClientRect().top}px`
    circle.style.left = `${positionX - item.getBoundingClientRect().left}px`
    waved.classList.add('waved')
    waved.appendChild(circle)
    item.appendChild(waved)
    circle.addEventListener('animationend', removeWaved, { once: true })
  }

  switch (event.type) {
    case 'touchstart': {
      if (!getTouchDevice()) return

      createWavedCircle({
        positionY: (event as TouchEvent).touches[0].clientY,
        positionX: (event as TouchEvent).touches[0].clientX
      })

      break
    }

    case 'mousedown': {
      if (getTouchDevice()) return

      createWavedCircle({
        positionY: (event as MouseEvent).clientY,
        positionX: (event as MouseEvent).clientX
      })

      break
    }
  }
}

export default (container: Container = document) => {
  container.addEventListener('touchstart', setWaved, { passive: true })
  container.addEventListener('mousedown', setWaved)
}
