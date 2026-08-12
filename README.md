# TaskFlow

Gestor de tareas moderno construido con React, Atomic Design y hooks personalizados.

## Caracteristicas

- **CRUD completo**: Crear, leer, actualizar y eliminar tareas
- **Filtrado**: Ver todas, activas o completadas
- **Ordenamiento**: Por fecha, prioridad o alfabetico
- **Prioridades**: Alta, media y baja con colores distintivos
- **Edicion inline**: Editar tareas sin abrir modales
- **Persistencia**: localStorage mantiene tus tareas entre sesiones
- **Dark/Light Mode**: Cambio instantaneo con persistencia
- **Responsive**: Funciona en movil, tablet y desktop

## Stack Tecnico

- **React 18** - Biblioteca UI
- **Vite** - Build tool
- **CSS Modules** - Estilos encapsulados
- **Lucide React** - Iconos

## Arquitectura

| Nivel | Descripcion | Ejemplos |
|-------|-------------|----------|
| **Atoms** | Elementos basicos | Button, Input, Checkbox |
| **Molecules** | Combinaciones de atoms | TodoItem, TodoForm |
| **Organisms** | Secciones completas | TodoList, Header, Stats |
| **Templates** | Layouts de pagina | MainTemplate |

## Instalacion

```bash
# Clonar
git clone https://github.com/JesusMelville/taskflow.git

# Instalar
cd taskflow
npm install

# Ejecutar
npm run dev
```

## Comandos

| Comando | Descripcion |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build para produccion |
| `npm run preview` | Vista previa del build |

## Licencia

MIT
