import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import '../styles/Dashboard.css';

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard-container">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <div className="main-content">
        <TopBar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className="page-container">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;