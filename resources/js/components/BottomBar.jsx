import { NavLink } from 'react-router-dom';
import { Home, BookOpen, PlusCircle, User, Building } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function BottomBar() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
        return () => (document.body.style.overflow = 'auto');
    }, [isModalOpen]);

    return (
        <>
            <div className="fixed bottom-0 left-0 right-0 bg-white/30 backdrop-blur-xl border-t border-white/20 shadow-lg md:hidden z-40">
                <div className="relative flex justify-center items-center py-2 px-6">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-600 text-white rounded-full p-4 shadow-lg transition-transform hover:scale-110 z-10"
                    >
                        <PlusCircle size={28} />
                    </button>

                    <div className="flex gap-24 items-end w-full max-w-lg">
                        <div className="flex justify-around flex-1">
                            <NavLink
                                to="/home"
                                className={({ isActive }) =>
                                    `flex flex-col items-center text-sm transition-all ${isActive
                                        ? 'text-emerald-600 scale-110'
                                        : 'text-gray-500 hover:text-emerald-500'
                                    }`
                                }
                            >
                                <Home size={24} />
                                <span className="mt-1 text-xs">Home</span>
                            </NavLink>

                            <NavLink
                                to="/journal"
                                className={({ isActive }) =>
                                    `flex flex-col items-center text-sm transition-all ${isActive
                                        ? 'text-emerald-600 scale-110'
                                        : 'text-gray-500 hover:text-emerald-500'
                                    }`
                                }
                            >
                                <BookOpen size={24} />
                                <span className="mt-1 text-xs">Journal</span>
                            </NavLink>
                        </div>

                        <div className="flex justify-around flex-1">
                            <NavLink
                                to="/group"
                                className={({ isActive }) =>
                                    `flex flex-col items-center text-sm transition-all ${isActive
                                        ? 'text-emerald-600 scale-110'
                                        : 'text-gray-500 hover:text-emerald-500'
                                    }`
                                }
                            >
                                <Building size={24} />
                                <span className="mt-1 text-xs">Group</span>
                            </NavLink>

                            <NavLink
                                to="/profile"
                                className={({ isActive }) =>
                                    `flex flex-col items-center text-sm transition-all ${isActive
                                        ? 'text-emerald-600 scale-110'
                                        : 'text-gray-500 hover:text-emerald-500'
                                    }`
                                }
                            >
                                <User size={24} />
                                <span className="mt-1 text-xs">Profile</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden md:flex fixed top-0 left-0 h-screen w-56 bg-white/60 backdrop-blur-xl border-r border-white/20 shadow-lg flex-col justify-between py-6 z-40">
                <div className='mt-20'>
                    <nav className="flex flex-col space-y-2 px-2">
                        <NavLink
                            to="/home"
                            className={({ isActive }) =>
                                `flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${isActive
                                    ? 'bg-emerald-100 text-emerald-700 font-semibold'
                                    : 'text-gray-600 hover:bg-emerald-50 hover:text-emerald-600'
                                }`
                            }
                        >
                            <Home size={20} />
                            <span>Home</span>
                        </NavLink>

                        <NavLink
                            to="/journal"
                            className={({ isActive }) =>
                                `flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${isActive
                                    ? 'bg-emerald-100 text-emerald-700 font-semibold'
                                    : 'text-gray-600 hover:bg-emerald-50 hover:text-emerald-600'
                                }`
                            }
                        >
                            <BookOpen size={20} />
                            <span>Journal</span>
                        </NavLink>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="flex items-center space-x-2 px-4 py-2 mt-10 rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 transition"
                        >
                            <PlusCircle size={20} />
                            <span>Buat</span>
                        </button>
                    </nav>
                </div>

                <div className="px-2">
                    <NavLink
                        to="/profile"
                        className={({ isActive }) =>
                            `flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${isActive
                                ? 'bg-emerald-100 text-emerald-700 font-semibold'
                                : 'text-gray-600 hover:bg-emerald-50 hover:text-emerald-600'
                            }`
                        }
                    >
                        <User size={20} />
                        <span>Profile</span>
                    </NavLink>
                </div>
            </div>

            {isModalOpen && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-[9999]"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white rounded-lg p-6 shadow-2xl max-w-md w-full mx-4"
                    >
                        <h2 className="text-lg font-semibold mb-3">Tambah Konten</h2>
                        <p className="text-sm text-gray-500 mb-4">
                            Ini contoh modal. Ubah isinya sesuai kebutuhan lo.
                        </p>
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="mt-2 bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700 w-full"
                        >
                            Tutup
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
