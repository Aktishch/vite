import '@fancyapps/ui/dist/fancybox/fancybox.css'
import 'air-datepicker/air-datepicker.css'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import './tailwind/style.css'

import accordion from '@scripts/accordion'
import airDatepicker from '@scripts/air-datepicker'
import currentTab from '@scripts/current-tab'
import currentYear from '@scripts/current-year'
import dataSave from '@scripts/data-save'
import draggable from '@scripts/draggable'
import fancybox from '@scripts/fancybox'
import fileList from '@scripts/file-list'
import filtering from '@scripts/filtering'
import input from '@scripts/input'
import lazyLoad from '@scripts/lazy-load'
import listing from '@scripts/listing'
import locomotiveScroll from '@scripts/locomotive-scroll'
import menu from '@scripts/menu'
import movement from '@scripts/movement'
import outNumbers from '@scripts/out-numbers'
import palette from '@scripts/palette'
import parallax from '@scripts/parallax'
import phoneMask from '@scripts/phone-mask'
import preloader from '@scripts/preloader'
import quantity from '@scripts/quantity'
import runningButton from '@scripts/running-button'
import scrollHeader from '@scripts/scroll-header'
import scrollTo from '@scripts/scroll-to'
import sidebar from '@scripts/sidebar'
import smartMenu from '@scripts/smart-menu'
import snowflakes from '@scripts/snowflakes'
import social from '@scripts/social'
import submitHandler from '@scripts/submit-handler'
import theme from '@scripts/theme'
import waved from '@scripts/waved'
import writeText from '@scripts/write-text'
import yandexMap from '@scripts/yandex-map'

const initApplication = () => {
  accordion()
  airDatepicker()
  currentTab()
  currentYear()
  dataSave()
  draggable()
  fancybox()
  fileList()
  filtering()
  input()
  lazyLoad()
  listing()
  locomotiveScroll()
  menu()
  movement()
  palette()
  parallax()
  phoneMask()
  quantity()
  runningButton()
  scrollHeader()
  scrollTo()
  sidebar()
  smartMenu()
  snowflakes()
  social()
  submitHandler()
  theme()
  waved()
  yandexMap()
  preloader().finally(() => {
    outNumbers()
    writeText()
  })
}

window.addEventListener('DOMContentLoaded', initApplication)
