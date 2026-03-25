import TasksList from './TasksList';
import { getTasks } from './getTasks';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default async function TasksPage() {
  const tasks: Todo[] = await getTasks();

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1>Список задач</h1>
      <TasksList initialTasks={tasks} />
    </div>
  );
}