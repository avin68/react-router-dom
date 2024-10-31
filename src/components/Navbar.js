import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  let linkactive = {
    border: "2px solid yellow",
  };
  return (
    // <nav>
    //     <ul>
    //         <li><a href="">Home</a></li>
    //         <li><a href="">About</a></li>
    //         <li><a href="">Contact</a></li>
    //         <li><a href="">Blog</a></li>
    //     </ul>
    // </nav>

    <nav>
      <ul>
        {/* <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/blog">Blog</Link></li> */}

        {/* <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li> */}

        {/* <li><NavLink to="/" style={{backgroundColor:'orange'}}>Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li> */}

        {/* <li><NavLink to="/" style={(navvlink)=>console.log(navvlink)}>Home</NavLink></li>
            <li><NavLink to="/about" style={(navvlink)=>console.log(navvlink)}>About</NavLink></li>
            <li><NavLink to="/contact" style={(navvlink)=>console.log(navvlink)}>Contact</NavLink></li>
            <li><NavLink to="/blog" style={(navvlink)=>console.log(navvlink)}>Blog</NavLink></li> */}

        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? linkactive : null)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => (isActive ? linkactive : null)}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={({ isActive }) => (isActive ? linkactive : null)}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            style={({ isActive }) => (isActive ? linkactive : null)}
          >
            Blog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
