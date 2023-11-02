export const getDimensionValue = (value?: number | string): string => {
  if (typeof value === 'number') {
    return `${value}px` // If the value is a number, append 'px' as unit.
  }
  return value || 'auto' // If the value is a string, use it as is; otherwise, default to 'auto'.
}
