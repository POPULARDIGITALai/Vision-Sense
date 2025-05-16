import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import '../styles/LandingPage.css';

const LandingPage = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to dashboard if already authenticated
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="landing-container">
      <div className="landing-left-panel">
        {/* We'll use a background image here instead of text content */}
        <div className="overlay">
          <div className="landing-content">
            <h1>Advanced Video Surveillance</h1>
            <p>Intelligent monitoring solutions for enhanced security and operational insights.</p>
          </div>
        </div>
      </div>
      
      <div className="landing-right-panel">
        <div className="logo-container">
          <img src="/logo.png" alt="Video Sense Logo" className="logo" />
        </div>
        
        <div className="login-section">
          <h3>Intelligent Video Surveillance</h3>
          
          <button 
            className="login-button" 
            onClick={() => loginWithRedirect()}
          >
            Login
          </button>
          
          <p className="tagline">Secure video monitoring and analytics platform</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;