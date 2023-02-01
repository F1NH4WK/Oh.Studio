import { Link } from 'react-router-dom'

export default function NavBar(){

    return(
        <div className = 'w-1/5 max-w-[35%] min-w-[1/5%] h-[3.1rem] flex flex-row text-white bg-navBar rounded-full p-[0.25rem] items-center justify-between fixed top-10 left-1/2 -translate-x-1/2 backdrop-blur-md'>
            <Link to = '/' className = 'flex w-[5rem] h-full bg-background items-center text-center rounded-full justify-center'>
                <h1 className = 'font-semibold text-sm'>Home</h1>
            </Link>

            <Link to = '/profile' className = 'flex w-[5rem] h-full items-center text-center rounded-full justify-center'>
                <h1 className = 'font-medium text-sm'>Profile</h1>
            </Link>

            <Link to = '/contato' className = 'flex w-[5rem] h-full items-center text-center rounded-full justify-center' >
                <h1 className = 'font-medium text-sm'>Contact</h1>
            </Link>
        </div>
    )
}