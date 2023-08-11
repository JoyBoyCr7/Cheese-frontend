import { Link } from "react-router-dom"

function Header(props){
    return <nav className="nav">
        <Link to={"/"}>To Cheese app </Link>
        <Link to={"/:id"}>To Cheesees </Link>
    </nav>
}

export default Header