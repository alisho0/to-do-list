import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToDoListApp } from './ToDoListApp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToDoListApp />
  </StrictMode>,
)
