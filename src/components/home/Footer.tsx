import { FaYoutube, FaInstagram, FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0A051C] text-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Klik Games Column */}
          <div>
            <h3 className="text-white font-bold mb-4">Klik Games</h3>
            <p className="text-sm leading-relaxed">
              The best NFT marketplace website in the world and feel your experience in selling or buy our work
            </p>
          </div>

          {/* About Column */}
          <div>
            <h3 className="text-white font-bold mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Product</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Resource</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Term & Condition</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partner With Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy & Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>+012 3456789</li>
              <li>example@gmail.com</li>
              <li className="flex space-x-4 pt-2">
                <a href="#" className="hover:text-white transition-colors">
                  <FaYoutube className="w-5 h-5" />
                  <span className="sr-only">YouTube</span>
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <FaDiscord className="w-5 h-5" />
                  <span className="sr-only">Discord</span>
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <FaInstagram className="w-5 h-5" />
                  <span className="sr-only">Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 mt-8 border-t border-gray-800 text-sm">
          Created by{' '}
          <span className="text-white">Klik Games</span>
          {' '}| All Right Reserved!
        </div>
      </div>
    </footer>
  )
}