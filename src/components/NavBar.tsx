import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function NavBar(){
    
    const [page, setPage] = useState('/')

    const selectedStyle = 'flex w-[5rem] h-full bg-background items-center text-center rounded-full justify-center'
    const unselectedStyle = 'flex w-[5rem] h-full items-center text-center rounded-full justify-center'
    

    return(
        <div className = 'sm:w-72 h-[3.1rem] flex flex-row text-white bg-navBar rounded-full p-[0.25rem] items-center justify-between fixed z-20 top-10 left-1/2 -translate-x-1/2 backdrop-blur-md'>
            
            <Link to = '/' className = {page == '/' ? selectedStyle : unselectedStyle} onClick = {() => setPage('/')}>
                <h1 className = 'font-semibold text-sm'>Home</h1>
            </Link>

            <Link to = '/profile' className = {page == '/profile' ? selectedStyle : unselectedStyle} state = {{page: 'profile'}} onClick = {() => setPage('/profile')}>
                <h1 className = 'font-medium text-sm'>Profile</h1>
            </Link>

            <Link to = '/contato' className = {page == '/contato' ? selectedStyle : unselectedStyle} onClick ={() => setPage('/contato')} >
                <h1 className = 'font-medium text-sm'>Contact</h1>
            </Link>
        </div>
    )
}