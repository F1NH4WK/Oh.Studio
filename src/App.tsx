import './styles/global.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Paths from './routes/routes.js'

export default function App() {

  return(
    <div className = 'w-screen h-screen'>
      <Paths/>
      <NavBar/>
      
      <Footer />
    </div>
  )

}
