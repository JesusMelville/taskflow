# TaskFlow

Modern task manager built with React, Atomic Design and custom hooks.

## Features

- **Full CRUD**: Create, read, update and delete tasks
- **Filtering**: View all, active or completed tasks
- **Sorting**: By date, priority or alphabetical
- **Priorities**: High, medium and low with distinct colors
- **Inline editing**: Edit tasks without modals
- **Persistence**: localStorage keeps your tasks between sessions
- **Dark/Light Mode**: Instant toggle with persistence
- **Responsive**: Works on mobile, tablet and desktop

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **CSS Modules** - Encapsulated styles
- **Lucide React** - Icons

## Architecture

| Level | Description | Examples |
|-------|-------------|----------|
| **Atoms** | Basic elements | Button, Input, Checkbox |
| **Molecules** | Atom combinations | TodoItem, TodoForm |
| **Organisms** | Complete sections | TodoList, Header, Stats |
| **Templates** | Page layouts | MainTemplate |

## Getting Started

```bash
# Clone
git clone https://github.com/JesusMelville/taskflow.git

# Install
cd taskflow
npm install

# Run
npm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview build |

## License

MIT
