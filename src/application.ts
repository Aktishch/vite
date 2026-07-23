import './tailwind/style.css'

import currentTab from '@scripts/current-tab'
import preloader from '@scripts/preloader'
import theme from '@scripts/theme'

const initApplication = () => {
  currentTab()
  theme()
  preloader().finally(() => {
    console.log('Init')
  })
}

window.addEventListener('DOMContentLoaded', initApplication)
