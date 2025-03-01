import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

function App() {
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div className="flex h-screen">
      <Sidebar setActivePage={setActivePage} />
      <div className="flex-1 p-6">
        {activePage === "dashboard" && <Dashboard />}
        {/* Placeholder for other pages */}
        {activePage === "onboarding" && <h1>Employee Onboarding</h1>}
        {activePage === "manageAccount" && <h1>Manage Account</h1>}
        {activePage === "manageWork" && <h1>Manage Work</h1>}
        {activePage === "settings" && <h1>Settings</h1>}
      </div>
    </div>
  );
}

export default App;


