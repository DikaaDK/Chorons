import React, { useState } from "react";
import axios from "axios";
import { BookOpen } from "lucide-react";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccessMessage("");

        try {
            const res = await axios.post("http://127.0.0.1:8000/api/register", {
                name: name,
                email: email,
                password: password,
                password_confirmation: confirmPassword,
            });

            console.log("Register Success", res.data);
            localStorage.setItem("token", res.data.token);

            setSuccessMessage("Pendaftaran berhasil! Kamu akan diarahkan ke halaman Login ...");
            
            setTimeout(() => {
                window.location.href = "/";
            }, 2000);

        } catch (err) {
            console.error("Register Error", err.response?.data);
            setError(err.response?.data?.errors || { general: ["Terjadi kesalahan"] });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-600 via-emerald-500 to-emerald-400 px-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 relative">
                
                {successMessage && (
                    <div className="mb-4 p-3 rounded-lg bg-emerald-100 text-emerald-700 text-sm font-medium text-center">
                        {successMessage}
                    </div>
                )}

                {error?.general && (
                    <div className="mb-4 p-3 rounded-lg bg-red-100 text-red-600 text-sm font-medium text-center">
                        {error.general[0]}
                    </div>
                )}

                <div className="text-center mb-8">
                    <div className="flex justify-center mb-3">
                        <div className="bg-emerald-100 p-3 rounded-full shadow-lg">
                            <BookOpen className="w-8 h-8 text-emerald-600" />
                        </div>
                    </div>
                    <h1 className="text-2xl font-bold text-emerald-700">
                        Buat Akun Baru
                    </h1>
                    <p className="text-gray-500 text-sm">
                        Daftar untuk mulai menulis jurnal harianmu
                    </p>
                </div>

                <form onSubmit={handleRegister} className="space-y-5">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Nama
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Nama lengkap"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                        />
                        {error?.name && <p className="text-red-500 text-sm">{error.name[0]}</p>}
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="email@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                        />
                        {error?.email && <p className="text-red-500 text-sm">{error.email[0]}</p>}
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                        />
                        {error?.password && <p className="text-red-500 text-sm">{error.password[0]}</p>}
                    </div>

                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                            Konfirmasi Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            placeholder="••••••••"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-emerald-600 text-white py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-all shadow-md active:scale-95"
                    >
                        Daftar
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-500">
                    Sudah punya akun?{" "}
                    <a href="/" className="text-emerald-600 font-semibold hover:underline">
                        Masuk
                    </a>
                </div>
            </div>
        </div>
    );
}
