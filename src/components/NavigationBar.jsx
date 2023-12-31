import { Link } from "react-router-dom";

export default function NavigationBar () {
    return (
        <nav className="header-navigationBar">
            <ul className="navigation-list">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/article-list">Article List</Link>
                </li>
            </ul>
        </nav>
    )
}