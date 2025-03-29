
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Twitter } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <h3 className="text-xl font-bold font-montserrat mb-4">StableTrust</h3>
            <p className="font-opensans text-gray-300 mb-4">
              全球领先的RWA区块链解决方案提供商，致力于通过区块链技术实现实物资产的数字化和通证化。
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold font-montserrat mb-4">快速链接</h3>
            <ul className="space-y-2 font-opensans">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors">{t('nav.home')}</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition-colors">{t('nav.about')}</Link>
              </li>
              <li>
                <Link to="/solutions" className="text-gray-300 hover:text-primary transition-colors">{t('nav.solutions')}</Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-300 hover:text-primary transition-colors">{t('nav.case-studies')}</Link>
              </li>
              <li>
                <Link to="/certifications" className="text-gray-300 hover:text-primary transition-colors">{t('nav.certifications')}</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">{t('nav.contact')}</Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-xl font-bold font-montserrat mb-4">解决方案</h3>
            <ul className="space-y-2 font-opensans">
              <li>
                <Link to="/solutions/technology" className="text-gray-300 hover:text-primary transition-colors">{t('nav.solutions.technology')}</Link>
              </li>
              <li>
                <Link to="/solutions/features" className="text-gray-300 hover:text-primary transition-colors">{t('nav.solutions.features')}</Link>
              </li>
              <li>
                <Link to="/solutions" className="text-gray-300 hover:text-primary transition-colors">资产数字化</Link>
              </li>
              <li>
                <Link to="/solutions" className="text-gray-300 hover:text-primary transition-colors">通证发行与管理</Link>
              </li>
              <li>
                <Link to="/solutions" className="text-gray-300 hover:text-primary transition-colors">合规与监管</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold font-montserrat mb-4">{t('nav.contact')}</h3>
            <ul className="space-y-3 font-opensans">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">上海市浦东新区张江高科技园区</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 flex-shrink-0" size={18} />
                <span className="text-gray-300">+86 21 1234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 flex-shrink-0" size={18} />
                <a href="mailto:contact@stabletrust.com" className="text-gray-300 hover:text-primary transition-colors">
                  contact@stabletrust.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center font-opensans">
          <p className="text-gray-400">© {new Date().getFullYear()} StableTrust. 保留所有权利。</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
