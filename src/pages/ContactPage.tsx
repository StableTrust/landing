import PageHeader from "@/components/Layout/PageHeader";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    enquiryType: "general",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "表单提交成功",
        description: "感谢您的咨询，我们的团队将尽快与您联系。",
      });
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        enquiryType: "general",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
      <PageHeader
        title="联系我们"
        subtitle="随时为您提供专业支持与服务"
        backgroundImage="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2000&auto=format"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold font-montserrat mb-6">联系我们</h2>
              <p className="text-lg text-gray-700 font-opensans mb-8">
                无论您是想了解更多关于我们的 RWA 区块链解决方案，还是希望探讨合作机会，
                我们的团队都随时准备为您提供支持。请通过以下方式联系我们，或填写表单发送您的咨询。
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <MapPin className="text-primary mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold font-montserrat mb-1">总部地址</h3>
                    <p className="text-gray-700 font-opensans">三亚市中央商务区</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="text-primary mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold font-montserrat mb-1">联系电话</h3>
                    <p className="text-gray-700 font-opensans">总机：0898-88660103</p>
                    <p className="text-gray-700 font-opensans">商务：+86-16666816820</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="text-primary mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold font-montserrat mb-1">电子邮箱</h3>
                    <p className="text-gray-700 font-opensans">
                      商务合作：business@stabletrust.com
                    </p>
                    <p className="text-gray-700 font-opensans">媒体垂询：media@stabletrust.com</p>
                    <p className="text-gray-700 font-opensans">技术支持：support@stabletrust.com</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold font-montserrat mb-4">全球办公室</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold font-montserrat mb-2">三亚（总部）</h4>
                    <p className="text-gray-700 font-opensans text-sm">三亚市中央商务区</p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold font-montserrat mb-2">新加坡</h4>
                    <p className="text-gray-700 font-opensans text-sm">1 Raffles Place, #20-61</p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold font-montserrat mb-2">香港</h4>
                    <p className="text-gray-700 font-opensans text-sm">
                      中环金融街 8 号国际金融中心
                    </p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold font-montserrat mb-2">东京</h4>
                    <p className="text-gray-700 font-opensans text-sm">
                      Tokyo Midtown, Akasaka 9-7-1
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-muted p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold font-montserrat mb-6">发送咨询</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">姓名 *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="请输入您的姓名"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">公司</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="请输入您的公司名称"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">电子邮箱 *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="请输入您的电子邮箱"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">电话</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="请输入您的联系电话"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="enquiryType">咨询类型 *</Label>
                    <select
                      id="enquiryType"
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      required
                    >
                      <option value="general">一般咨询</option>
                      <option value="sales">产品与服务</option>
                      <option value="partnership">商务合作</option>
                      <option value="technical">技术支持</option>
                      <option value="media">媒体垂询</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">留言内容 *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="请详细描述您的需求或问题"
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "提交中..." : "提交咨询"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 bg-white">
        {/* <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-montserrat mb-6">常见问题</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  question: "StableTrust 的 RWA 解决方案适合哪些行业？",
                  answer:
                    "我们的解决方案广泛适用于房地产、大宗商品、艺术品、金融资产等多个行业，可根据行业特点定制专属方案。",
                },
                {
                  question: "如何开始与 StableTrust 合作？",
                  answer:
                    "您可以通过填写联系表单、致电或发送电子邮件与我们联系，我们的团队将安排专业顾问与您进行详细沟通，了解需求并提供定制化解决方案。",
                },
                {
                  question: "StableTrust 的解决方案是否符合监管要求？",
                  answer:
                    "是的，合规性是我们解决方案的核心。我们的系统内置合规框架，满足全球各地区的监管要求，确保资产合规流通。",
                },
                {
                  question: "实施 RWA 区块链解决方案需要多长时间？",
                  answer:
                    "实施时间取决于项目复杂度和客户需求，一般简单项目可在2-3个月内完成，复杂项目可能需要4-6个月。我们会提供详细的项目计划和时间表。",
                },
              ].map((faq, index) => (
                <div key={index} className="text-left p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold font-montserrat mb-3">{faq.question}</h3>
                  <p className="text-gray-700 font-opensans">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default ContactPage;
