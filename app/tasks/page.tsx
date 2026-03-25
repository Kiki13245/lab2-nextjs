// app/tasks/page.tsx
import TasksList from './TasksList';

// Тип для задачи из API
type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default async function TasksPage() {
  // Запрос на сервере (кэшируется по умолчанию в Next.js)
  const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
  if (!res.ok) {
    throw new Error('Failed to fetch tasks');
  }
  const tasks: Todo[] = await res.json();

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1>Список задач</h1>
      <TasksList initialTasks={tasks} />
    </div>
  );
}