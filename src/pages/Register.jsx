import { User, Mail, Lock, UserPlus } from "lucide-react";
import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Success (backend later)
    alert("Registration successful");
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md border rounded-lg p-6 shadow"
      >
        <h1 className="text-2xl font-bold text-center mb-6">
          Create Account
        </h1>

        {/* Name */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">
            Name
          </label>
          <div className="flex items-center border rounded px-3">
            <User className="w-4 h-4 text-gray-500 mr-2" />
            <input
              type="text"
              className="flex-1 p-2 outline-none"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

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
              placeholder="you@example.com"
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
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">
            Confirm Password
          </label>
          <div className="flex items-center border rounded px-3">
            <Lock className="w-4 h-4 text-gray-500 mr-2" />
            <input
              type="password"
              className="flex-1 p-2 outline-none"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          <UserPlus className="w-4 h-4" />
          Register
        </button>

        {/* Error Message */}
        {error && (
          <p className="mt-3 text-sm text-red-600 text-center">
            {error}
          </p>
        )}
      </form>
    </div>
  );
}
