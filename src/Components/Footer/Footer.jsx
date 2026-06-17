import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t bg-white mt-10">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

        {/* Left */}
        <div className="flex items-center gap-1">
          <img src="/img/GitHub-logo.png" alt="logo" className="h-7 w-9 rounded"/>
          <span className="text-sm font-medium text-gray-700"> {new Date().getFullYear()} GitHub Users App </span>
        </div>

        {/* Center links */}
        <div className="flex gap-4 text-sm text-gray-100">
          <Link to="/home" className=" text-black !no-underline">Terms</Link>
          <Link to="/home" className="text-black !no-underline">Privacy</Link>
          <Link to="/home" className="text-black !no-underline">Docs</Link>
          <Link to="/Contacts" className="text-black !no-underline">Contact</Link>
        </div>

        {/* Right */}
        <p className="text-sm text-gray-600">
          Built with React + Tailwind
        </p>
      </div>
    </footer>
  );
}