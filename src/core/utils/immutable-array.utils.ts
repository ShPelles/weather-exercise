export function push<T>(arr: T[], item: T): T[] {
  return [...arr, item];
}

export function splice<T>(arr: T[], start: number, deleteCount: number, items: T[] = []): T[] {
  return [...arr.slice(0, start), ...items, ...arr.slice(start + deleteCount)];
}
