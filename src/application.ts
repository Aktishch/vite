import './tailwind/style.css'

import accordion from '@scripts/accordion'
import currentTab from '@scripts/current-tab'
import menu from '@scripts/menu'
import palette from '@scripts/palette'
import preloader from '@scripts/preloader'
import scrollHeader from '@scripts/scroll-header'
import sidebar from '@scripts/sidebar'
import theme from '@scripts/theme'
import waved from '@scripts/waved'

const initApplication = () => {
  accordion()
  currentTab()
  menu()
  palette()
  scrollHeader()
  sidebar()
  theme()
  waved()
  preloader().finally(() => {
    console.log('Init')
  })
}

window.addEventListener('DOMContentLoaded', initApplication)
