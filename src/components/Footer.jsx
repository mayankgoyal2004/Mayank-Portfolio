import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 pt-10 pb-4">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 pb-8 border-b border-gray-700">
          
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold text-blue-500 mb-2">Mayank Portfolio</h1>
            <p className="max-w-sm text-gray-400">
              Creating beautiful, responsive, and user-friendly web experiences
            </p>
          </div>

         
          <div className="flex gap-4">
            <a
              href="https://github.com/mayankgoyal2004"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full"
            >
              <Github className="text-white" size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/mayank-goyal-634a662a1/
              "target="_black"
              className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full"
            >
              <Linkedin className="text-white" size={18} />
            </a>
            <a
              href="#"
              className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full"
            >
              <Twitter className="text-white" size={18} />
            </a>
            <a
              href="mailto:2004mayankgoyal@gmail.com"
              className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full"
            >
              <Mail className="text-white" size={18} />
            </a>
          </div>
        </div>

       
        <div className="flex flex-col md:flex-row justify-between items-center mt-4 text-sm text-gray-400 gap-2">
          <p>© {new Date().getFullYear()} Mayank portfolio. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://www.termsfeed.com/live/35a633c0-08d8-434a-a545-051f2984649b" target='_blank' className="hover:text-white transition">Privacy Policy</a>
            <a href="https://www.freeprivacypolicy.com/live/1c50f628-3b8c-44fe-9b9f-f1f0e6b64f92" className="hover:text-white transition" target="_blank">Terms of Service</a>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
