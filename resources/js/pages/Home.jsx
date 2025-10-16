import React from 'react';
import { PlusCircle, BookOpen, CalendarDays } from 'lucide-react';

export default function Home() {
    return (
        <div className="px-4 pt-10 pb-24 max-w-3xl mx-auto bg-gradient-to-b from-emerald-50 to-white min-h-screen">
            <div className="text-center mb-10">
                <div className="inline-block px-4 py-1 mb-3 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
                    ✨ Selamat datang kembali
                </div>
                <h1 className="text-4xl font-extrabold text-emerald-700 tracking-tight">Chronos</h1>
                <p className="text-gray-500 mt-2 text-sm sm:text-base">
                    Catat cerita harianmu dengan tenang, simpan kenangan untuk masa depan 📓
                </p>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-12">
                <ButtonOption icon={<PlusCircle size={30} />} label="Tambah" color="emerald" />
                <ButtonOption icon={<BookOpen size={30} />} label="Jurnal" color="emerald" />
                <ButtonOption icon={<CalendarDays size={30} />} label="Kalender" color="emerald" />
            </div>
            <div>
                <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                    📅 <span>Jurnal Terbaru</span>
                </h2>
                <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className="group bg-white rounded-xl p-4 shadow-md hover:shadow-lg hover:-translate-y-1 transition transform flex justify-between items-start border border-gray-100"
                        >
                            <div>
                                <h3 className="font-semibold text-gray-800 group-hover:text-emerald-600 transition">
                                    Catatan Hari ke-{i}
                                </h3>
                                <p className="text-sm text-gray-500 mt-1 line-clamp-1">
                                    “Hari ini aku belajar sesuatu yang keren banget...”
                                </p>
                            </div>
                            <span className="text-xs text-gray-400 mt-1">10 Okt 2025</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function ButtonOption({ icon, label, color }) {
    return (
        <button
            className={`flex flex-col items-center bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition transform hover:-translate-y-1 active:scale-95`}
        >
            <div
                className={`text-${color}-600 bg-${color}-50 rounded-full p-2 mb-1 flex items-center justify-center`}
            >
                {icon}
            </div>
            <span className="text-sm font-medium text-gray-700">{label}</span>
        </button>
    );
}
