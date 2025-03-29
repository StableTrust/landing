
import PageHeader from "@/components/Layout/PageHeader";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeader 
        title="关于我们" 
        subtitle="全球领先的RWA区块链解决方案提供商" 
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-montserrat mb-4">公司简介</h2>
              <p className="text-lg text-gray-700 font-opensans mb-4">
                StableTrust成立于2018年，是一家专注于RWA(Real World Assets)区块链解决方案的科技公司。我们致力于通过区块链技术实现实物资产的数字化和通证化，为全球客户提供安全、合规、高效的区块链资产解决方案。
              </p>
              <p className="text-lg text-gray-700 font-opensans mb-6">
                凭借我们强大的技术团队和丰富的行业经验，StableTrust已成功服务超过100家企业客户，涵盖房地产、大宗商品、艺术品、金融资产等多个领域，助力实体经济与区块链世界的无缝连接。
              </p>
              <div className="flex space-x-4">
                <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                  <Link to="/about/team">了解我们的团队</Link>
                </Button>
                <Button asChild variant="outline" className="text-primary hover:bg-primary/10">
                  <Link to="/about/capabilities" className="flex items-center">
                    查看企业能力 <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1200&auto=format" 
                alt="StableTrust办公环境" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-montserrat mb-12 text-center">发展历程</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>
            
            {/* Timeline items */}
            <div className="space-y-16">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-6 h-6 rounded-full bg-primary border-4 border-white"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12">
                    <h3 className="text-xl font-semibold font-montserrat mb-2">2018年</h3>
                    <p className="text-gray-700 font-opensans">
                      StableTrust成立，专注于区块链技术研发与应用
                    </p>
                  </div>
                  <div className="md:pl-12"></div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-6 h-6 rounded-full bg-primary border-4 border-white"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12"></div>
                  <div className="md:pl-12">
                    <h3 className="text-xl font-semibold font-montserrat mb-2">2019年</h3>
                    <p className="text-gray-700 font-opensans">
                      推出首个RWA区块链资产解决方案，完成A轮融资
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-6 h-6 rounded-full bg-primary border-4 border-white"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12">
                    <h3 className="text-xl font-semibold font-montserrat mb-2">2020年</h3>
                    <p className="text-gray-700 font-opensans">
                      拓展全球市场，在新加坡设立亚太区总部
                    </p>
                  </div>
                  <div className="md:pl-12"></div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-6 h-6 rounded-full bg-primary border-4 border-white"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12"></div>
                  <div className="md:pl-12">
                    <h3 className="text-xl font-semibold font-montserrat mb-2">2021年</h3>
                    <p className="text-gray-700 font-opensans">
                      获得多项区块链专利技术，完成B轮融资
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-6 h-6 rounded-full bg-primary border-4 border-white"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12">
                    <h3 className="text-xl font-semibold font-montserrat mb-2">2022-2023年</h3>
                    <p className="text-gray-700 font-opensans">
                      产品线全面升级，服务客户破百家，资产数字化规模超50亿美元
                    </p>
                  </div>
                  <div className="md:pl-12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-montserrat mb-4">我们的使命</h2>
          <p className="text-lg text-gray-700 font-opensans mb-8 max-w-3xl mx-auto">
            通过区块链技术，打破传统资产管理的限制，创造更加透明、高效、安全的资产管理新范式，
            赋能实体经济数字化转型。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold font-montserrat mb-3">创新</h3>
              <p className="text-gray-700 font-opensans">
                不断探索区块链技术前沿，引领行业创新发展
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold font-montserrat mb-3">诚信</h3>
              <p className="text-gray-700 font-opensans">
                恪守商业伦理，为客户提供可信赖的解决方案
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold font-montserrat mb-3">卓越</h3>
              <p className="text-gray-700 font-opensans">
                追求卓越品质，打造行业标杆产品与服务
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-montserrat mb-6">成为我们的合作伙伴</h2>
          <p className="text-lg font-opensans mb-8 max-w-3xl mx-auto">
            StableTrust期待与各行业伙伴携手合作，共同推动区块链技术在实体经济中的应用与发展
          </p>
          <Button asChild className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg">
            <Link to="/contact">联系我们</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
