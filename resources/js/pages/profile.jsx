import { User, Edit3, LogOut, Settings, ChevronRight } from 'lucide-react';

export default function Profile() {
    return (
        <div className="pt-20 px-5 pb-24 max-w-3xl mx-auto">
            <div className="flex flex-col items-center mb-8">
                <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-400 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                        <User size={48} className="opacity-90" />
                    </div>
                    <button className="absolute bottom-0 right-0 bg-emerald-600 p-1.5 rounded-full shadow-md hover:bg-emerald-700 transition">
                        <Edit3 size={16} className="text-white" />
                    </button>
                </div>
                <h2 className="mt-4 text-xl font-semibold text-gray-800">Dika Rajin Ibadah</h2>
                <p className="text-gray-500 text-sm">dikaanakbaik@example.com</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden divide-y divide-gray-100">
                <ProfileItem icon={<Settings size={20} />} label="Pengaturan Akun" />
                <ProfileItem icon={<User size={20} />} label="Informasi Pribadi" />
                <ProfileItem icon={<Edit3 size={20} />} label="Ubah Kata Sandi" />
            </div>

            <div className="mt-6">
                <button className="w-full flex items-center justify-center gap-2 bg-red-500 text-white py-2.5 rounded-xl font-medium shadow hover:bg-red-600 transition">
                    <LogOut size={18} />
                    Keluar
                </button>
            </div>

            <div className="mt-10 text-center text-xs text-gray-400">
                <p>Chronos v1.0</p>
            </div>
        </div>
    );
}

function ProfileItem({ icon, label }) {
    return (
        <button className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition">
            <div className="flex items-center gap-3 text-gray-700">
                <div className="text-emerald-600">{icon}</div>
                <span className="font-medium">{label}</span>
            </div>
            <ChevronRight size={18} className="text-gray-400" />
        </button>
    );
}
