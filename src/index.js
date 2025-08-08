import ReactDOM from "react-dom/client"
import { StrictMode } from "react"
import {BrowserRouter,HashRouter} from "react-router-dom"

import App from './App.jsx'

const root = ReactDOM.createRoot(document.querySelector("#root"))

root.render(
  <StrictMode>
    <HashRouter>
      <App/>
    </HashRouter>
  </StrictMode>
  
)