const Videos = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Video Management</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Video placeholders */}
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-gray-100 rounded-lg p-4">
              <div className="aspect-video bg-gray-200 rounded-lg mb-2"></div>
              <h3 className="font-medium">Video {item}</h3>
              <p className="text-sm text-gray-500">Added: 2024-01-{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;