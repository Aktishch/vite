import { hostname } from '@utils/hostname'
import { html } from '@utils/html'

interface CookieOptions {
  name: string
  value: string
  path: string
  expires: number
}

export const COOKIE_EXPIRES_DAYS = 365

export const setCookies = ({ name, value, path, expires }: CookieOptions) => {
  const domain = html.dataset.domain || hostname
  const cookieName = encodeURIComponent(name)
  const cookieValue = encodeURIComponent(value)
  const date = new Date()

  date.setTime(date.getTime() + expires * 24 * 60 * 60 * 1000)
  document.cookie = `${cookieName}=${cookieValue}; path=${path}; expires=${date.toUTCString()}; domain=.${domain}; SameSite=Lax`
}

export const getCookie = (name: string) => {
  const matches = document.cookie.match(
    new RegExp(`(?:^|; )${encodeURIComponent(name).replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1')}=([^;]*)`)
  )

  return matches ? decodeURIComponent(matches[1]) : ''
}
