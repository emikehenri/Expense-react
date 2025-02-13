import {RiMenu3Line} from '@remixicon/react'


export const Maincomponent = ({menuButton}) => {
    return (
        <header className="bg-white shadow p-4 flex justify-between items-center">
            <h2 className="text-xl font-bold">Welcome</h2>
            <button className="md:hidden bg-gray-800 text-white px-3 py-2 rounded">
                <RiMenu3Line />
            </button>
          </header>
    )
}