import PageHeader from "@/components/Layout/PageHeader";
import { useEffect } from "react";
import { Shield, FileCheck, Globe, Users, BookOpen, Scale } from "lucide-react";

const CompliancePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const complianceFeatures = [
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "KYC/AML 集成",
      description: "全面的身份验证和反洗钱系统，符合全球监管标准，确保用户身份真实可靠",
    },
    {
      icon: <FileCheck className="w-12 h-12 text-primary" />,
      title: "合规审计追踪",
      description: "完整的交易记录和审计追踪，支持监管审查和内部合规管理，提高透明度",
    },
    {
      icon: <Globe className="w-12 h-12 text-primary" />,
      title: "跨境合规",
      description: "适应多国监管要求的合规框架，支持跨境资产交易和国际业务拓展",
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "投资者资质验证",
      description: "根据不同资产类型和地区要求，验证投资者资质，确保合规参与",
    },
    {
      icon: <BookOpen className="w-12 h-12 text-primary" />,
      title: "监管报告生成",
      description: "自动化监管报告生成工具，简化合规报告流程，降低运营成本",
    },
    {
      icon: <Scale className="w-12 h-12 text-primary" />,
      title: "监管沙盒支持",
      description: "支持在监管沙盒环境中测试创新业务模式，加速合规审批流程",
    },
  ];

  const regulatoryFrameworks = [
    {
      region: "中国",
      frameworks: [
        "《区块链信息服务管理规定》",
        "《防范代币发行融资风险的公告》",
        "《关于进一步防范和处置虚拟货币交易炒作风险的通知》",
      ],
      approach:
        "StableTrust 严格遵循中国监管要求，专注于区块链底层技术应用，不涉及代币发行和虚拟货币交易，确保业务合规运营。",
    },
    {
      region: "亚太地区",
      frameworks: [
        "新加坡《支付服务法》(PSA)",
        "香港《虚拟资产服务提供者》(VASP) 监管框架",
        "日本《资金结算法》",
      ],
      approach:
        "在亚太地区，我们根据各国监管框架定制合规策略，取得必要牌照，确保业务符合当地监管要求。",
    },
    {
      region: "欧盟",
      frameworks: [
        "《市场加密资产监管》(MiCA)",
        "《反洗钱指令》(AMLD5)",
        "《通用数据保护条例》(GDPR)",
      ],
      approach:
        "我们的平台内置欧盟合规要求，包括数据保护、反洗钱和加密资产监管，为欧洲客户提供全面合规保障。",
    },
    {
      region: "美国",
      frameworks: [
        "SEC 证券法规",
        "CFTC 商品期货交易监管",
        "FinCEN 反洗钱要求",
        "各州虚拟资产监管框架",
      ],
      approach:
        "针对美国复杂的监管环境，我们采取谨慎策略，与监管机构保持沟通，确保业务符合联邦和州级要求。",
    },
  ];

  return (
    <>
      <PageHeader title="合规与监管" subtitle="安全合规的 RWA 区块链解决方案" />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold font-montserrat mb-6">合规优先的设计理念</h2>
            <p className="text-xl text-gray-700 font-opensans">
              StableTrust
              将合规要求融入产品设计的每个环节，打造安全可靠的实体资产数字化平台，满足全球监管标准
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {complianceFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold font-montserrat text-center mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-700 font-opensans text-center">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold font-montserrat text-center mb-8">全球监管适应性</h2>
            <div className="space-y-8">
              {regulatoryFrameworks.map((framework, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold font-montserrat mb-4">{framework.region}</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold font-montserrat mb-3">主要监管框架</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        {framework.frameworks.map((item, i) => (
                          <li key={i} className="text-gray-700 font-opensans">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold font-montserrat mb-3">我们的合规方法</h4>
                      <p className="text-gray-700 font-opensans">{framework.approach}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <div className="bg-primary/5 p-8 rounded-xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold font-montserrat mb-4">合规即服务</h2>
                  <p className="text-gray-700 font-opensans mb-4">
                    StableTrust 提供"合规即服务" (Compliance-as-a-Service)
                    解决方案，帮助企业和机构简化合规流程，降低合规成本。
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white mr-2 flex-shrink-0 mt-0.5">
                        1
                      </span>
                      <span className="text-gray-700 font-opensans">自动化合规检查和风险评估</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white mr-2 flex-shrink-0 mt-0.5">
                        2
                      </span>
                      <span className="text-gray-700 font-opensans">实时监管变更追踪和适应</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white mr-2 flex-shrink-0 mt-0.5">
                        3
                      </span>
                      <span className="text-gray-700 font-opensans">合规专家咨询和支持</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white mr-2 flex-shrink-0 mt-0.5">
                        4
                      </span>
                      <span className="text-gray-700 font-opensans">定制化合规解决方案</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white h-64 rounded-xl flex items-center justify-center">
                  <p className="text-gray-400">合规服务流程图</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold font-montserrat text-center mb-8">合规最佳实践</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold font-montserrat mb-3">风险评估</h3>
                <p className="text-gray-700 font-opensans mb-4">
                  定期进行全面风险评估，识别潜在合规风险，制定针对性防控措施。
                </p>
                <ul className="list-disc pl-5 text-gray-700 font-opensans space-y-1 text-sm">
                  <li>监管风险分析</li>
                  <li>业务合规评估</li>
                  <li>风险等级划分</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold font-montserrat mb-3">合规培训</h3>
                <p className="text-gray-700 font-opensans mb-4">
                  为客户提供专业合规培训，提高合规意识，降低违规风险。
                </p>
                <ul className="list-disc pl-5 text-gray-700 font-opensans space-y-1 text-sm">
                  <li>监管要求解读</li>
                  <li>合规操作指南</li>
                  <li>案例分析学习</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold font-montserrat mb-3">持续监控</h3>
                <p className="text-gray-700 font-opensans mb-4">
                  建立实时监控系统，及时发现异常交易和合规风险，快速响应处理。
                </p>
                <ul className="list-disc pl-5 text-gray-700 font-opensans space-y-1 text-sm">
                  <li>交易监控预警</li>
                  <li>异常行为识别</li>
                  <li>合规报告生成</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl mb-16">
            <h2 className="text-2xl font-bold font-montserrat text-center mb-6">合规咨询服务</h2>
            <p className="text-center text-gray-700 font-opensans mb-8 max-w-3xl mx-auto">
              StableTrust 提供专业的合规咨询服务，帮助客户解决复杂的监管挑战，制定合规战略
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold font-montserrat mb-3">企业客户</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700 font-opensans">监管合规评估和尽职调查</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700 font-opensans">合规管理体系建设</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700 font-opensans">监管关系维护策略</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700 font-opensans">合规风险应对方案</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold font-montserrat mb-3">金融机构</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700 font-opensans">RWA 业务合规框架设计</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700 font-opensans">跨境业务合规解决方案</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700 font-opensans">监管科技 (RegTech) 实施</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700 font-opensans">合规培训和能力建设</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold font-montserrat mb-6">需要合规解决方案？</h2>
            <p className="text-lg text-gray-700 font-opensans mb-8 max-w-2xl mx-auto">
              联系我们的合规专家团队，了解 StableTrust 如何帮助您应对监管挑战，安全合规地开展 RWA
              业务
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                咨询合规专家
              </a>
              <a
                href="/risk"
                className="px-8 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                查看风险披露
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompliancePage;
