import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    title: "资产数字化",
    description: "将实体资产转化为区块链上的数字代币，实现资产的透明化和高效管理",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format",
    link: "/solutions",
  },
  {
    title: "代币发行与管理",
    description: "提供完整的代币生命周期管理，包括发行、交易、追踪和清算",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format",
    link: "/solutions",
  },
  {
    title: "合规与监管解决方案",
    description: "内置合规框架，满足全球各地区的监管要求，确保资产合规流通",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800&auto=format",
    link: "/solutions",
  },
];

const SolutionsOverview = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">我们的解决方案</h2>
          <p className="text-lg text-gray-600 font-opensans max-w-3xl mx-auto">
            StableTrust 提供全方位的 RWA 区块链解决方案，满足企业在资产数字化转型中的各种需求
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold font-montserrat mb-3">{solution.title}</h3>
                <p className="text-gray-600 font-opensans mb-4">{solution.description}</p>
                {/* <Link
                  to={solution.link}
                  className="text-primary hover:text-primary/80 font-semibold flex items-center transition-colors font-montserrat"
                >
                  了解更多 <ArrowRight className="ml-2 h-4 w-4" />
                </Link> */}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-primary hover:bg-primary/90 text-white px-8 py-6">
            <Link to="/solutions">查看完整解决方案</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsOverview;
