import { Container } from '@utils'

export default (container: Container = document) => {
  const years = container.querySelectorAll<HTMLSpanElement>('*[data-current-year]')

  if (!years.length) return

  const currentYear = String(new Date().getFullYear())

  years.forEach((year) => {
    year.innerText = currentYear
  })
}
