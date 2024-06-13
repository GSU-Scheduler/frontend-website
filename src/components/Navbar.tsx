import Signup from "../pages/Signup";
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/signup">Sign Up</Link>
        </nav>
    );
}

export default Navbar;