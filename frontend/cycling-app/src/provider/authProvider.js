import axios from "axios";
import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState
} from 'react';

//create empty context object using createContext
const AuthContext = createContext();

const AuthProvider = ({  children }) => {
    //authentication token --> gets token if exists
    const [token, setToken_] = useState(localStorage.getItem("token"));

    //setter function for setToken
    const setToken = (newToken) => {
        setToken_(newToken);
    };

    //set default authorization ehader in axios
    useEffect(() => {
        //if token exists, set auth header in axios and localStorage
        if(token)
        {
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
            localStorage.setItem('token', token)
        }

            else
            {
                delete axios.defaults.headers.common["Authorization"];
                localStorage.removeItem('token');
            }
    }, [token]);

    //create memoized context value
    const contextValue = useMemo(
        () => ({
            token, 
            setToken
        }),
        [token]
    );

    //provide authentication context to children components
    return(
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

//export custom hook to access authentication context
export const useAuth = () => {
    return useContext(AuthContext);
};

export default AuthProvider;