const Settings = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Account Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email Notifications</label>
                <input type="checkbox" className="mt-1" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Dark Mode</label>
                <input type="checkbox" className="mt-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;