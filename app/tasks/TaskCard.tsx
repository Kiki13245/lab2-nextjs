// app/tasks/TaskCard.tsx
'use client';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type TaskCardProps = {
  task: Todo;
  onToggle: (id: number) => void;
};

export default function TaskCard({ task, onToggle }: TaskCardProps) {
  const status = task.completed ? '✅ Completed' : '🔄 In Progress';

  return (
    <div
      onClick={() => onToggle(task.id)}
      style={{
        border: '1px solid #ccc',
        borderRadius: '12px',
        padding: '1rem',
        cursor: 'pointer',
        backgroundColor: task.completed ? '#e0ffe0' : '#fff0e0',
        transition: 'all 0.2s ease',
      }}
    >
      <h3 style={{ margin: 0 }}>{task.title}</h3>
      <p>Статус: {status}</p>
      <small>ID задачи: {task.id}</small>
    </div>
  );
}