import '@fancyapps/ui/dist/fancybox/fancybox.css'
import './tailwind/style.css'

import accordion from '@scripts/accordion'
import currentTab from '@scripts/current-tab'
import currentYear from '@scripts/current-year'
import draggable from '@scripts/draggable'
import fancybox from '@scripts/fancybox'
import lazyLoad from '@scripts/lazy-load'
import listing from '@scripts/listing'
import locomotiveScroll from '@scripts/locomotive-scroll'
import menu from '@scripts/menu'
import movement from '@scripts/movement'
import palette from '@scripts/palette'
import preloader from '@scripts/preloader'
import runningButton from '@scripts/running-button'
import scrollHeader from '@scripts/scroll-header'
import scrollTo from '@scripts/scroll-to'
import sidebar from '@scripts/sidebar'
import smartMenu from '@scripts/smart-menu'
import snowflakes from '@scripts/snowflakes'
import social from '@scripts/social'
import theme from '@scripts/theme'
import waved from '@scripts/waved'
import yandexMap from '@scripts/yandex-map'

const initApplication = () => {
  accordion()
  currentTab()
  currentYear()
  draggable()
  fancybox()
  lazyLoad()
  listing()
  locomotiveScroll()
  menu()
  movement()
  palette()
  runningButton()
  scrollHeader()
  scrollTo()
  sidebar()
  smartMenu()
  snowflakes()
  social()
  theme()
  waved()
  yandexMap()
  preloader().finally(() => {
    console.log('Init')
  })
}

window.addEventListener('DOMContentLoaded', initApplication)
