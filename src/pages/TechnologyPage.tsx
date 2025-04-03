import PageHeader from "@/components/Layout/PageHeader";
import { useEffect } from "react";
import { ShieldCheck, Cpu, Lock, Database, Link2, Smartphone } from "lucide-react";

const TechnologyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <ShieldCheck className="w-12 h-12 text-primary" />,
      title: "安全合规架构",
      description: "采用多层安全防护体系，符合国际金融合规标准，确保资产安全和交易合规",
    },
    {
      icon: <Cpu className="w-12 h-12 text-primary" />,
      title: "高性能区块链引擎",
      description: "自主研发的高吞吐量共识算法，支持每秒数千笔交易处理，满足商业级应用需求",
    },
    {
      icon: <Lock className="w-12 h-12 text-primary" />,
      title: "隐私保护技术",
      description: "零知识证明和同态加密技术，实现交易隐私保护同时满足监管透明要求",
    },
    {
      icon: <Database className="w-12 h-12 text-primary" />,
      title: "资产数字化协议",
      description: "标准化的资产代币化协议，支持多种实体资产上链，实现无缝互操作性",
    },
    {
      icon: <Link2 className="w-12 h-12 text-primary" />,
      title: "跨链互操作",
      description: "多链架构设计，支持与主流公链和联盟链的资产跨链流通",
    },
    {
      icon: <Smartphone className="w-12 h-12 text-primary" />,
      title: "移动端优化",
      description: "轻量级客户端技术，在移动设备上也能流畅运行复杂的区块链应用",
    },
  ];

  const techStack = [
    {
      name: "区块链层",
      items: ["自主共识算法", "智能合约引擎", "分布式账本", "跨链网关"],
    },
    {
      name: "资产层",
      items: ["RWA 代币标准", "资产登记系统", "合规验证", "资产评估"],
    },
    {
      name: "应用层",
      items: ["DApp SDK", "开发者工具", "API 网关", "数据分析"],
    },
    {
      name: "安全层",
      items: ["硬件安全模块", "多重签名", "零知识证明", "监管合规"],
    },
  ];

  return (
    <>
      <PageHeader title="核心技术" subtitle="StableTrust 领先的区块链技术架构" />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold font-montserrat mb-6">RWA 区块链技术平台</h2>
            <p className="text-xl text-gray-700 font-opensans">
              StableTrust 采用创新的区块链技术架构，专为实体资产数字化 (RWA)
              设计，提供安全、高效、合规的区块链基础设施
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
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
            <h2 className="text-3xl font-bold font-montserrat text-center mb-8">技术架构</h2>
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {techStack.map((stack, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-bold font-montserrat mb-4 text-primary">
                      {stack.name}
                    </h3>
                    <ul className="space-y-2">
                      {stack.items.map((item, i) => (
                        <li key={i} className="text-gray-700 font-opensans flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold font-montserrat text-center mb-8">核心优势</h2>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold font-montserrat mb-4">资产数字化协议</h3>
                  <p className="text-gray-700 font-opensans mb-4">
                    StableTrust
                    开发了专为实体资产设计的代币化协议，支持房地产、大宗商品、艺术品等多种资产类型的上链。我们的协议包含：
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 font-opensans space-y-2">
                    <li>标准化的资产元数据规范</li>
                    <li>灵活的所有权结构表示</li>
                    <li>内置合规验证机制</li>
                    <li>收益分配和治理功能</li>
                  </ul>
                </div>
                <div className="md:w-1/2 bg-gray-100 h-64 rounded-xl flex items-center justify-center">
                  <p className="text-gray-500">协议架构示意图</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold font-montserrat mb-4">监管合规设计</h3>
                  <p className="text-gray-700 font-opensans mb-4">
                    我们的平台从底层设计就考虑了监管合规要求，实现了以下关键功能：
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 font-opensans space-y-2">
                    <li>KYC/AML 集成接口</li>
                    <li>投资者资质验证</li>
                    <li>交易监控和报告</li>
                    <li>监管沙盒支持</li>
                  </ul>
                </div>
                <div className="md:w-1/2 bg-gray-100 h-64 rounded-xl flex items-center justify-center">
                  <p className="text-gray-500">合规架构示意图</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors text-lg"
            >
              获取技术白皮书
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechnologyPage;
