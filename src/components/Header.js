import { Link } from "react-router-dom"

function Header(props){
    return <nav className="nav">
        <Link to={"/"}>Cheese app</Link>
    </nav>
}

export default Header