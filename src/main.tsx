import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import './styles/animations.css'
import { ContextProvider } from './context/context'
import Home from './pages/home'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContextProvider>
      <Home />
    </ContextProvider>
  </StrictMode>
)
