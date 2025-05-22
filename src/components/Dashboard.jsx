import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import "../styles/Dashboard.css";

// Sample dashboard pages
const AnalyticsPage = () => (
  <div className="dashboard-content">
    <h1 className="page-title">Analytics Dashboard</h1>
    <p className="page-subtitle">Overview of your video performance and audience engagement</p>
    
    <div className="dashboard-tabs">
      <button className="tab-button active">Overview</button>
      <button className="tab-button">Engagement</button>
      <button className="tab-button">Audience</button>
    </div>
    
    <div className="stats-container">
      <div className="stat-card">
        <h3>Total Views</h3>
        <div className="stat-value">452,345</div>
        <div className="stat-change positive">+20.1% from last month</div>
      </div>
      
      <div className="stat-card">
        <h3>Watch Time</h3>
        <div className="stat-value">24,532 hrs</div>
        <div className="stat-change positive">+15.2% from last month</div>
      </div>
      
      <div className="stat-card">
        <h3>Engagement Rate</h3>
        <div className="stat-value">24.5%</div>
        <div className="stat-change positive">+5.2% from last month</div>
      </div>
      
      <div className="stat-card">
        <h3>Active Users</h3>
        <div className="stat-value">12,234</div>
        <div className="stat-change positive">+10.4% from last month</div>
      </div>
    </div>
    
    <div className="charts-container">
      <div className="chart-card large">
        <h3>Video Views</h3>
        <p>Monthly video views across all content</p>
        <div className="chart-placeholder">
          <div className="chart-line"></div>
        </div>
      </div>
      
      <div className="chart-card large">
        <h3>Engagement Metrics</h3>
        <p>Monthly engagement across all content</p>
        <div className="chart-placeholder">
          <div className="chart-bar"></div>
        </div>
      </div>
    </div>
  </div>
);

const VideosPage = () => (
  <div className="dashboard-content">
    <h1 className="page-title">Videos</h1>
    <p className="page-subtitle">Manage and analyze your video content</p>
    <div className="placeholder-content">
      <p>Video management dashboard would appear here</p>
    </div>
  </div>
);

const TasksPage = () => (
  <div className="dashboard-content">
    <h1 className="page-title">Tasks</h1>
    <p className="page-subtitle">Manage your tasks and assignments</p>
    <div className="placeholder-content">
      <p>Task management interface would appear here</p>
    </div>
  </div>
);

const POSInsightsPage = () => (
  <div className="dashboard-content">
    <h1 className="page-title">POS Insights</h1>
    <p className="page-subtitle">Point of Sale analytics and insights</p>
    <div className="placeholder-content">
      <p>POS insights dashboard would appear here</p>
    </div>
  </div>
);

const SettingsPage = () => (
  <div className="dashboard-content">
    <h1 className="page-title">Settings</h1>
    <p className="page-subtitle">Manage your account and application settings</p>
    <div className="placeholder-content">
      <p>Settings interface would appear here</p>
    </div>
  </div>
);

const HelpPage = () => (
  <div className="dashboard-content">
    <h1 className="page-title">Help & Support</h1>
    <p className="page-subtitle">Find answers and support resources</p>
    <div className="placeholder-content">
      <p>Help and support resources would appear here</p>
    </div>
  </div>
);

const Dashboard = () => {
  const { user, logout } = useAuth0();
  const location = useLocation();
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar Navigation */}
      <div className="sidebar">
        <div className="logo">
          <div className="logo-icon">VS</div>
          <span className="logo-text">VideoSense</span>
        </div>
        
        <nav className="sidebar-nav">
          <Link to="/dashboard" className={location.pathname === "/dashboard" ? "nav-item active" : "nav-item"}>
            <i className="nav-icon chart-icon"></i>
            <span>Analytics</span>
          </Link>
          
          <Link to="/dashboard/videos" className={location.pathname === "/dashboard/videos" ? "nav-item active" : "nav-item"}>
            <i className="nav-icon video-icon"></i>
            <span>Videos</span>
          </Link>
          
          <Link to="/dashboard/tasks" className={location.pathname === "/dashboard/tasks" ? "nav-item active" : "nav-item"}>
            <i className="nav-icon task-icon"></i>
            <span>Tasks</span>
          </Link>
          
          <Link to="/dashboard/pos-insights" className={location.pathname === "/dashboard/pos-insights" ? "nav-item active" : "nav-item"}>
            <i className="nav-icon pos-icon"></i>
            <span>POS Insights</span>
          </Link>
          
          <Link to="/dashboard/settings" className={location.pathname === "/dashboard/settings" ? "nav-item active" : "nav-item"}>
            <i className="nav-icon settings-icon"></i>
            <span>Settings</span>
          </Link>
          
          <Link to="/dashboard/help" className={location.pathname === "/dashboard/help" ? "nav-item active" : "nav-item"}>
            <i className="nav-icon help-icon"></i>
            <span>Help</span>
          </Link>
        </nav>
        
        <div className="sidebar-footer">
          <div className="version">VideoSense v1.0.0</div>
        </div>
      </div>
      
      {/* Main Content Area */}
      <div className="main-content">
        {/* Top Header with Profile */}
        <header className="dashboard-header">
          <div className="header-title">
            {/* Empty space for potential search or breadcrumbs */}
          </div>
          
          <div className="profile-section">
            <div className="profile-container" onClick={toggleProfileMenu}>
              {user?.picture ? (
                <img src={user.picture} alt="Profile" className="profile-image" />
              ) : (
                <div className="profile-placeholder">{user?.name?.charAt(0) || "U"}</div>
              )}
            </div>
            
            {showProfileMenu && (
              <div className="profile-menu">
                <div className="profile-info">
                  <div className="profile-name">{user?.name || "User"}</div>
                  <div className="profile-email">{user?.email || ""}</div>
                </div>
                <hr />
                <button className="menu-item" onClick={() => { window.location.href = "/dashboard/settings"; }}>
                  Account Settings
                </button>
                <button className="menu-item logout" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
          </div>
        </header>
        
        {/* Page Content */}
        <div className="page-container">
          <Routes>
            <Route path="/" element={<AnalyticsPage />} />
            <Route path="/videos" element={<VideosPage />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/pos-insights" element={<POSInsightsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/help" element={<HelpPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;