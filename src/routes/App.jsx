import '../styles/App.css'
import Navigation from '../components/Navigation'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  )
}

export default App;