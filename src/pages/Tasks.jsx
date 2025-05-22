const Tasks = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Tasks</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="space-y-4">
          {[1, 2, 3].map((task) => (
            <div key={task} className="flex items-center p-4 border rounded-lg">
              <input type="checkbox" className="mr-4" />
              <div>
                <h3 className="font-medium">Task {task}</h3>
                <p className="text-sm text-gray-500">Task description goes here</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;