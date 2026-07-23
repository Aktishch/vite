export const getTouchDevice = () => {
  return 'ontouchstart' in window || window.navigator.maxTouchPoints > 0
}
