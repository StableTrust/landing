
import PageHeader from "@/components/Layout/PageHeader";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

type CaseStudy = {
  id: number;
  title: string;
  client: string;
  industry: string;
  image: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
};

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "大型商业地产代币化",
    client: "环球地产集团",
    industry: "房地产",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format",
    challenge: "环球地产集团拥有多处优质商业地产，但面临资产流动性不足、投资门槛高和管理成本高的挑战。他们希望通过区块链技术将商业地产资产代币化，降低投资门槛，提高流动性。",
    solution: "StableTrust提供了一站式商业地产代币化解决方案，将价值50亿元的商业地产项目分割为数字代币，实现资产的部分所有权、自动化管理和二级市场交易。方案包括资产评估、法律合规、智能合约开发、资产上链、代币发行与管理等全流程服务。",
    results: [
      "投资门槛从500万元降至1万元",
      "资产流动性提升300%",
      "运营管理成本降低40%",
      "投资者数量增长5倍",
      "资产价值溢价15%"
    ],
    testimonial: {
      quote: "StableTrust的区块链解决方案彻底改变了我们管理商业地产的方式，不仅大幅提升了资产流动性，还为我们带来了全新的投资者群体。",
      author: "王总",
      position: "环球地产集团CEO"
    }
  },
  {
    id: 2,
    title: "高端艺术品数字化与所有权分享",
    client: "东方艺术基金",
    industry: "艺术品",
    image: "https://images.unsplash.com/photo-1577083288073-40892c0860a4?q=80&w=800&auto=format",
    challenge: "东方艺术基金拥有多件价值连城的艺术珍品，希望通过区块链技术实现艺术品所有权的部分共享，让更多艺术爱好者能够参与收藏，同时保证艺术品的真实性和所有权的安全性。",
    solution: "StableTrust开发的艺术品数字化解决方案，通过区块链技术为每件艺术品创建唯一的数字身份，实现艺术品的所有权代币化。系统内置艺术品真实性验证机制、智能分红合约和二级市场交易平台，确保所有权分享的安全与透明。",
    results: [
      "艺术品价值评估提高20%",
      "参与收藏的投资者增长10倍",
      "艺术品交易的透明度大幅提升",
      "艺术品管理成本降低35%",
      "全新的艺术品收藏模式获得市场认可"
    ]
  },
  {
    id: 3,
    title: "大宗商品交易与溯源平台",
    client: "亚太商品交易所",
    industry: "大宗商品",
    image: "https://images.unsplash.com/photo-1465754448458-af339cee74a5?q=80&w=800&auto=format",
    challenge: "亚太商品交易所面临大宗商品交易中的信任问题、结算周期长和欺诈风险高等挑战，希望利用区块链技术建立透明可信的大宗商品交易与溯源平台。",
    solution: "StableTrust为其打造了基于区块链的大宗商品交易平台，实现从原产地到终端消费的全流程溯源。系统集成商品验证、智能合约自动结算、多方共识机制等功能，大幅提升交易效率和信任度。",
    results: [
      "交易结算周期从平均7天减少至24小时内",
      "纠纷率下降90%",
      "运营成本降低45%",
      "交易量增长200%",
      "新增国际贸易伙伴30家"
    ],
    testimonial: {
      quote: "StableTrust的区块链解决方案彻底革新了我们的大宗商品交易流程，交易变得更加透明、高效，极大地提升了我们在国际市场的竞争力。",
      author: "张总",
      position: "亚太商品交易所董事长"
    }
  },
  {
    id: 4,
    title: "供应链金融区块链平台",
    client: "汇通金融集团",
    industry: "供应链金融",
    image: "https://images.unsplash.com/photo-1566473965997-3de9c817e938?q=80&w=800&auto=format",
    challenge: "汇通金融集团在供应链金融业务中面临信息不对称、风险管控难和融资成本高等问题，急需提升供应链金融业务的透明度和效率。",
    solution: "StableTrust开发的供应链金融区块链平台，将核心企业、上下游供应商、金融机构等多方纳入统一的区块链网络，实现贸易单据的数字化、资产的实时监控和智能合约自动放款，建立起高效透明的供应链金融生态。",
    results: [
      "中小企业融资成本降低30%",
      "融资审批时间从7天缩短到1天",
      "坏账率下降50%",
      "供应链金融业务规模扩大3倍",
      "区块链平台接入企业超过500家"
    ]
  },
  {
    id: 5,
    title: "碳资产管理与交易平台",
    client: "绿色未来联盟",
    industry: "碳资产",
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=800&auto=format",
    challenge: "绿色未来联盟希望建立可信的碳资产监测、核算和交易平台，解决碳资产交易中存在的数据可信度低、监管难和交易效率低等问题。",
    solution: "StableTrust开发的碳资产区块链平台实现了碳排放数据的实时采集、多方验证和加密存储，建立起可信的碳资产生成机制。平台同时支持碳资产的代币化和交易，满足不同行业的碳中和需求。",
    results: [
      "碳资产数据可信度大幅提升",
      "碳资产交易效率提高200%",
      "碳资产流动性显著增强",
      "平台已支持50+碳减排项目",
      "累计减排量超过100万吨"
    ]
  },
  {
    id: 6,
    title: "私募股权数字化管理平台",
    client: "远景投资基金",
    industry: "私募股权",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format",
    challenge: "远景投资基金在私募股权投资管理中面临信息透明度不足、投资者报告复杂和二级交易难等问题，寻求通过区块链技术优化私募股权管理流程。",
    solution: "StableTrust提供的私募股权数字化平台，将投资协议、资金流向、项目进展等关键信息上链，通过智能合约实现自动分红、投票和报告生成，并建立私募股权二级交易市场，提高投资透明度和流动性。",
    results: [
      "管理运营成本降低35%",
      "投资者满意度提升40%",
      "私募股权流动性提高150%",
      "投资者报告生成时间减少80%",
      "新增机构投资者30家"
    ],
    testimonial: {
      quote: "借助StableTrust的区块链技术，我们彻底改变了私募股权投资的管理模式，投资者获得了前所未有的透明度和流动性，这是私募行业的一次革命。",
      author: "李总",
      position: "远景投资基金管理合伙人"
    }
  }
];

const industries = ["全部", "房地产", "艺术品", "大宗商品", "供应链金融", "碳资产", "私募股权"];

const CaseStudiesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedIndustry, setSelectedIndustry] = useState("全部");
  const [filteredCases, setFilteredCases] = useState(caseStudies);

  useEffect(() => {
    if (selectedIndustry === "全部") {
      setFilteredCases(caseStudies);
    } else {
      setFilteredCases(caseStudies.filter(cs => cs.industry === selectedIndustry));
    }
  }, [selectedIndustry]);

  return (
    <>
      <PageHeader 
        title="案例研究" 
        subtitle="探索StableTrust如何帮助客户实现资产数字化转型" 
        backgroundImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold font-montserrat mb-4">成功案例</h2>
            <p className="text-lg text-gray-700 font-opensans">
              StableTrust已成功帮助众多企业客户实现资产数字化转型，
              以下案例展示了我们如何通过区块链技术解决客户面临的实际问题。
            </p>
          </div>
          
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map((industry, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedIndustry === industry 
                      ? "bg-primary text-white" 
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((caseStudy) => (
              <div key={caseStudy.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={caseStudy.image} 
                    alt={caseStudy.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold font-montserrat">{caseStudy.title}</h3>
                    <span className="bg-muted text-primary text-sm px-2 py-1 rounded-full">{caseStudy.industry}</span>
                  </div>
                  <p className="text-gray-500 font-opensans mb-4">客户：{caseStudy.client}</p>
                  <p className="text-gray-700 font-opensans mb-4 line-clamp-3">
                    {caseStudy.challenge.substring(0, 120)}...
                  </p>
                  <button
                    onClick={() => window.scrollTo({
                      top: document.getElementById(`case-${caseStudy.id}`)?.offsetTop - 100,
                      behavior: 'smooth'
                    })}
                    className="text-primary hover:text-primary/80 font-semibold flex items-center transition-colors font-montserrat"
                  >
                    查看详情 <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {filteredCases.map((caseStudy) => (
        <section key={caseStudy.id} id={`case-${caseStudy.id}`} className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block bg-primary text-white text-sm px-3 py-1 rounded-full mb-4">
                  {caseStudy.industry}
                </span>
                <h2 className="text-3xl font-bold font-montserrat mb-4">{caseStudy.title}</h2>
                <p className="text-lg text-gray-600 font-opensans mb-6">客户：{caseStudy.client}</p>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold font-montserrat mb-2">挑战</h3>
                  <p className="text-gray-700 font-opensans">{caseStudy.challenge}</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold font-montserrat mb-2">解决方案</h3>
                  <p className="text-gray-700 font-opensans">{caseStudy.solution}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold font-montserrat mb-2">成果</h3>
                  <ul className="space-y-2">
                    {caseStudy.results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2 mt-1">•</span>
                        <span className="text-gray-700 font-opensans">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div>
                <div className="rounded-lg overflow-hidden shadow-xl mb-8">
                  <img 
                    src={caseStudy.image} 
                    alt={caseStudy.title} 
                    className="w-full h-auto"
                  />
                </div>
                
                {caseStudy.testimonial && (
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className="text-gray-700 font-opensans italic mb-4">"{caseStudy.testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold font-montserrat">{caseStudy.testimonial.author}</p>
                      <p className="text-gray-600 font-opensans">{caseStudy.testimonial.position}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-montserrat mb-6">准备开启您的区块链之旅？</h2>
          <p className="text-xl font-opensans mb-8 max-w-3xl mx-auto">
            联系我们，了解StableTrust如何为您的业务提供定制化的 RWA 区块链解决方案
          </p>
          <a 
            href="/contact" 
            className="inline-block px-8 py-3 bg-white text-primary rounded-md font-semibold hover:bg-gray-100 transition-colors"
          >
            联系我们
          </a>
        </div>
      </section>
    </>
  );
};

export default CaseStudiesPage;
