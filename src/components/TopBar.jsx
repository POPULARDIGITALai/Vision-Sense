const TopBar = ({ onMenuClick }) => {
    const { user, logout } = useAuth0();
  
    return (
      <header className="dashboard-header">
        <div className="profile-section">
          <div className="profile-container">
            {user?.picture ? (
              <img src={user.picture} alt="Profile" className="profile-image" />
            ) : (
              <div className="profile-placeholder">{user?.name?.charAt(0) || "U"}</div>
            )}
          </div>
        </div>
      </header>
    );
  };