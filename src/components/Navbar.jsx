import { Link } from "react-router-dom";
import { ShoppingCart, LogIn, Store } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cartItems } = useCart();

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

      {/* Right Links */}
      <div className="flex items-center gap-6">
        {/* Products */}
        <Link
          to="/products"
          className="hover:text-gray-300"
        >
          Products
        </Link>

        {/* Cart with badge */}
        <Link
          to="/cart"
          className="relative flex items-center gap-1 hover:text-gray-300"
        >
          <ShoppingCart className="w-5 h-5" />
          Cart

          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold rounded-full px-2">
              {cartItems.length}
            </span>
          )}
        </Link>

        {/* Login */}
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
