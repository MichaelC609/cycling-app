import '../static/login.css';
import { Link } from 'react-router-dom';
import CustomLink from '../components/Navbar';

function Login()
{
    return(
        <>
            <div className="container">
                <div className="header">
                    <div className="text">Log In</div>
                    <div className="underline"></div>    
                </div>
                <div className="inputs">
                    <div className="input">
                        <input type="text" placeholder='Enter your username'/>
                    </div>
                    <div className="input">
                        <input type="email" placeholder='Enter your password'/>
                    </div>
                </div>  
                <div className="account-not-exists">Don't have an account? 
                    <Link to="/signup">Sign up here</Link>
                </div>
                <div className="submit-container">
                    <div className="submit">Log In</div>
                </div>  
            </div>
        </>
    )
}

export default Login;