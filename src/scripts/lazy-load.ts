import LazyLoad from 'vanilla-lazyload'

export default () => {
  return new LazyLoad({
    elements_selector: '*[data-lazy]',
    callback_loaded: (item) => {
      const media: HTMLElement | null = item.closest('[data-media]')

      if (!media) return

      const loader: HTMLDivElement | null = media.querySelector('*[data-loader]')

      if (loader) {
        loader.remove()
      }
    }
  })
}
