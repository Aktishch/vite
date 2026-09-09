import { Breakpoint, Container, getData, hideScrollbar, html, isEn, logError, media, showScrollbar } from '@utils'

type Toggle = HTMLButtonElement | HTMLAnchorElement | null

const DATA_SIDEBAR = getData('sidebar')
const DATA_OPEN = getData('open')

export const openSidebar = (sidebar: HTMLElement) => {
  hideScrollbar()
  sidebar.setAttribute(DATA_OPEN, '')
}

export const closeSidebar = (sidebar: HTMLElement) => {
  showScrollbar()
  sidebar.removeAttribute(DATA_OPEN)
}

const handleValueError = (value: string) => {
  logError(isEn ? `${DATA_SIDEBAR}-${value} is missing a value` : `У ${DATA_SIDEBAR}-${value} отсутствует значение`)
}

const resizeObserver = new ResizeObserver((entries) => {
  if (!entries.length) return

  entries.forEach((entry) => {
    const sidebar = entry.target as HTMLDivElement
    const value: Breakpoint | string | undefined = sidebar.dataset.breakpoint

    if (!value) return

    const breakpoint: number = media[value]

    window.requestAnimationFrame(() => {
      if (html.clientWidth >= breakpoint) {
        closeSidebar(sidebar)
      }
    })
  })
})

export default (container: Container = document) => {
  const sidebars = container.querySelectorAll<HTMLDivElement>(`*[${DATA_SIDEBAR}]`)

  if (!sidebars.length) return

  const getSidebar = (value: string) => {
    const sidebar: HTMLDivElement | null = container.querySelector(`*[${DATA_SIDEBAR}="${value}"]`)

    return sidebar
  }

  const changeSidebar = (event: Event) => {
    const toggle = event.target as HTMLElement
    const open: Toggle = toggle.closest(`[${DATA_SIDEBAR}-open]`)
    const close: Toggle = toggle.closest(`[${DATA_SIDEBAR}-close]`)

    if (open) {
      const value = open.dataset.sidebarOpen

      if (!value) {
        handleValueError('open')
        return
      }

      const sidebar = getSidebar(value)

      if (sidebar) {
        openSidebar(sidebar)
      }

      return
    }

    if (close) {
      const value = close.dataset.sidebarClose

      if (!value) {
        handleValueError('close')
        return
      }

      const sidebar = getSidebar(value)

      if (sidebar) {
        closeSidebar(sidebar)
      }

      return
    }

    if (toggle.hasAttribute(`${DATA_SIDEBAR}`)) {
      closeSidebar(toggle)
    }
  }

  sidebars.forEach((sidebar) => {
    resizeObserver.observe(sidebar)
  })

  container.addEventListener('click', changeSidebar)
}
