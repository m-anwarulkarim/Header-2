// AB Seeds company

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  FaStore,
  FaShoppingCart,
  FaBullhorn,
  FaBell,
  FaUser,
  FaSearch,
  FaCommentDots,
  FaThumbsUp,
  FaHeart,
} from "react-icons/fa";

export default function Header() {
  return (
    <header className="w-full border-b bg-white shadow-sm">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-3 gap-4">
        {/* Left Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2 text-green-600">
            <div className="flex items-center gap-1 border border-green-600 rounded-full p-2">
              <img
                src="/images/logo.png"
                alt="it's comming soon"
                className="h-6 w-6"
              />
            </div>
            <span className="text-2xl font-bold">Ab Seed Company</span>
          </div>
        </Link>

        {/* Middle Menu */}
        <nav className="flex flex-wrap justify-center gap-6 text-center">
          <Link
            to="/"
            className="flex flex-col items-center text-sm text-gray-700 hover:text-green-600"
          >
            <div className="relative flex items-center justify-center w-10 h-10">
              {/* বড় comment bubble */}
              <div className="absolute top-0 left-1 w-6 h-6 flex items-center justify-center rounded-full border border-green-600 text-green-600 bg-white">
                <FaCommentDots className="w-3 h-3" />
              </div>

              {/* নিচে thumbs up bubble */}
              <div className="absolute bottom-0 left-0 w-5 h-5 flex items-center justify-center rounded-full border border-green-600 text-green-600 bg-white">
                <FaThumbsUp className="w-3 h-3" />
              </div>

              {/* ডানপাশে heart bubble */}
              <div className="absolute bottom-0 right-0 w-5 h-5 flex items-center justify-center rounded-full border border-green-600 text-green-600 bg-white">
                <FaHeart className="w-3 h-3" />
              </div>
            </div>
          </Link>
          {/*  */}
          <Link
            to="/all"
            className="flex flex-col items-center text-sm text-gray-700 hover:text-green-600"
          >
            <FaStore className="h-6 w-6" />
            <span>সকল পণ্য</span>
          </Link>

          <Link
            to="/cart"
            className="flex flex-col items-center text-sm text-gray-700 hover:text-green-600"
          >
            <FaShoppingCart className="h-6 w-6" />
            <span>অর্ডার কার্ট</span>
          </Link>

          <Link
            to="/offers"
            className="flex flex-col items-center text-sm text-gray-700 hover:text-green-600"
          >
            <FaBullhorn className="h-6 w-6" />
            <span>নতুন অফার</span>
          </Link>

          <Link
            to="/notifications"
            className="flex flex-col items-center text-sm text-gray-700 hover:text-green-600"
          >
            <FaBell className="h-6 w-6" />
            <span>নোটিফিকেশন</span>
          </Link>

          <Link
            to="/profile"
            className="flex flex-col items-center text-sm text-gray-700 hover:text-green-600"
          >
            <FaUser className="h-6 w-6" />
            <span>প্রোফাইল</span>
          </Link>
        </nav>

        {/* Right Side (Search & Help) */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 rounded-full border px-3 py-1">
            <FaSearch className="h-5 w-5 text-gray-500" />
            <Input
              placeholder="খুঁজুন..."
              className="border-0 focus:ring-0 w-28 sm:w-48"
            />
          </div>

          <Button
            variant="outline"
            className="rounded-full flex items-center gap-1"
          >
            <FaCommentDots className="h-5 w-5" />
            সাহায্য...
          </Button>
        </div>
      </div>
    </header>
  );
}
