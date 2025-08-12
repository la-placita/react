import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HooksApp from './HooksApp'
import { MultipleCustomHook } from './03-examples/MultipleCustomHook'
import { FocusScreen } from './04-useRef/FocusScreen'
import { Layout } from './05-useLayoutEffect/Layout'
import { Memorize } from './06-useMemo/Memorize'
import { MemoHook } from './06-useMemo/MemoHook'
import { CallbackHook } from './06-useMemo/CallbackHook'
import { Padre } from './07-tarea-memo/Padre'
createRoot(document.getElementById('root')).render(
  <>
    {/* <StrictMode> */}
    <Padre/>
    {/* </StrictMode>, */}
  </>
)
