import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <header>
            <Link to="/">
                <h1>Local Grocery Store</h1>
            </Link> 
        </header>
    );
};

export default Header;