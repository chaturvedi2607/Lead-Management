import { RxDashboard } from "react-icons/rx";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { FiBriefcase, FiSettings } from "react-icons/fi";
import { FaTasks } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";

const Sidebar = ({ setActivePage }) => {
  const [activePage, setActive] = useState("dashboard");

  const handlePageChange = (page) => {
    setActive(page);
    setActivePage(page);
  };

  const menuItems = [
    { name: "Dashboard", icon: <RxDashboard size={18} />, key: "dashboard" },
    { name: "Employee Onboarding", icon: <HiOutlineUserGroup size={18} />, key: "onboarding" },
    { name: "Manage Account", icon: <FiBriefcase size={18} />, key: "manageAccount" },
    { name: "Manage Work", icon: <FaTasks size={18} />, key: "manageWork" },
    { name: "Settings", icon: <FiSettings size={18} />, key: "settings" },
  ];

  return (
    <aside className="w-64 bg-[#d3e2f1] h-screen p-6 flex flex-col">
      {/* Logo Section */}
      <div className="flex items-center justify-center gap-3 mb-16"> {/* Doubled gap */}
        <div className="w-10 h-10 bg-blue-300 flex items-center justify-center rounded-full">
          <FaRegUserCircle className="text-white text-2xl" />
        </div>
        <h2 className="text-xl font-bold text-black">HRMS</h2>
      </div>

      {/* Navigation Menu */}
      <nav className="flex flex-col gap-3">
        {menuItems.map((item) => (
          <button
            key={item.key}
            onClick={() => handlePageChange(item.key)}
            className={`flex items-center gap-3 text-[16px] p-3 rounded-md transition-all w-full ${
              activePage === item.key
                ? "bg-blue-300 text-blue-900 font-semibold"
                : "text-gray-700 hover:bg-blue-200"
            }`}
            aria-label={item.name}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="whitespace-nowrap">{item.name}</span> {/* Prevents text wrapping */}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;



