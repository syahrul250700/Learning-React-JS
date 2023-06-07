import {Link} from "react-router-dom/cjs/react-router-dom.min";
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>404</h2>
            <p>That page cannot be found</p>
            <Link to ="/">back to homepage</Link>
            {/* <link to="/">back to homepage</link> */}
        </div>
     );
}
 
export default NotFound;