import React, { useState } from 'react';
import styled from 'styled-components';
import Checkbox from '../atoms/Checkbox';
import Input from '../atoms/Input';
import Modal from '../atoms/Modal';
import { Task } from '../../types/Task';
import { FaPenAlt, FaTrashAlt, FaSave } from 'react-icons/fa';

interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newName: string) => void;
}

const TaskItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5em;
`;

const TaskName = styled.span<{ $completed: boolean }>`
  text-decoration: ${({ $completed }) => ($completed ? 'line-through' : 'none')};
  flex-grow: 1;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggleComplete, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(task.name);
  const [showModal, setShowModal] = useState(false);

  const handleEdit = () => {
    if (isEditing) {
      onEdit(task.id, newName);
    }
    setIsEditing(!isEditing);
  };

  const handleDelete = () => {
    onDelete(task.id);
    setShowModal(false);
  };

  return (
    <>
        <TaskItemWrapper>
        <Checkbox checked={task.completed} onChange={() => onToggleComplete(task.id)} />
        {isEditing ? (
            <Input value={newName} onChange={e => setNewName(e.target.value)} aria-label={`edit-task-${task.id}`} />
        ) : (
            <TaskName $completed={task.completed}>{task.name}</TaskName>
        )}
        <IconWrapper>
            <FaPenAlt className="fa-icon" onClick={handleEdit} aria-label={`edit-task-${task.id}`} />
            {isEditing && <FaSave className="fa-icon" onClick={handleEdit} aria-label={`save-task-${task.id}`} />}
            <FaTrashAlt className="fa-icon" onClick={() => setShowModal(true)} aria-label={`delete-task-${task.id}`} />
        </IconWrapper>
        </TaskItemWrapper>

        <Modal show={showModal} onClose={() => setShowModal(false)} onConfirm={handleDelete}>
            Are you sure you want to delete this task?
        </Modal>
    </>
  );
};

export default TaskItem;