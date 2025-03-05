import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import ManageAccount from "./components/ManageAccount";


function App() {
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div className="flex h-screen">
      <Sidebar setActivePage={setActivePage} />
      <div className="flex-1 p-6">
        {activePage === "dashboard" && <Dashboard setActivePage={setActivePage} />}
        {activePage === "manageAccount" && <ManageAccount />}
        {activePage === "onboarding" && <h1>Employee Onboarding</h1>}
        {activePage === "manageWork" && <h1>Manage Work</h1>}
        {activePage === "settings" && <h1>Settings</h1>}
      </div>
    </div>
  );
}

export default App;