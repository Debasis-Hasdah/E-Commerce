import { Mail, Lock, LogIn } from "lucide-react";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    // Backend integration later
    console.log({ email, password });
    alert("Login clicked (backend coming soon)");
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
            <Mail className="w-4 h-4 text-gray-500" />
            <input
              type="email"
              className="w-full p-2 outline-none"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block mb-1 text-sm font-medium">
            Password
          </label>
          <div className="flex items-center border rounded px-3">
            <Lock className="w-4 h-4 text-gray-500" />
            <input
              type="password"
              className="w-full p-2 outline-none"
              placeholder="••••••••"
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
        
      </form>
    </div>
  );
}
