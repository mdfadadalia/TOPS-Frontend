import { Display } from './componants/Display'
import { Container } from './componants/Container'
import { Outlet } from 'react-router-dom'
import MyContextProvider from './componants/MyContext'
import { Create } from './componants/Create'

const App = () => {
  return <>
    <MyContextProvider>
      <Container>
        <Create/>
        <Display/>
      </Container>
    </MyContextProvider>
  </>
}
export default App