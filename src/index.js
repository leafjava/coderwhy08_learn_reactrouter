import ReactDOM from "react-dom/client"
// import { StrictMode } from "react"
import {BrowserRouter,HashRouter} from "react-router-dom"

import App from './App.jsx'
import { Suspense } from "react"

const root = ReactDOM.createRoot(document.querySelector("#root"))

root.render(
  // <StrictMode>
  // {/* </StrictMode> */}
    <HashRouter>
      <Suspense fallback={<h3>Loading...</h3>}>
        <App/>
      </Suspense>
    </HashRouter>
  
  
)