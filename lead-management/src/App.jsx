import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import ManageAccount from "./components/ManageAccount";
import EmployeeDeactivation from "./components/EmployeeDeactivation"; // Import the component

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/manage-account" element={<ManageAccount />} />
          <Route
            path="/employee-deactivation"
            element={<EmployeeDeactivation />}
          />
          <Route
            path="*"
            element={<h1 className="text-2xl font-semibold">Page not found</h1>}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
