export const getScrollPosition = () => {
  const { scrollY, scrollX } = window

  return {
    top: scrollY ?? 0,
    left: scrollX ?? 0
  }
}
