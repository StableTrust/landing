import PageHeader from "@/components/Layout/PageHeader";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, ShieldCheck, BarChart3, Globe, FileText } from "lucide-react";

const SolutionsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeader
        title="解决方案"
        subtitle="通过区块链技术，实现实体资产的数字化和代币化"
        backgroundImage="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2000&auto=format"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold font-montserrat mb-4">全方位的 RWA 区块链解决方案</h2>
            <p className="text-lg text-gray-700 font-opensans">
              StableTrust
              为各行业客户提供完整的实体资产数字化解决方案，从资产上链、代币发行到交易管理，
              全流程覆盖，安全合规
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold font-montserrat mb-4">资产数字化</h3>
              <p className="text-lg text-gray-700 font-opensans mb-6">
                我们的资产数字化将传统资产转化为区块链上的数字代币，实现资产的透明化和高效管理。
                整个流程严格遵循监管要求，确保合法合规。
              </p>

              <ul className="space-y-3 mb-6">
                {[
                  "资产评估与尽职调查",
                  "法律合规审核",
                  "智能合约开发与审计",
                  "资产上链与代币发行",
                  "二级市场流通支持",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700 font-opensans">{item}</span>
                  </li>
                ))}
              </ul>

              {/* <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                <Link to="/solutions/technology">了解技术细节</Link>
              </Button> */}
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format"
                alt="资产数字化"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format"
                alt="代币发行与管理"
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold font-montserrat mb-4">代币发行与管理</h3>
              <p className="text-lg text-gray-700 font-opensans mb-6">
                我们提供完整的代币生命周期管理解决方案，包括发行、交易、追踪和清算。通过智能合约实现自动化管理，
                提高效率的同时降低运营成本。
              </p>

              <ul className="space-y-3 mb-6">
                {[
                  "多类型代币标准支持",
                  "代币发行与分配",
                  "投资者身份验证",
                  "股息分红自动分配",
                  "二级市场交易支持",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700 font-opensans">{item}</span>
                  </li>
                ))}
              </ul>

              {/* <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                <Link to="/solutions/features">了解产品功能</Link>
              </Button> */}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold font-montserrat mb-4">合规与监管</h3>
              <p className="text-lg text-gray-700 font-opensans mb-6">
                合规是数字资产解决方案的核心。我们的系统内置合规框架，满足全球各地区的监管要求，
                确保资产合规流通。
              </p>

              <ul className="space-y-3 mb-6">
                {[
                  "KYC/AML 集成方案",
                  "监管报告自动生成",
                  "合规审计跟踪",
                  "跨境资产流通合规支持",
                  "监管沙盒测试环境",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700 font-opensans">{item}</span>
                  </li>
                ))}
              </ul>

              {/* <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                <Link to="/case-studies">查看成功案例</Link>
              </Button> */}
              {/* <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                <Link to="/solutions/compliance">了解合规与监管</Link>
              </Button> */}
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1200&auto=format"
                alt="合规与监管"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold font-montserrat mb-4">我们的技术优势</h2>
            <p className="text-lg text-gray-700 font-opensans">
              StableTrust 采用领先的区块链技术架构，为客户提供安全、高效、可扩展的 RWA 解决方案
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">
                <ShieldCheck className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold font-montserrat mb-3">企业级安全</h3>
              <p className="text-gray-600 font-opensans">
                多层加密机制与权限控制，确保资产和数据安全
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">
                <BarChart3 className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold font-montserrat mb-3">高性能架构</h3>
              <p className="text-gray-600 font-opensans">支持高并发交易处理，满足企业级应用需求</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">
                <Globe className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold font-montserrat mb-3">跨链互操作</h3>
              <p className="text-gray-600 font-opensans">
                支持多链部署与跨链资产转移，最大化生态兼容性
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">
                <FileText className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold font-montserrat mb-3">智能合约审计</h3>
              <p className="text-gray-600 font-opensans">
                严格的智能合约开发与审计流程，确保代码安全
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold font-montserrat mb-4">适用行业</h2>
            <p className="text-lg text-gray-700 font-opensans">
              我们的 RWA 区块链解决方案可广泛应用于多个行业，满足不同类型实体资产的数字化需求
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "房地产",
                description: "将房地产资产分割为数字代币，降低投资门槛，提高流动性",
              },
              {
                title: "艺术品",
                description: "艺术品所有权代币化，实现部分所有权与价值共享",
              },
              {
                title: "大宗商品",
                description: "实现大宗商品的溯源与交易全流程数字化，提高透明度",
              },
              {
                title: "供应链金融",
                description: "基于实体资产的供应链金融解决方案，优化资金流转",
              },
              {
                title: "碳资产",
                description: "碳排放权的数字化管理与交易，促进绿色经济发展",
              },
              {
                title: "私募股权",
                description: "私募股权投资的数字化管理，提高透明度与流动性",
              },
            ].map((industry, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold font-montserrat mb-3">{industry.title}</h3>
                <p className="text-gray-600 font-opensans mb-4">{industry.description}</p>
                {/* <Link
                  to="/case-studies"
                  className="text-primary hover:text-primary/80 font-semibold flex items-center transition-colors font-montserrat"
                >
                  查看相关案例 <ArrowRight className="ml-2 h-4 w-4" />
                </Link> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-montserrat mb-6">准备开启您的资产数字化之旅？</h2>
          <p className="text-xl font-opensans mb-8 max-w-3xl mx-auto">
            我们的专业团队随时准备为您提供定制化 RWA 区块链解决方案
          </p>
          <Button asChild className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg">
            <Link to="/contact">联系我们</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default SolutionsPage;
