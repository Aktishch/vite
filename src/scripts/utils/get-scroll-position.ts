export const getScrollPosition = () => {
  return {
    top: window.scrollY ?? 0,
    left: window.scrollX ?? 0
  }
}
