
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css';
import Container from './componants/Container';
import { Outlet } from 'react-router-dom';
import { MyContextProvider } from './componants/MyContext';
const App = () => {
  return <>
    <MyContextProvider>
      <Container>
        <Outlet />
      </Container>
    </MyContextProvider>
  </>
};

export default App;