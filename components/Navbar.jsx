export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 w-full">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">URL Shortener</div>
        {/* GitHub Button */}
        <a
          href="https://github.com/your-username/your-repo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:underline"
        >
          GitHub
        </a>
      </div>
    </nav>
  );
}
