import PageHeader from "@/components/Layout/PageHeader";
import { useEffect } from "react";

const TermsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeader title="服务条款" subtitle="全球领先的 RWA 平台" />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-montserrat mb-4">页面建设中</h2>
          <p className="text-lg text-gray-700 font-opensans mb-8">
            服务条款页面正在建设中，敬请期待...
          </p>
          <a
            href="/"
            className="inline-block px-6 py-3 bg-primary text-white rounded-md font-semibold hover:bg-primary/90 transition-colors"
          >
            返回主页
          </a>
        </div>
      </section>
    </>
  );
};

export default TermsPage;
