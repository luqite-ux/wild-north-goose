export type LocalizedValue<T> = Record<string, T | null | undefined> | null | undefined

function isPresent(value: unknown): boolean {
  if (typeof value === 'string') return value.trim().length > 0
  if (Array.isArray(value)) return value.length > 0
  return value !== null && value !== undefined
}

export function pickLocalizedValue(
  value: LocalizedValue<string>,
  requestedLocale: string,
  defaultLocale: string,
  legacyFallback = '',
): string {
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    const requested = value[requestedLocale]
    if (isPresent(requested)) return String(requested)
    const fallback = value[defaultLocale]
    if (isPresent(fallback)) return String(fallback)
    const first = Object.values(value).find(isPresent)
    if (isPresent(first)) return String(first)
  }
  return legacyFallback
}

export function pickLocalizedArray(
  value: LocalizedValue<string[]>,
  requestedLocale: string,
  defaultLocale: string,
  legacyFallback: string[] = [],
): string[] {
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    const requested = value[requestedLocale]
    if (Array.isArray(requested) && requested.length) return requested.filter((item): item is string => typeof item === 'string')
    const fallback = value[defaultLocale]
    if (Array.isArray(fallback) && fallback.length) return fallback.filter((item): item is string => typeof item === 'string')
    const first = Object.values(value).find((item) => Array.isArray(item) && item.length)
    if (Array.isArray(first)) return first.filter((item): item is string => typeof item === 'string')
  }
  return legacyFallback
}
