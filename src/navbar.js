import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className= "navbar">
            <h1>Nash Blogs</h1>
            <div className="links d-flex"></div>
            <Link to ="/">Home</Link>
            <Link to ="/create">New Blog</Link>
            <Link to ="/about">About</Link>
            <Link to ="/contact">Contact</Link>
            
        </nav>
    );
}
 
export default Navbar