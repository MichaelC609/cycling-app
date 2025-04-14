import LandingPage from './pages/LandingPage.jsx';
import HomePage from './pages/HomePage.jsx';
import PerfTracking from './pages/PerfTracking.jsx';
import RouteOptimizer from './pages/RouteOptimizer.jsx';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import { Route, Routes } from 'react-router-dom';

function App() {
  return(
    <>
        <Routes>
          <Route path= "/" element={<LandingPage />} />
          <Route path= '/home' element={<HomePage />} />
          <Route path= '/route-optimizer' element={<RouteOptimizer />} />
          <Route path= '/performance-tracking' element={<PerfTracking />} />
          <Route path= '/signup' element={<Signup />} />
          <Route path= '/login' element={<Login />} />
        </Routes>
    </>
  );
}


export default App;
