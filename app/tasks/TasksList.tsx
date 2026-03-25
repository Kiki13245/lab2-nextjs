// app/tasks/TasksList.tsx
'use client';

import { useState } from 'react';
import TaskCard from './TaskCard';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type TasksListProps = {
  initialTasks: Todo[];
};

export default function TasksList({ initialTasks }: TasksListProps) {
  const [tasks, setTasks] = useState<Todo[]>(initialTasks);

  // Функция для переключения статуса задачи по id
  const toggleTaskStatus = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onToggle={toggleTaskStatus} />
      ))}
    </div>
  );
}