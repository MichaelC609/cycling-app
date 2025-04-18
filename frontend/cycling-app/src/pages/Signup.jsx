import '../static/signup.css';
import { Link } from 'react-router-dom';
import Login from './Login'
import Navbar from '../components/Navbar';

function Signup()
{
    return(
        <>
            <Navbar />
            <div className="container">
                <div className="header">
                    <div className="text">Sign Up</div>
                    <div className="underline"></div>    
                </div>
                <div className="inputs">
                    <div className="input">
                        <input type="text" placeholder='Enter a Username'/>
                    </div>
                    <div className="input">
                        <input type="text" placeholder='Enter Email'/>
                    </div>
                    <div className="input">
                        <input type="password" placeholder='Enter a Password'/>
                    </div>
                </div>  
                <div className="account-exists">Already have an account?  
                    <Link to="/login" className='account-login'> Login here</Link>
                </div>
                <div className="submit-container">
                    <div className="submit">Sign Up</div>
                </div>  
            </div>
        </>
    )
}

export default Signup;