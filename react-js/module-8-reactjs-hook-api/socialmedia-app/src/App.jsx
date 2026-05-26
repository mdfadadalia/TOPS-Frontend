import { Outlet } from "react-router-dom"
import Create from "./componants/Create"
import Display from "./componants/Display"
import ContextProvider from "./componants/MyContext"


const App = () => {
  return <>
  <ContextProvider>
    <div className="container py-5">
      <div className="row">
        <Outlet/>
      </div>
    </div>
    </ContextProvider>
  </>
}
export default App