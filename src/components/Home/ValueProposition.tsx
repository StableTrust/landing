
import { Shield, BarChart3, Layers, Globe } from "lucide-react";

const features = [
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "安全与合规",
    description: "最高级别的安全标准与合规框架，确保资产数字化全流程可信可控"
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    title: "高效与透明",
    description: "创新的区块链技术架构，提供高效的资产追踪与透明的交易流程"
  },
  {
    icon: <Layers className="h-10 w-10 text-primary" />,
    title: "定制化解决方案",
    description: "根据不同行业特点和企业需求，提供定制化的 RWA 区块链方案"
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "全球资产连接",
    description: "打破地域限制，实现全球资产的无缝连接与价值流通"
  }
];

const ValueProposition = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">为何选择 StableTrust</h2>
          <p className="text-lg text-gray-600 font-opensans max-w-3xl mx-auto">
            我们的核心价值在于将复杂的区块链技术转化为简单易用的企业解决方案，实现实物资产的数字化转型
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-muted p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold font-montserrat mb-3">{feature.title}</h3>
              <p className="text-gray-600 font-opensans">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
