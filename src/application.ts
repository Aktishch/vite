// import '@fancyapps/ui/dist/fancybox/fancybox.css'
// import 'air-datepicker/air-datepicker.css'
// import 'locomotive-scroll/dist/locomotive-scroll.css'
// import 'swiper/css/bundle'
import './tailwind/style.css'

import accordion from '@scripts/accordion'
import airDatepicker from '@scripts/air-datepicker'
import canvasRendering from '@scripts/canvas-rendering'
import combination from '@scripts/combination'
import compare from '@scripts/compare'
import cookie from '@scripts/cookie'
import copy from '@scripts/copy'
import currentTab from '@scripts/current-tab'
import currentYear from '@scripts/current-year'
import dataSave from '@scripts/data-save'
import draggable from '@scripts/draggable'
import fancybox from '@scripts/fancybox'
import fileList from '@scripts/file-list'
import filtering from '@scripts/filtering'
import game from '@scripts/game'
import imagePreview from '@scripts/image-preview'
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
import quiz from '@scripts/quiz'
import range from '@scripts/range'
import runningButton from '@scripts/running-button'
import scrollHeader from '@scripts/scroll-header'
import scrollTo from '@scripts/scroll-to'
import sidebar from '@scripts/sidebar'
import sliderSwiper from '@scripts/slider-swiper'
import smartMenu from '@scripts/smart-menu'
import snowflakes from '@scripts/snowflakes'
import social from '@scripts/social'
import submitHandler from '@scripts/submit-handler'
import theme from '@scripts/theme'
import timeCounter from '@scripts/time-counter'
import timer from '@scripts/timer'
import warning from '@scripts/warning'
import waved from '@scripts/waved'
import world from '@scripts/world'
import writeText from '@scripts/write-text'
import yandexMap from '@scripts/yandex-map'

const initApplication = () => {
  accordion()
  airDatepicker()
  canvasRendering()
  combination()
  compare()
  cookie()
  copy()
  currentTab()
  currentYear()
  dataSave()
  draggable()
  fancybox()
  fileList()
  filtering()
  game()
  imagePreview()
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
  quiz()
  range()
  runningButton()
  scrollHeader()
  scrollTo()
  sidebar()
  sliderSwiper()
  smartMenu()
  snowflakes()
  social()
  submitHandler()
  theme()
  timeCounter()
  timer()
  warning()
  waved()
  world()
  yandexMap()
  preloader().finally(() => {
    outNumbers()
    writeText()
  })
}

window.addEventListener('DOMContentLoaded', initApplication)
