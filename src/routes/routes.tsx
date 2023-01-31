import { Route, Routes } from 'react-router-dom'
import Profile from '../pages/Profile'
import Contact from '../pages/Contact'
import App from '../App'

export default function Paths(){
    return(
            <Routes>
                {/* <Route path='/' element = {'.'}/> */}
                <Route path='/profile' element = {<Profile/>} />
                <Route path='/contato' element = {<Contact/>} />
            </Routes>
    )
}