
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css';
import Container from './componants/Container';
import { Outlet } from 'react-router-dom';
const App = () => {
  return <>
    <Container>
      <Outlet/>
    </Container>
  </>
};

export default App;