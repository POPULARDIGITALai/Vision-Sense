import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  
  const navItems = [
    { path: '/dashboard', label: 'Analytics', icon: '📊' },
    { path: '/videos', label: 'Videos', icon: '🎥' },
    { path: '/tasks', label: 'Tasks', icon: '📋' },
    { path: '/pos-insights', label: 'POS Insights', icon: '💰' },
    { path: '/settings', label: 'Settings', icon: '⚙️' },
    { path: '/help', label: 'Help', icon: '❓' },
  ];

  return (
    <aside className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}>
      <div className="p-4">
        <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
      </div>
      <nav className="mt-8">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 ${
              location.pathname === item.path ? 'bg-gray-100 text-blue-600' : ''
            }`}
          >
            <span className="mr-3">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;