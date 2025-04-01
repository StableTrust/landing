import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md px-4">
        <div className="mb-8">
          <h1 className="text-8xl font-bold font-montserrat text-primary mb-2">404</h1>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <h2 className="text-3xl font-bold font-montserrat mb-4">页面未找到</h2>
          <p className="text-lg text-gray-600 font-opensans mb-8">
            很抱歉，您访问的页面不存在或已被移除。请返回首页或浏览其他内容。
          </p>
        </div>

        <div className="space-y-4">
          <a
            href="/"
            className="inline-block w-full px-6 py-3 bg-primary text-white rounded-md font-semibold hover:bg-primary/90 transition-colors"
          >
            返回首页
          </a>
          {/* <a 
            href="/solutions" 
            className="inline-block w-full px-6 py-3 border border-gray-300 text-gray-700 rounded-md font-semibold hover:bg-gray-50 transition-colors"
          >
            浏览解决方案
          </a> */}
        </div>

        <div className="mt-12 text-gray-500 font-opensans">
          <p>
            需要帮助？请
            <a href="/contact" className="text-primary hover:underline">
              联系我们
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
