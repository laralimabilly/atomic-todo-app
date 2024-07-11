# Atomic ToDo List Application

This project is an interactive to-do list application built using the principles of Atomic Design and TypeScript for enhanced type safety and structured code. The application is styled with CSS and includes features such as adding, editing, completing, and deleting tasks.

## Atomic Design Choices

Atomic Design is a methodology for creating design systems by breaking down a UI into smaller, reusable components. The methodology consists of five stages: Atoms, Molecules, Organisms, Templates, and Pages. This project follows these principles to ensure maintainable and scalable code.

- **Atoms**: Contains individual UI elements like Button, Checkbox, Input, and Modal.
- **Molecules**: Combines atoms to form more complex components like TaskItem.
- **Organisms**: Contains larger components that group molecules, such as TaskList.
- **Templates**: Contains the layout structure of the application, such as TodoTemplate.
- **Pages**: Contains the actual pages of the application, such as TodoPage.
- **Types**: Contains TypeScript interfaces and types, such as Task.
- **Utils**: Contains utility functions for local storage.

## Project Structure

```bash
src/
├── components/
│   ├── atoms/
│   │   ├── Button.tsx
│   │   ├── Checkbox.tsx
│   │   ├── Input.tsx
│   │   └── Modal.tsx
│   ├── molecules/
│   │   └── TaskItem.tsx
│   ├── organisms/
│   │   └── TaskList.tsx
├── pages/
│   ├── __tests__
│   │   └── TodoPage.test.tsx
│   └── TodoPage.tsx
├── templates/
│   └── TodoTemplate.tsx
├── types/
│   └── Task.ts
├── utils/
│   ├── localStorage.ts
└── index.tsx
```

## TypeScript
TypeScript is used throughout the project to provide type safety and improve code maintainability. The Task interface defines the structure of a task object:

```typescript
export interface Task {
  id: string;
  name: string;
  completed: boolean;
}
```

## CSS Styling
The application is styled using CSS with Atomic Design principles. Each component has its own styles, ensuring modular and reusable CSS.

## Features
- Add Task: Users can add new tasks using the input field and the add button.
- Edit Task: Users can edit the name of an existing task.
- Complete Task: Users can mark tasks as completed or incomplete.
- Delete Task: Users can delete tasks, with a confirmation modal prompting for deletion.
- Persistent Storage: Tasks are saved to local storage and persist across page reloads.

## Running the Project
To run the project locally, follow these steps:

**1**. Clone the repository
```bash
git clone https://github.com/your-username/atomic-todo-app.git
cd atomic-todo-app
```

2. Install dependencies
```bash
npm install
```

3. Run the application
```bash
npm start
```

4. Open your browser and navigate to http://localhost:3000.

## Tests
This project includes unit tests using Jest. To run the tests, use the following command:
```bash
npm test
```

## Contact
For any questions or feedback, please reach out to [laralimabilly@gmail.com].