import PageHeader from "@/components/Layout/PageHeader";
import { useEffect } from "react";
import { Linkedin } from "lucide-react";

const executives = [
  {
    name: "张建国",
    position: "创始人兼首席执行官",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format",
    bio: "拥有 15 年区块链与金融科技行业经验，曾任职于多家知名金融机构，具有丰富的行业资源与实践经验。张建国先生带领 StableTrust 从创立至今，将公司打造成为 RWA 区块链领域的领导者。",
    linkedin: "#",
  },
  {
    name: "李明",
    position: "首席技术官",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format",
    bio: "区块链架构专家，拥有计算机科学博士学位，曾在硅谷顶级科技公司担任高级技术职位。李明博士主导了 StableTrust 核心技术平台的架构设计与研发，拥有多项区块链技术专利。",
    linkedin: "#",
  },
  {
    name: "王芳",
    position: "首席运营官",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format",
    bio: "拥有 MBA 学位和丰富的战略咨询经验，曾在国际管理咨询公司任职高级合伙人。王芳女士在 StableTrust 负责公司整体运营与业务拓展，建立了高效的组织架构与运营体系。",
    linkedin: "#",
  },
];

const teamMembers = [
  {
    name: "陈强",
    position: "产品副总裁",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format",
    linkedin: "#",
  },
  {
    name: "刘晓华",
    position: "研发总监",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format",
    linkedin: "#",
  },
  {
    name: "张颖",
    position: "市场总监",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format",
    linkedin: "#",
  },
  {
    name: "王伟",
    position: "商务拓展总监",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format",
    linkedin: "#",
  },
  {
    name: "赵明",
    position: "区块链架构师",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format",
    linkedin: "#",
  },
  {
    name: "林小玲",
    position: "首席设计师",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format",
    linkedin: "#",
  },
];

const advisors = [
  {
    name: "席教授",
    position: "顾问",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format",
    linkedin: "#",
  },
  {
    name: "刘晓华",
    position: "研发总监",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format",
    linkedin: "#",
  },
  {
    name: "张颖",
    position: "市场总监",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format",
    linkedin: "#",
  },
];

const TeamPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeader title="团队介绍" subtitle="我们的专业团队致力于区块链技术创新与应用" />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold font-montserrat mb-4">领导团队</h2>
            <p className="text-lg text-gray-700 font-opensans">
              StableTrust
              由行业资深专家领衔，拥有丰富的区块链技术与金融行业经验，为客户提供最专业的服务与支持。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {executives.map((exec, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img src={exec.image} alt={exec.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold font-montserrat">{exec.name}</h3>
                    <a
                      href={exec.linkedin}
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                  <p className="text-primary font-semibold font-opensans mb-4">{exec.position}</p>
                  <p className="text-gray-600 font-opensans">{exec.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold font-montserrat mb-4">核心团队</h2>
            <p className="text-lg text-gray-700 font-opensans">
              我们的核心团队由区块链技术、金融、产品设计等领域的专业人才组成，为 StableTrust
              的创新与发展提供坚实支持。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-muted rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="text-lg font-semibold font-montserrat">{member.name}</h3>
                    <a
                      href={member.linkedin}
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <Linkedin size={18} />
                    </a>
                  </div>
                  <p className="text-gray-600 font-opensans">{member.position}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto text-center mb-16"></div>

          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold font-montserrat mb-4">顾问</h2>
            <p className="text-lg text-gray-700 font-opensans">
              我们的顾问团队由行业资深专家组成，为 StableTrust 提供专业的咨询服务。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {advisors.map((member, index) => (
              <div
                key={index}
                className="bg-muted rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="text-lg font-semibold font-montserrat">{member.name}</h3>
                    <a
                      href={member.linkedin}
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <Linkedin size={18} />
                    </a>
                  </div>
                  <p className="text-gray-600 font-opensans">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-montserrat mb-6">加入我们</h2>
          <p className="text-lg text-gray-700 font-opensans mb-8 max-w-3xl mx-auto">
            StableTrust 始终寻找优秀的人才加入我们的团队。如果您热爱区块链技术，
            具有创新精神，并希望参与塑造资产数字化的未来，我们期待您的加入。
          </p>
          <a
            href="/careers"
            className="inline-block px-8 py-3 bg-primary text-white rounded-md font-semibold hover:bg-primary/90 transition-colors"
          >
            查看职位空缺
          </a>
        </div>
      </section>
    </>
  );
};

export default TeamPage;
