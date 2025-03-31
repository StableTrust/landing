import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Twitter, Github } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-5 px-10">
        <div className="pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {/* Company Information */}
          <div>
            <div className="mb-3">
              <Link to="/" className="inline-block">
                <img
                  src="/logo.png"
                  alt="StableTrust"
                  className="h-10 hover:opacity-80 transition-opacity"
                />
              </Link>
            </div>
            <p className="font-opensans text-gray-300 mb-4 text-sm">
              全球领先的 RWA 平台，开启现实世界资产投资新时代
            </p>
            {/* <p className="font-opensans text-gray-300 mb-3 text-sm">
              开启现实世界资产投资新时代
            </p> */}
            <div className="flex space-x-6 mt-5">
              <a
                href="https://x.com/StableTrust"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
              >
                <Twitter size={20} />
              </a>
              {/* <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a> */}
              <a
                href="https://t.me/iStableTrust"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-send"
                >
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
              </a>
              <a
                href="https://github.com/StableTrust"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-2">
            {/* <h3 className="text-xl font-bold font-montserrat mb-3">快速链接</h3>
            <ul className="space-y-1.5 font-opensans">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  {t("nav.solutions")}
                </Link>
              </li>
              <li>
                <Link
                  to="/case-studies"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  {t("nav.case-studies")}
                </Link>
              </li>
              <li>
                <Link
                  to="/certifications"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  {t("nav.certifications")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul> */}
          </div>

          {/* Solutions */}
          <div className="lg:pl-2">
            <h3 className="text-xl font-bold font-montserrat mb-3">{t("nav.pages")}</h3>
            <ul className="space-y-1.5 font-opensans">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  {t("nav.solutions.tokenization")}
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions/technology"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  {t("nav.solutions.technology")}
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions/features"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  {t("nav.solutions.features")}
                </Link>
              </li>

              {/* <li>
                <Link
                  to="/solutions"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  代币发行与管理
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  合规与监管
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:pl-2">
            <h3 className="text-xl font-bold font-montserrat mb-4">{t("nav.contact")}</h3>
            <ul className="space-y-3 font-opensans">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">三亚市中央商务区</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 flex-shrink-0" size={18} />
                <span className="text-gray-300">+86-16666816820</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 flex-shrink-0" size={18} />
                <a
                  href="mailto:contact@stabletrust.com"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  contact@stabletrust.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-14 pt-4 text-center font-opensans">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-1 md:space-y-1">
            <p className="text-gray-400 text-xs">
              Copyright © {new Date().getFullYear()} StableTrust. All Rights Reserved.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/disclaimer"
                className="text-gray-400 text-xs hover:text-primary transition-colors"
              >
                免责声明
              </Link>
              <Link
                to="/risk"
                className="text-gray-400 text-xs hover:text-primary transition-colors"
              >
                风险披露
              </Link>
              <Link
                to="/privacy"
                className="text-gray-400 text-xs hover:text-primary transition-colors"
              >
                隐私政策
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 text-xs hover:text-primary transition-colors"
              >
                服务条款
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
