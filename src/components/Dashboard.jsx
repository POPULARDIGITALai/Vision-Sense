import { useAuth0 } from '@auth0/auth0-react';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const { user, logout } = useAuth0();

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <button 
          className="logout-button" 
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Log Out
        </button>
      </div>
      
      <div className="dashboard-content">
        <div className="user-profile">
          <img 
            src={user.picture} 
            alt="Profile" 
            className="profile-image" 
          />
          <div className="user-info">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        </div>
        
        <div className="dashboard-main">
          <h3>Welcome to your Dashboard!</h3>
          <p>This is a protected area of the application. You need to be authenticated to see this.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;