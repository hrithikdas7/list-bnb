import { SocialMediaIcons } from "../Icons/Icons";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <Logo />
        </div>
        <div className="text-sm text-gray-400 text-center">
          © 2024 All Rights Reserved
        </div>
        <SocialMediaIcons />
      </div>
    </footer>
  );
};

export default Footer;
