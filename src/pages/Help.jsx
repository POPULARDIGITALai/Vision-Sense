const Help = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Help & Support</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">FAQs</h3>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h4 className="font-medium">How do I get started?</h4>
                <p className="text-gray-600 mt-1">Getting started guide content goes here.</p>
              </div>
              <div className="border-b pb-4">
                <h4 className="font-medium">Contact Support</h4>
                <p className="text-gray-600 mt-1">Email: support@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;