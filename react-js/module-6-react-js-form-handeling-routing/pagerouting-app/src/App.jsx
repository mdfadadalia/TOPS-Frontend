import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav } from './componants/Navbar'
import Home from './componants/Home'
import About from './componants/About'
import { Outlet } from 'react-router-dom'
const App  = () => {
  return <>
  <Nav/>
  <Outlet/>
  </>
}
export default App