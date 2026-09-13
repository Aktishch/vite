import { Container, getTouchDevice, source } from '@utils'

export default (container: Container = document) => {
  if (getTouchDevice()) return

  const snow: HTMLDivElement | null = container.querySelector('*[data-snow]')

  if (!snow) return

  let flag = true

  const createSnowflake = (event: MouseEvent) => {
    if (!flag) return

    const snowflake = document.createElement('img')
    const size = Math.random() * 60
    const { clientY, clientX } = event

    const removeSnowflake = () => {
      snowflake.remove()
    }

    snowflake.classList.add('snowflake')
    snowflake.src = `${source}/img/pictures/snow.png`
    snowflake.style.width = `${20 + size}px`
    snowflake.style.top = `${clientY}px`
    snowflake.style.left = `${clientX}px`
    snow.appendChild(snowflake)
    flag = false
    snowflake.addEventListener('animationend', removeSnowflake, { once: true })

    setTimeout(() => {
      flag = true
    }, 300)
  }

  container.addEventListener('mousemove', createSnowflake as EventListener)
}
