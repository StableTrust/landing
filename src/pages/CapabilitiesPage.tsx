
import PageHeader from "@/components/Layout/PageHeader";
import { useEffect } from "react";

const CapabilitiesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeader 
        title="企业能力" 
        subtitle="StableTrust的核心技术与服务能力" 
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-montserrat mb-4">页面建设中</h2>
          <p className="text-lg text-gray-700 font-opensans mb-8">
            企业能力页面正在建设中，敬请期待...
          </p>
          <a 
            href="/" 
            className="inline-block px-6 py-3 bg-primary text-white rounded-md font-semibold hover:bg-primary/90 transition-colors"
          >
            返回首页
          </a>
        </div>
      </section>
    </>
  );
};

export default CapabilitiesPage;
