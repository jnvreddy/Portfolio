import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6"; // X (Twitter)

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col items-center justify-center">
        {/* Social Links */}
        <div className="flex space-x-6 mb-4">
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition transform hover:scale-110 duration-300"
          >
            <FaLinkedin size={28} />
          </a>

          {/* LeetCode (custom SVG) */}
          <a
            href="https://leetcode.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition transform hover:scale-110 duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              fill="currentColor"
              className="w-7 h-7"
            >
              <path d="M135.4 33.2a12 12 0 0 0-17-1.2L59.6 84.5a12 12 0 1 0 15.8 18l51.7-45.3 34.9 40.4H120a12 12 0 0 0 0 24h68a12 12 0 0 0 8.9-20.1l-61.5-68.3zM208 148h-88a12 12 0 0 0 0 24h88a12 12 0 0 0 0-24z" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition transform hover:scale-110 duration-300"
          >
            <FaGithub size={28} />
          </a>

          {/* X (Twitter) */}
          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition transform hover:scale-110 duration-300"
          >
            <FaXTwitter size={28} />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
