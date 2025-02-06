import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { RiArrowUpCircleFill, RiArrowDownCircleFill, RiMenuLine } from "@remixicon/react";
import { RiDashboardFill, RiSettingsFill } from "@remixicon/react";
import { RiLogoutBoxFill } from "@remixicon/react";

const data = [
  { name: "Food", value: 400 },
  { name: "Transport", value: 300 },
  { name: "Entertainment", value: 300 },
  { name: "Shopping", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-500 text-white p-5 hidden md:block">
        <h2 className="text-2xl font-bold mb-5">Expense Tracker</h2>
        <ul className="space-y-4">
          <li className="flex items-center space-x-2 cursor-pointer hover:bg-blue-600 p-2 rounded">
            <RiDashboardFill size={20} /> <span>Dashboard</span>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer hover:bg-blue-600 p-2 rounded">
            <RiSettingsFill size={20} /> <span>Settings</span>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer hover:bg-blue-600 p-2 rounded text-red-300">
            <RiLogoutBoxFill size={20} /> <span>Logout</span>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-5">
        {/* Navbar */}
        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
          <RiMenuLine className="md:hidden text-2xl cursor-pointer" />
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <div className="flex items-center space-x-3">
            <span className="text-sm">Welcome, User</span>
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="rounded-full w-10 h-10"
            />
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
          <div className="bg-white p-5 rounded-lg shadow flex justify-between items-center">
            <div>
              <h3 className="text-gray-500">Income</h3>
              <p className="text-2xl font-bold text-green-500">$5,000</p>
            </div>
            <RiArrowUpCircleFill className="text-green-500 text-3xl" />
          </div>
          <div className="bg-white p-5 rounded-lg shadow flex justify-between items-center">
            <div>
              <h3 className="text-gray-500">Expenses</h3>
              <p className="text-2xl font-bold text-red-500">$2,500</p>
            </div>
            <RiArrowDownCircleFill className="text-red-500 text-3xl" />
          </div>
          <div className="bg-white p-5 rounded-lg shadow flex justify-between items-center">
            <div>
              <h3 className="text-gray-500">Balance</h3>
              <p className="text-2xl font-bold">$2,500</p>
            </div>
            <RiArrowUpCircleFill className="text-blue-500 text-3xl" />
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-5 rounded-lg shadow mt-5">
          <h3 className="text-xl font-bold mb-3">Expense Breakdown</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
