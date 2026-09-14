import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Wrapper } from './components/index.ts'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
		<Wrapper>
			<App />
		</Wrapper>
  </StrictMode>,
)
