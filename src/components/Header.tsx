import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <header>
            <Link to="/">
                <div className="flex-container">
                    <img src="/images/site_logo_transparent.png"/>
                    <h1>Local Grocery Store</h1>
                </div>
            </Link> 
        </header>
    );
};

export default Header;