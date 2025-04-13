import '../static/navbar.css'

function Navbar()
{
    return(
        <>
            <nav className="nav">
                <a href="/" className="site-title">Biking App</a>
                <ul>
                    <li>
                        <a href="/home">Home</a>
                    </li>
                    <li>
                        <a href="/route-optimizer">Optimize Your <br />Routes</a>
                    </li>
                    <li>
                        <a href="/performance-tracking">Track Your <br />Performance</a>
                    </li>
                    <li>
                        <a href="/login">Login</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;