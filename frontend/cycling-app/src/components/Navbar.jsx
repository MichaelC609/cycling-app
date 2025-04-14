import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import '../static/navbar.css'; // ✅ correct if in src/static

export default function Navbar()
{
    return(
        <>
            <nav className="nav">
                <Link to="/" className="site-title">Biking App</Link>
                <ul>
                    <CustomLink to="/home">Home Page</CustomLink>
                    <CustomLink to="/route-optimizer">Optimize Your <br />
                    Route</CustomLink>
                    <CustomLink to="/performance-tracking">Track Your <br />
                    Performance</CustomLink>
                    <CustomLink to="/signup">Signup</CustomLink>
                </ul>
            </nav>
        </>
    );
}

console.log("Navbar rendered");


function CustomLink({ to, children, ...props })
{
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    );
}