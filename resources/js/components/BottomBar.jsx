import { NavLink } from 'react-router-dom';
import { Home, BookOpen, PlusCircle, User } from 'lucide-react';

export default function BottomBar() {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white/30 backdrop-blur-xl border-t border-white/20 shadow-lg md:hidden z-50">
            <div className="relative flex justify-around items-center py-2">
                <NavLink
                    to="/home"
                    className={({ isActive }) =>
                        `flex flex-col items-center text-sm transition-all ${
                            isActive ? 'text-emerald-600 scale-110' : 'text-gray-500 hover:text-emerald-500'
                        }`
                    }
                >
                    <Home size={24} />
                    <span className="mt-1 text-xs">Home</span>
                </NavLink>
                <NavLink
                    to="/journal"
                    className={({ isActive }) =>
                        `flex flex-col items-center text-sm transition-all mr-10 ${
                            isActive ? 'text-emerald-600 scale-110' : 'text-gray-500 hover:text-emerald-500'
                        }`
                    }
                >
                    <BookOpen size={24} />
                    <span className="mt-1 text-xs">Journal</span>
                </NavLink>
                <button
                        onClick={() => setIsModalOpen(true)}
                        className={`absolute -top-5 left-1/2 -translate-x-1/2 bg-emerald-600 text-white rounded-full p-3 shadow-lg transition-transform hover:scale-110`}
                    >
                        <PlusCircle size={28} />
                    </button>

                    <div className="w-10" />
                <div className="w-10" />
                <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                        `flex flex-col items-center text-sm transition-all ${
                            isActive ? 'text-emerald-600 scale-110' : 'text-gray-500 hover:text-emerald-500'
                        }`
                    }
                >
                    <User size={24} />
                    <span className="mt-1 text-xs">Profile</span>
                </NavLink>
            </div>
        </div>
    );
}
