import React from 'react';
import styled from 'styled-components';
import TaskItem from '../molecules/TaskItem';
import { Task } from '../../types/Task';

interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newName: string) => void;
}

const TaskListWrapper = styled.div`
  margin-top: 2em;
`;

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleComplete, onDelete, onEdit }) => {
  return (
    <TaskListWrapper>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onToggleComplete={onToggleComplete} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </TaskListWrapper>
  );
};

export default TaskList;
