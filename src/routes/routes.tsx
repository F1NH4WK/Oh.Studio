import { Route, Routes } from 'react-router-dom'
import Profile from '../pages/Profile'
import Contact from '../pages/Contact'
import Home from '../pages/Home'

export default function Paths(){
    return(
        <Routes>
            <Route path = '*' element = {<Contact/>} />
            <Route path='/' element = {<Home/>}/>
            <Route path='/profile' element = {<Profile/>} />
            <Route path='/contato' element = {<Contact/>} />
        </Routes>
    )
}