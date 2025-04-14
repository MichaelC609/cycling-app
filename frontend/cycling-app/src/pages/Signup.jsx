import '../static/signup.css';

function Signup()
{
    return(
        <>
            <div className="container">
                <div className="header">
                    <div className="text">Sign Up</div>
                    <div className="underline"></div>    
                </div>
                <div className="inputs">
                    <div className="input">
                        <input type="text" placeholder='Enter First and Last Name'/>
                    </div>
                    <div className="input">
                        <input type="email" placeholder='Enter Email'/>
                    </div>
                    <div className="input">
                        <input type="password" placeholder='Enter a Password'/>
                    </div>
                </div>  
                <div className="account-exists">Have an account? 
                    <span> Login Here</span>
                </div>
                <div className="submit-container">
                    <div className="submit">Sign Up</div>
                </div>  
            </div>
        </>
    )
}

export default Signup;