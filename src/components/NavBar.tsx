import { Link } from 'react-router-dom'

export default function NavBar(){

    return(
        <div className = 'hidden'>
            <Link to = '/profile'>
                <h1>Profile</h1>
            </Link>

            <Link to = '/contato'>
                <h1>Contact</h1>
            </Link>

            <Link to = '/'>
                <h1>Home</h1>
            </Link>
        </div>
    )
}