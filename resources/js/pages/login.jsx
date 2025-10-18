import React, { useState } from "react";
import axios from "axios";
import { BookOpen } from "lucide-react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            const response = await axios.post("http://127.0.0.1:8000/api/login", {
                email,
                password,
            });

            const { user, token } = response.data;

            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));

            window.location.href = "/home";
        } catch (err) {
            if (err.response && err.response.status === 401) {
                setError("Email atau password salah.");
            } else if (err.response && err.response.data.errors) {
                setError("Lengkapi semua form dengan benar.");
            } else {
                setError("Terjadi kesalahan server.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-600 via-emerald-500 to-emerald-400 px-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 relative">
                <div className="text-center mb-8">
                    <div className="flex justify-center mb-3">
                        <div className="bg-emerald-100 p-3 rounded-full shadow-lg">
                            <BookOpen className="w-8 h-8 text-emerald-600" />
                        </div>
                    </div>
                    <h1 className="text-2xl font-bold text-emerald-700">
                        Selamat Datang
                    </h1>
                    <p className="text-gray-500 text-sm">
                        Masuk untuk mulai menulis jurnal harianmu
                    </p>
                </div>

                <form className="space-y-5" onSubmit={handleLogin}>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="email@gmail.com"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                        />
                    </div>

                    {error && (
                        <div className="text-red-500 text-sm text-center">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full bg-emerald-600 text-white py-2 rounded-lg font-semibold transition-all shadow-md active:scale-95 ${
                            loading ? "opacity-60 cursor-not-allowed" : "hover:bg-emerald-700"
                        }`}
                    >
                        {loading ? "Loading..." : "Masuk"}
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-500">
                    Belum punya akun?{" "}
                    <a
                        href="/register"
                        className="text-emerald-600 font-semibold hover:underline"
                    >
                        Daftar
                    </a>
                </div>
            </div>
        </div>
    );
}
