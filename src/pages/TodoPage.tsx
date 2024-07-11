import React, { useState, useEffect } from 'react';
import { Task } from '../types/Task';
import TodoTemplate from '../templates/TodoTemplate';
import Input from '../components/atoms/Input';
import TaskList from '../components/organisms/TaskList';
import { loadTasks, saveTasks } from '../utils/localStorage';
import { FaPlusSquare } from 'react-icons/fa';

const TodoPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(loadTasks());
  const [taskName, setTaskName] = useState('');
  const [nextId, setNextId] = useState(tasks.length > 0 ? parseInt(tasks[tasks.length - 1].id) + 1 : 0);

  const addTask = () => {
    if (taskName.trim() === '') return;
    setTasks([...tasks, { id: nextId.toString(), name: taskName, completed: false }]);
    setTaskName('');
    setNextId(nextId + 1);
  };

  const toggleTaskCompletion = (id: string) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleEditTask = (id: string, newName: string) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, name: newName } : task)));
  };

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  return (
    <>
        <h1>To-Do List</h1>
        <TodoTemplate>
            <div className="input-wrapper">
                <Input value={taskName} onChange={e => setTaskName(e.target.value)} />
                <FaPlusSquare className="fa-icon" onClick={addTask} aria-label="Add Task" />
            </div>
            {/* <Button onClick={addTask}>Add Task</Button> */}
            <TaskList tasks={tasks} onToggleComplete={toggleTaskCompletion} onDelete={deleteTask} onEdit={handleEditTask} />
        </TodoTemplate>
    </>
  );
};

export default TodoPage;
