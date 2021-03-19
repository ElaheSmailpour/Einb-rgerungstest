
import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <div classname="navbar">
            <ul>
                <li> <Link to='/Info'>Info</Link></li>
                <li> <Link to='/'>Home</Link></li>
                <li> <Link to='/Hilfe'>Hilfe</Link></li>
                <li> <Link to='/Prüfung'>Prüfung</Link></li>
                
            </ul>
        </div>
    )
}

export default Navbar





