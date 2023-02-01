import './styles/global.css'
import NavBar from './components/NavBar'
import Paths from './routes/routes.js'
import Footer from './components/Footer'

export default function App() {

  return (
    <div>
      <Paths/> 
      <NavBar/>
      <Footer/>
    </div>
  )

}
