import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HooksApp from './HooksApp'
import { MultipleCustomHook } from './03-examples/MultipleCustomHook'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MultipleCustomHook />
  </StrictMode>,
)
