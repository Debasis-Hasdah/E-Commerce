import { Link } from "react-router-dom";
import { ShoppingCart, LogIn, Store } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      
      {/* Logo */}
      <Link
        to="/"
        className="flex items-center gap-2 text-xl font-bold"
      >
        <Store className="w-6 h-6 text-yellow-400" />
        MyShop
      </Link>

      {/* Links */}
      <div className="flex items-center gap-6">
        <Link
          to="/products"
          className="hover:text-gray-300"
        >
          Products
        </Link>

        <Link
          to="/cart"
          className="flex items-center gap-1 hover:text-gray-300"
        >
          <ShoppingCart className="w-5 h-5" />
          Cart
        </Link>

        <Link
          to="/login"
          className="flex items-center gap-1 hover:text-gray-300"
        >
          <LogIn className="w-5 h-5" />
          Login
        </Link>
      </div>
    </nav>
  );
}
