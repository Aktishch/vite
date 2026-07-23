export const getTimeFormat = (value: number) => {
  return `${value < 10 || value === 0 ? 0 : ''}${value}`
}
