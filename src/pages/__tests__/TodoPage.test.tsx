/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoPage from '../TodoPage';
import {describe, expect, test} from '@jest/globals';

describe('TodoPage', () => {
  test('renders the TodoPage component', () => {
    render(<TodoPage />);
    expect(screen.getByLabelText('Add Task')).toBeInTheDocument();
  });

  test('adds a new task', () => {
    render(<TodoPage />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'New Task' } });
    fireEvent.click(screen.getByLabelText('Add Task'));
    expect(screen.getByText('New Task')).toBeInTheDocument();
  });

  test('edits a task', () => {
    render(<TodoPage />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'New Task' } });
    fireEvent.click(screen.getByLabelText('Add Task'));

    fireEvent.click(screen.getByLabelText('edit-task-0')); 
    fireEvent.change(screen.getByRole('textbox', { name: /edit-task-0/i }), { target: { value: 'Edited Task' } });
    fireEvent.click(screen.getByLabelText('save-task-0')); 

    expect(screen.getByText('Edited Task')).toBeInTheDocument();
  });
});
