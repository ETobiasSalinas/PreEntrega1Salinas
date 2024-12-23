import { FaCartShopping } from "react-icons/fa6";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <nav>
            <div className="columns">
        <h2 className="column">TES</h2>
        <div className="m-2 column">
            <button className="m-2">Remeras</button>
            <button className="m-2">Pantalones</button>
            <button className="m-2">Zapatillas</button>
        </div>
        <div className="column">
        <CartWidget/>
        </div>
        </div>
        </nav>
    )
}

export default NavBar