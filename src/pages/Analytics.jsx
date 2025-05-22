import { useAuth0 } from '@auth0/auth0-react';

const Analytics = () => {
  const { user } = useAuth0();

  return (
    <div className="w-full h-full p-4"> {/* Modified this line */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Welcome back, {user?.name}</h1>
        <p className="text-gray-600">Here's your video surveillance overview</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 w-full"> {/* Added w-full */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500">Active Cameras</h3>
          <p className="text-2xl font-bold">24</p>
          <p className="text-green-500 text-sm">All systems operational</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500">Today's Events</h3>
          <p className="text-2xl font-bold">156</p>
          <p className="text-blue-500 text-sm">12 require attention</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500">Storage Used</h3>
          <p className="text-2xl font-bold">68%</p>
          <p className="text-yellow-500 text-sm">2.1TB of 3TB</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500">System Health</h3>
          <p className="text-2xl font-bold">98%</p>
          <p className="text-green-500 text-sm">Excellent</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full"> {/* Added w-full */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Recent Events</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((event) => (
              <div key={event} className="flex items-center border-b pb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-lg mr-4"></div>
                <div>
                  <h4 className="font-medium">Motion Detected - Camera {event}</h4>
                  <p className="text-sm text-gray-500">2 minutes ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">System Status</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>CPU Usage</span>
              <span className="text-green-500">32%</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Memory Usage</span>
              <span className="text-yellow-500">64%</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Network Status</span>
              <span className="text-green-500">Optimal</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;