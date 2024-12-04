import { Link, NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to ="/Users">Users</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/Posts">Posts</NavLink>
                <NavLink to="/contact">Contact us</NavLink>
            </nav>

        </div>
    );
};

export default Header;