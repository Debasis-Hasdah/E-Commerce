import { Mail, Lock, LogIn } from "lucide-react";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    try {
      // ✅ CALL BACKEND LOGIN API
      const res = await axios.post(
        "http://localhost:8080/auth/login",
        {
          email,
          password,
        }
      );

      // ✅ STORE JWT TOKEN
      localStorage.setItem("token", res.data.token);

      alert("Login successful 🎉");
    } catch (err) {
      setError(err.response?.data || "Login failed");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md border rounded-lg p-6 shadow"
      >
        <h1 className="text-2xl font-bold text-center mb-6">
          Login
        </h1>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">
            Email
          </label>
          <div className="flex items-center border rounded px-3">
            <Mail className="w-4 h-4 text-gray-500 mr-2" />
            <input
              type="email"
              className="flex-1 p-2 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">
            Password
          </label>
          <div className="flex items-center border rounded px-3">
            <Lock className="w-4 h-4 text-gray-500 mr-2" />
            <input
              type="password"
              className="flex-1 p-2 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          <LogIn className="w-4 h-4" />
          Login
        </button>

        {/* Error message */}
        {error && (
          <p className="mt-3 text-sm text-red-600 text-center">
            {error}
          </p>
        )}
      </form>
    </div>
  );
}
