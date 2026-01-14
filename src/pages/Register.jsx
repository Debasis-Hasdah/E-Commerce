import { Mail, Lock, UserPlus, User } from "lucide-react";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Frontend validation
    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await axios.post("http://localhost:8080/auth/register", {
        name,
        email,
        password,
      });

      setSuccess("Registration successful. You can login now 🎉");

      // clear form
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      setError(err.response?.data || "Registration failed");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md border rounded-lg p-6 shadow"
      >
        <h1 className="text-2xl font-bold text-center mb-6">
          Register
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

        {/* ERROR */}
        {error && (
          <p className="mt-3 text-sm text-red-600 text-center">
            {error}
          </p>
        )}

        {/* SUCCESS */}
        {success && (
          <p className="mt-3 text-sm text-green-600 text-center">
            {success}
          </p>
        )}
      </form>
    </div>
  );
}
