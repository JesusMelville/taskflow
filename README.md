# ✓ TaskFlow - Gestor de Tareas

Aplicación de tareas moderna y elegante construida con React, Atomic Design y hooks personalizados.

## ✨ Características

### 🎯 Funcionalidades Core
- **CRUD completo**: Crear, leer, actualizar y eliminar tareas
- **Filtrado**: Ver todas, activas o completadas
- **Ordenamiento**: Por fecha, prioridad o alfabético
- **Prioridades**: Alta, media y baja con colores distintivos
- **Edición inline**: Edita tareas sin abrir modales
- **Persistencia**: localStorage mantiene tus tareas entre sesiones

### 🏗️ Arquitectura
- **Atomic Design**: Componentes organizados atoms → molecules → organisms → templates
- **Custom Hooks**: `useTodos`, `useLocalStorage`, `useTheme`
- **Context API**: Estado global centralizado
- **CSS Modules**: Estilos encapsulados sin conflictos

### 🎨 Diseño
- **Dark/Light Mode**: Cambio instantáneo con persistencia
- **Glassmorphism**: Efecto de vidrio esmerilado moderno
- **Animaciones**: Transiciones suaves en toda la app
- **100% Responsive**: Funciona en móvil, tablet y desktop

## 📁 Estructura del Proyecto

```
todo-app/
├── src/
│   ├── components/
│   │   ├── atoms/              # Elementos básicos
│   │   │   ├── Button/
│   │   │   ├── Input/
│   │   │   └── Checkbox/
│   │   ├── molecules/          # Combinaciones de atoms
│   │   │   ├── TodoItem/
│   │   │   └── TodoForm/
│   │   ├── organisms/          # Secciones completas
│   │   │   ├── TodoList/
│   │   │   ├── Header/
│   │   │   └── Stats/
│   │   └── templates/          # Layouts de página
│   │       └── MainTemplate/
│   ├── hooks/                  # Custom hooks
│   │   ├── useTodos.js
│   │   ├── useLocalStorage.js
│   │   └── useTheme.js
│   ├── context/                # Global state
│   │   └── AppContext.jsx
│   ├── data/                   # Datos iniciales
│   ├── utils/                  # Helpers
│   └── styles/                 # Estilos por componente
│       ├── global.css
│       └── components/
├── public/
├── package.json
└── vite.config.js
```

## 🚀 Instalación

```bash
# Clonar repositorio
git clone https://github.com/JesusMelville/todo-app.git

# Entrar al directorio
cd todo-app

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## 💻 Uso

### Comandos Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build para producción
npm run preview  # Vista previa del build
```

### Atajos de Teclado

| Tecla | Acción |
|-------|--------|
| `Enter` | Agregar tarea |
| `Escape` | Cancelar edición |
| `Click` en checkbox | Completar tarea |

## 🏗️ Arquitectura Detallada

### Atomic Design

| Nivel | Descripción | Ejemplos |
|-------|-------------|----------|
| **Atoms** | Elementos básicos e indivisibles | Button, Input, Checkbox |
| **Molecules** | Combinaciones de atoms | TodoItem, TodoForm |
| **Organisms** | Secciones completas | TodoList, Header, Stats |
| **Templates** | Layouts de página | MainTemplate |

### Custom Hooks

| Hook | Descripción |
|------|-------------|
| `useTodos` | CRUD de tareas con estadísticas |
| `useLocalStorage` | Persistencia con sincronización entre tabs |
| `useTheme` | Gestión de tema dark/light |

### Context

```jsx
// Datos disponibles en el contexto
{
    // De useTodos
    todos,          // Array de tareas
    stats,          // Estadísticas calculadas
    addTodo,        // Agregar tarea
    toggleTodo,     // Completar/descompletar
    deleteTodo,     // Eliminar tarea
    editTodo,       // Editar tarea
    clearCompleted, // Limpiar completadas
    
    // De useTheme
    theme,          // 'dark' | 'light'
    toggleTheme,    // Cambiar tema
    isDark,         // Booleano
    isLight         // Booleano
}
```

## 🎨 Personalización

### Cambiar Colores

Edita las variables CSS en `src/styles/global.css`:

```css
:root {
    --color-primary: #6c5ce7;      /* Color principal */
    --color-primary-light: #a29bfe; /* Color secundario */
    --color-success: #00d2d3;      /* Éxito */
    --color-danger: #ff6b6b;       /* Error/Eliminar */
    --color-warning: #feca57;      /* Advertencia */
}
```

### Agregar Nuevo Componente

1. Crear carpeta en el nivel apropiado (atoms/molecules/organisms)
2. Crear componente y estilos CSS Modules
3. Exportar en el `index.js` de la carpeta padre

## 🛠️ Tecnologías

- **React 18** - Biblioteca UI
- **Vite** - Build tool
- **CSS Modules** - Estilos encapsulados
- **Lucide React** - Iconos (preparado para integrar)

## 📄 Licencia

MIT License

## 👨‍💻 Autor

Jesus Melville - [@JesusMelville](https://github.com/JesusMelville)
