import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppRoutes } from './appRoutes'
import { Toaster } from "@/components/ui/toast"
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
		<AppRoutes />
		<Toaster />
  </StrictMode>
)