import {RiPlantFill} from '@remixicon/react'
export const Sidebar = () => {
    return (
        <aside className="w-64 bg-gray-800 text-white p-4 hidden md:block">
          <span className="text-lg font-bold flex flex-row align-center gap-1">
                <RiPlantFill />
                <span className = "text-xl font-normal text-mainbackground">ExpenseTrack</span>
              </span>
          <nav className="mt-4">
            <ul>
              <li className="py-2 px-4 hover:bg-gray-700 rounded">Home</li>
              <li className="py-2 px-4 hover:bg-gray-700 rounded">Analytics</li>
              <li className="py-2 px-4 hover:bg-gray-700 rounded">Settings</li>
            </ul>
          </nav>
        </aside>
    )
} 