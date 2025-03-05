import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search, Calendar } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";

export default function EmployeeDeactivation() {
  const [notes, setNotes] = useState("");

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-100 p-5 min-h-screen">
        <h2 className="text-xl font-bold mb-6 text-center">HRMS</h2>
        <nav>
          <ul>
            <li className="mb-4 flex items-center p-2 hover:bg-blue-200 rounded cursor-pointer">📊 Dashboard</li>
            <li className="mb-4 flex items-center p-2 hover:bg-blue-200 rounded cursor-pointer">👥 Employee Onboarding</li>
            <li className="mb-4 flex items-center p-2 bg-blue-300 rounded font-bold">🔑 Manage Account</li>
            <li className="mb-4 flex items-center p-2 hover:bg-blue-200 rounded cursor-pointer">📋 Manage Work</li>
            <li className="flex items-center p-2 hover:bg-blue-200 rounded cursor-pointer">⚙️ Setting</li>
          </ul>
        </nav>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 p-6">
        <header className="flex justify-between items-center mb-6 bg-white p-4 rounded shadow">
          <h1 className="text-xl font-bold">Employee Deactivation Management</h1>
          <div className="flex items-center space-x-2">
            <Input placeholder="Search" className="w-64 border rounded p-2" />
            <Search className="text-gray-500" />
            <Avatar className="ml-4" />
            <span className="font-semibold">Rashmika (HR Admin)</span>
          </div>
        </header>
        
        <Card className="p-6 mb-6 shadow">
          <h2 className="font-semibold mb-4">Mark Deactivation as Completed</h2>
          <div className="grid grid-cols-6 gap-4 font-semibold bg-gray-100 p-2 rounded">
            <div>Employee Name</div>
            <div>Department</div>
            <div>Last Working Date</div>
            <div>Completion Date</div>
            <div>Status</div>
            <div>Completed By</div>
          </div>
          <div className="grid grid-cols-6 gap-4 mt-2 p-3 bg-white rounded items-center">
            <div className="flex items-center space-x-2">
              <Avatar className="w-8 h-8" />
              <span>Ram Mahish (EMP001)</span>
            </div>
            <div>Marketing</div>
            <div>2024-02-28</div>
            <div>2024-03-01</div>
            <div className="text-green-600 bg-green-100 px-2 py-1 rounded">Completed</div>
            <div>Rashmika</div>
          </div>
          <div className="flex mt-4 space-x-2">
            <Button className="bg-blue-500 text-white">Confirm Completion</Button>
            <Button variant="outline">Cancel</Button>
          </div>
        </Card>
        
        <Card className="p-6 mb-6 shadow">
          <h2 className="font-semibold mb-4">Completion Notes</h2>
          <textarea
            className="w-full border p-2 rounded bg-gray-50"
            placeholder="Add a completion note here"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>
          <Button className="mt-4 bg-blue-500 text-white">Save Notes</Button>
        </Card>

        <Card className="p-6 shadow">
          <h2 className="font-semibold mb-4">Activity Log</h2>
          <div className="flex items-center text-red-500 mb-2 space-x-2">
            <span>❌</span>
            <span>Email account deactivated for Sarah Johnson</span>
            <span className="text-gray-500 text-sm">(By John Smith - 2 hours ago)</span>
          </div>
          <div className="flex items-center text-green-500 space-x-2">
            <span>✅</span>
            <span>Building access revoked for Michael Brown</span>
            <span className="text-gray-500 text-sm">(By John Smith - 2 hours ago)</span>
          </div>
        </Card>
      </main>
    </div>
  );
}
