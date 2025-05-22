const POSInsights = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">POS Insights</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500">Total Sales</h3>
          <p className="text-2xl font-bold">$12,345</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500">Avg Order Value</h3>
          <p className="text-2xl font-bold">$85</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500">Transactions</h3>
          <p className="text-2xl font-bold">145</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500">Conversion Rate</h3>
          <p className="text-2xl font-bold">2.4%</p>
        </div>
      </div>
    </div>
  );
};

export default POSInsights;