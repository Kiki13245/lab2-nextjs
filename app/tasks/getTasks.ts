import { cacheLife } from 'next/cache';

export async function getTasks() {
  'use cache';
  cacheLife('minutes');   // кэш на 15 минут (сервер) и 5 минут (клиент)

  const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
  if (!res.ok) {
    throw new Error('Failed to fetch tasks');
  }
  const tasks = await res.json();
  return tasks;
}