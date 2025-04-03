import PageHeader from "@/components/Layout/PageHeader";
import { useEffect } from "react";
import { Check, ArrowRight } from "lucide-react";

const FeaturesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featureCategories = [
    {
      title: "资产代币化",
      description: "将实体资产转化为区块链上的数字代币",
      features: [
        "多类型资产支持（房地产、大宗商品、艺术品等）",
        "分数化所有权结构",
        "资产估值与定价工具",
        "自动化合规审核流程",
        "资产生命周期管理",
      ],
    },
    {
      title: "交易与流通",
      description: "安全高效的资产交易与流通机制",
      features: [
        "二级市场交易平台",
        "流动性池与做市商机制",
        "跨链资产互操作",
        "交易匹配引擎",
        "实时结算系统",
      ],
    },
    {
      title: "资产管理",
      description: "全面的数字资产管理工具",
      features: [
        "资产组合分析与管理",
        "收益分配与再投资",
        "风险评估与监控",
        "自动化报表生成",
        "资产绩效追踪",
      ],
    },
    {
      title: "合规与监管",
      description: "内置合规框架确保监管要求",
      features: [
        "KYC/AML 集成",
        "投资者资质验证",
        "监管报告自动生成",
        "合规审计追踪",
        "跨境合规支持",
      ],
    },
  ];

  const useCases = [
    {
      title: "房地产代币化",
      description: "将商业地产和住宅项目转化为数字代币，实现分数化所有权和流动性提升",
      benefits: ["降低投资门槛", "提高资产流动性", "简化跨境投资", "自动化收益分配"],
    },
    {
      title: "大宗商品交易",
      description: "为大宗商品提供基于区块链的交易和结算平台，提高效率并降低中间成本",
      benefits: ["减少中间环节", "提高交易透明度", "降低结算风险", "优化供应链管理"],
    },
    {
      title: "私募股权代币化",
      description: "将私募股权投资转化为代币，提供更灵活的投资退出机制和更广泛的投资者基础",
      benefits: ["增加流动性选项", "扩大投资者范围", "简化股权管理", "提高市场估值透明度"],
    },
  ];

  return (
    <>
      <PageHeader title="产品功能" subtitle="StableTrust RWA 区块链解决方案的核心功能" />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold font-montserrat mb-6">全方位 RWA 解决方案</h2>
            <p className="text-xl text-gray-700 font-opensans">
              StableTrust
              提供端到端的实体资产数字化平台，从资产上链、交易流通到管理与合规，一站式满足机构和个人投资者需求
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {featureCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-bold font-montserrat mb-3 text-primary">
                  {category.title}
                </h3>
                <p className="text-gray-700 font-opensans mb-6">{category.description}</p>
                <ul className="space-y-3">
                  {category.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-opensans">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-montserrat mb-4">平台核心优势</h2>
              <p className="text-xl text-gray-700 font-opensans max-w-3xl mx-auto">
                StableTrust 平台设计注重安全性、可扩展性和用户体验，为实体资产数字化提供全面支持
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-xl">01</span>
                </div>
                <h3 className="text-xl font-bold font-montserrat mb-3">安全可靠</h3>
                <p className="text-gray-700 font-opensans">
                  多层安全架构和审计机制，保障资产安全和交易可靠性，符合金融级安全标准
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-xl">02</span>
                </div>
                <h3 className="text-xl font-bold font-montserrat mb-3">高度可定制</h3>
                <p className="text-gray-700 font-opensans">
                  模块化设计支持根据不同行业和资产类型的需求进行定制，满足多样化业务场景
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-xl">03</span>
                </div>
                <h3 className="text-xl font-bold font-montserrat mb-3">合规优先</h3>
                <p className="text-gray-700 font-opensans">
                  内置合规框架，支持多国监管要求，降低合规成本，提高市场准入效率
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-xl">04</span>
                </div>
                <h3 className="text-xl font-bold font-montserrat mb-3">高性能架构</h3>
                <p className="text-gray-700 font-opensans">
                  高吞吐量交易处理能力，支持大规模商业应用，满足机构级用户需求
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-xl">05</span>
                </div>
                <h3 className="text-xl font-bold font-montserrat mb-3">互操作性</h3>
                <p className="text-gray-700 font-opensans">
                  支持多链环境和主流区块链平台，实现资产跨链流通和生态互联
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-xl">06</span>
                </div>
                <h3 className="text-xl font-bold font-montserrat mb-3">用户友好</h3>
                <p className="text-gray-700 font-opensans">
                  直观的用户界面和完善的开发者工具，降低使用门槛，提升用户体验
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-montserrat mb-4">应用场景</h2>
              <p className="text-xl text-gray-700 font-opensans max-w-3xl mx-auto">
                StableTrust 平台适用于多种实体资产数字化场景，为不同行业提供定制化解决方案
              </p>
            </div>

            <div className="space-y-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8">
                  <h3 className="text-2xl font-bold font-montserrat mb-3">{useCase.title}</h3>
                  <p className="text-gray-700 font-opensans mb-6">{useCase.description}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-lg font-semibold font-montserrat mb-3">主要优势</h4>
                      <ul className="space-y-2">
                        {useCase.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center">
                            <ArrowRight className="w-4 h-4 text-primary mr-2" />
                            <span className="text-gray-700 font-opensans">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg h-40 flex items-center justify-center">
                      <p className="text-gray-400">场景示意图</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold font-montserrat mb-6">
              准备开始您的 RWA 数字化之旅？
            </h2>
            <p className="text-lg text-gray-700 font-opensans mb-8 max-w-2xl mx-auto">
              联系我们的专业团队，了解 StableTrust 如何为您的业务提供定制化的 RWA 解决方案
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                联系我们
              </a>
              <a
                href="/solutions"
                className="px-8 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                了解更多解决方案
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesPage;
