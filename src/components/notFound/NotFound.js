import { Link } from "react-router-dom"
import "./NotFound.css"
function NotFound(){
    return(
        // <div className="notFoundContainer">
        //     <h2>Page Not Found</h2>
        //     <button>Go to Home</button>
        // </div>

        // <div className="notFoundContainer">
        // <h2>Page Not Found</h2>
        // <Link to={"/"}><button>Go to Home</button></Link>
        // </div>

        
        <div className="notFoundContainer">
        <h2>Page Not Found</h2>
        <Link to={"/"}>Go to Home</Link>
        </div>
    )
}

export default NotFound