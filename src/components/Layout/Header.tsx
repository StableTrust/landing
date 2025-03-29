import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitch from "./LanguageSwitch";
// 移除原有的 import
// import Logo from "../../../public/logo.svg";

type SubMenuItem = {
  name: string;
  path: string;
  translationKey: string;
};

type MenuItem = {
  name: string;
  path: string;
  translationKey: string;
  submenu?: SubMenuItem[];
};

const menuItems: MenuItem[] = [
  { name: "首页", path: "/", translationKey: "nav.home" },
  {
    name: "解决方案",
    path: "/solutions",
    translationKey: "nav.solutions",
    // submenu: [
    //   { name: "资产数字化", path: "/solutions", translationKey: "nav.solutions" },
    //   { name: "核心技术", path: "/solutions/technology", translationKey: "nav.solutions.technology" },
    //   { name: "产品功能", path: "/solutions/features", translationKey: "nav.solutions.features" }
    // ]
  },
  // { name: "案例研究", path: "/case-studies", translationKey: "nav.case-studies" },
  // { name: "资质认证", path: "/certifications", translationKey: "nav.certifications" },
  {
    name: "关于我们",
    path: "/about",
    translationKey: "nav.about",
    // submenu: [
    //   { name: "公司简介", path: "/about", translationKey: "nav.about.company" },
    //   { name: "团队介绍", path: "/about/team", translationKey: "nav.about.team" },
    //   { name: "企业能力", path: "/about/capabilities", translationKey: "nav.about.capabilities" }
    // ]
  },
  // { name: "联系我们", path: "/contact", translationKey: "nav.contact" }
];

const Header = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setActiveSubmenu(null);
    }
  };

  const toggleSubmenu = (name: string) => {
    if (activeSubmenu === name) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(name);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/logo.svg" alt="StableTrust Logo" className="h-10 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className="font-montserrat text-secondary hover:text-primary transition-colors duration-200 flex items-center"
                >
                  {t(item.translationKey)}
                  {item.submenu && <ChevronDown className="ml-1 w-4 h-4" />}
                </Link>

                {item.submenu && (
                  <div className="absolute left-0 mt-1 w-48 bg-white shadow-lg rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block px-4 py-2 text-sm text-secondary hover:bg-muted hover:text-primary transition-colors duration-200"
                      >
                        {t(subItem.translationKey)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-2">
            <LanguageSwitch />
            <Button variant="default" className="bg-primary hover:bg-primary/90 text-white">
              <Link to="/contact" className="text-white">
                {t("nav.contact")}
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            {/* <LanguageSwitch /> */}
            <button onClick={toggleMenu} className="text-secondary ml-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto py-4">
            {menuItems.map((item) => (
              <div key={item.name} className="mb-2">
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className="w-full flex justify-between items-center py-2 text-secondary hover:text-primary transition-colors"
                    >
                      {t(item.translationKey)}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${activeSubmenu === item.name ? "rotate-180" : ""}`}
                      />
                    </button>

                    {activeSubmenu === item.name && (
                      <div className="pl-4 mt-1 border-l-2 border-muted">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block py-2 text-sm text-secondary hover:text-primary transition-colors"
                            onClick={toggleMenu}
                          >
                            {t(subItem.translationKey)}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="block py-2 text-secondary hover:text-primary transition-colors"
                    onClick={toggleMenu}
                  >
                    {t(item.translationKey)}
                  </Link>
                )}
              </div>
            ))}

            <div className="mt-4">
              <Button
                variant="default"
                className="w-full bg-primary hover:bg-primary/90 text-white"
              >
                <Link to="/contact" className="text-white">
                  {t("nav.contact")}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
