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
// import './08-useReducer/intro.reducer'
import { TodoApp } from './08-useReducer/TodoApp'
import { MainApp } from './09-useContext/MainApp'
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      {/* <StrictMode> */}
      <MainApp/>
      {/* </StrictMode>, */}
    </BrowserRouter>
  </>
)
