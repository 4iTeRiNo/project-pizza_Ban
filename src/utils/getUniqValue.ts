export function getUniqValue<T>(data: T[]): T[] {
  return Array.from(new Set(data));
}
