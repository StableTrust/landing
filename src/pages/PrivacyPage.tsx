import PageHeader from "@/components/Layout/PageHeader";
import { useEffect } from "react";

const PrivacyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeader title="隐私政策" subtitle="保护您的个人信息是我们的首要任务" />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl font-bold font-montserrat mb-4">引言</h2>
              <p className="text-gray-700 font-opensans mb-4">
                StableTrust（"我们"、"我们的"或"本公司"）尊重并保护用户（"您"或"用户"）的隐私。本隐私政策旨在向您说明我们如何收集、使用、存储、共享和保护您的个人信息，以及您对这些信息所拥有的权利。
              </p>
              <p className="text-gray-700 font-opensans mb-4">
                请您在使用我们的服务前仔细阅读本隐私政策。如果您不同意本隐私政策的任何内容，请停止使用我们的服务。当您使用我们的服务时，即表示您已同意我们按照本隐私政策收集、使用、存储和共享您的相关信息。
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold font-montserrat mb-4">1. 我们收集的信息</h2>
              <p className="text-gray-700 font-opensans mb-4">
                为了向您提供更好的服务，我们可能会收集以下类型的信息：
              </p>
              <h3 className="text-xl font-semibold font-montserrat mb-2">1.1 您主动提供的信息</h3>
              <ul className="list-disc pl-6 text-gray-700 font-opensans mb-4 space-y-2">
                <li>
                  账户信息：当您注册账户时，我们会收集您的姓名、电子邮件地址、电话号码等基本信息。
                </li>
                <li>
                  身份验证信息：为符合监管要求，我们可能需要收集您的身份证明文件、地址证明等信息。
                </li>
                <li>交易信息：包括您的交易记录、资产持有情况等。</li>
                <li>通信记录：您与我们的客服团队沟通的内容。</li>
              </ul>

              <h3 className="text-xl font-semibold font-montserrat mb-2">1.2 自动收集的信息</h3>
              <ul className="list-disc pl-6 text-gray-700 font-opensans mb-4 space-y-2">
                <li>设备信息：包括设备型号、操作系统、唯一设备标识符、IP地址等。</li>
                <li>日志信息：您使用我们服务的详细情况，如访问时间、浏览页面等。</li>
                <li>位置信息：在您授权的情况下，我们可能会收集您的精确或大致位置信息。</li>
                <li>
                  Cookie 和类似技术：我们使用这些技术来收集和存储信息，以提供更个性化的服务体验。
                </li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold font-montserrat mb-4">2. 我们如何使用您的信息</h2>
              <p className="text-gray-700 font-opensans mb-4">
                我们可能将收集到的信息用于以下目的：
              </p>
              <ul className="list-disc pl-6 text-gray-700 font-opensans mb-4 space-y-2">
                <li>提供、维护和改进我们的服务</li>
                <li>处理和完成您的交易</li>
                <li>验证您的身份，防止欺诈和增强安全性</li>
                <li>遵守法律法规要求，包括反洗钱和了解您的客户 (KYC) 程序</li>
                <li>向您发送服务通知、更新和安全警报</li>
                <li>提供客户支持并回应您的请求</li>
                <li>进行数据分析，以改进我们的服务和用户体验</li>
                <li>在获得您同意的情况下，向您发送营销信息</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold font-montserrat mb-4">3. 信息的共享与披露</h2>
              <p className="text-gray-700 font-opensans mb-4">
                我们重视您的隐私，不会出售您的个人信息。但在以下情况下，我们可能会共享您的信息：
              </p>
              <ul className="list-disc pl-6 text-gray-700 font-opensans mb-4 space-y-2">
                <li>
                  <strong>服务提供商：</strong>
                  我们可能与提供技术、支付处理、客户服务等服务的第三方共享信息，以便他们代表我们执行这些功能。
                </li>
                <li>
                  <strong>业务合作伙伴：</strong>
                  在您同意的情况下，我们可能与业务合作伙伴共享信息，以提供您所请求的产品或服务。
                </li>
                <li>
                  <strong>法律要求：</strong>
                  如果法律要求或为了保护我们的权利、财产或安全，我们可能会披露您的信息。
                </li>
                <li>
                  <strong>企业交易：</strong>
                  如果我们参与合并、收购或资产出售，您的信息可能作为交易的一部分被转移。
                </li>
              </ul>
              <p className="text-gray-700 font-opensans mb-4">
                在共享您的信息时，我们会要求接收方保护您的信息并遵守相关隐私法规。
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold font-montserrat mb-4">4. 数据安全</h2>
              <p className="text-gray-700 font-opensans mb-4">
                我们实施了适当的技术和组织措施来保护您的个人信息，防止未经授权的访问、使用或披露。这些措施包括：
              </p>
              <ul className="list-disc pl-6 text-gray-700 font-opensans mb-4 space-y-2">
                <li>使用加密技术保护数据传输和存储</li>
                <li>实施访问控制机制，限制对个人信息的访问</li>
                <li>定期进行安全评估和审计</li>
                <li>培训员工遵守隐私和安全实践</li>
              </ul>
              <p className="text-gray-700 font-opensans mb-4">
                尽管我们采取了这些措施，但请注意，没有任何安全系统是绝对安全的。我们无法保证您的信息在传输或存储过程中绝对安全。
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold font-montserrat mb-4">5. 您的权利</h2>
              <p className="text-gray-700 font-opensans mb-4">
                根据适用的数据保护法律，您可能拥有以下权利：
              </p>
              <ul className="list-disc pl-6 text-gray-700 font-opensans mb-4 space-y-2">
                <li>访问您的个人信息</li>
                <li>更正不准确或不完整的信息</li>
                <li>在某些情况下删除您的个人信息</li>
                <li>限制或反对处理您的个人信息</li>
                <li>数据可携带性（以结构化、常用和机器可读的格式接收您的数据）</li>
                <li>撤回您之前给予的同意</li>
                <li>向数据保护监管机构投诉</li>
              </ul>
              <p className="text-gray-700 font-opensans mb-4">
                如果您想行使这些权利，请通过下方提供的联系方式与我们联系。我们将在合理的时间内回应您的请求。
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold font-montserrat mb-4">6. Cookie 政策</h2>
              <p className="text-gray-700 font-opensans mb-4">
                我们使用 Cookie
                和类似技术来收集和存储信息，以提供更个性化的服务体验。您可以通过浏览器设置控制
                Cookie 的使用，但这可能会影响某些服务功能的可用性。
              </p>
              <p className="text-gray-700 font-opensans mb-4">我们使用的 Cookie 类型包括：</p>
              <ul className="list-disc pl-6 text-gray-700 font-opensans mb-4 space-y-2">
                <li>
                  <strong>必要 Cookie：</strong>
                  这些 Cookie 对于网站的基本功能是必不可少的。
                </li>
                <li>
                  <strong>性能 Cookie：</strong>
                  这些 Cookie 帮助我们了解用户如何与我们的网站互动，以改进用户体验。
                </li>
                <li>
                  <strong>功能性 Cookie：</strong>
                  这些 Cookie 使网站能够记住您的选择，提供更个性化的功能。
                </li>
                <li>
                  <strong>广告 Cookie：</strong>
                  这些 Cookie 用于向您展示相关广告，并帮助我们评估营销活动的效果。
                </li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold font-montserrat mb-4">7. 儿童隐私</h2>
              <p className="text-gray-700 font-opensans mb-4">
                我们的服务不面向 18
                岁以下的儿童。我们不会故意收集儿童的个人信息。如果您是父母或监护人，并且您认为您的孩子向我们提供了个人信息，请联系我们，我们将采取措施删除这些信息。
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold font-montserrat mb-4">8. 国际数据传输</h2>
              <p className="text-gray-700 font-opensans mb-4">
                我们可能在全球范围内处理、存储和传输您的个人信息。这意味着您的信息可能被传输到、存储在或处理在您所在国家/地区以外的国家/地区，这些国家/地区的数据保护法律可能与您所在国家/地区的法律不同。
              </p>
              <p className="text-gray-700 font-opensans mb-4">
                当我们传输您的个人信息到其他国家/地区时，我们将采取适当的措施确保您的信息得到充分保护，并符合适用的数据保护法律的要求。
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold font-montserrat mb-4">9. 隐私政策的变更</h2>
              <p className="text-gray-700 font-opensans mb-4">
                我们可能会不时更新本隐私政策，以反映我们实践的变化或出于其他运营、法律或监管原因。我们会在网站上发布更新后的隐私政策，并在进行重大变更时通知您。
              </p>
              <p className="text-gray-700 font-opensans mb-4">
                我们鼓励您定期查看本隐私政策，以了解我们如何保护您的信息。
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold font-montserrat mb-4">10. 联系我们</h2>
              <p className="text-gray-700 font-opensans mb-4">
                如果您对本隐私政策有任何疑问、意见或请求，请通过以下方式联系我们：
              </p>
              <p className="text-gray-700 font-opensans mb-2">
                电子邮件：
                <a href="mailto:legal@stabletrust.com" className="text-primary hover:underline">
                  legal@stabletrust.com
                </a>
              </p>
              {/* <p className="text-gray-700 font-opensans mb-2">
                地址：三亚市中央商务区
              </p>
              <p className="text-gray-700 font-opensans">
                电话：0898-88660103
              </p> */}
            </div>

            <div className="text-center mt-16">
              <p className="text-gray-600 font-opensans italic">
                最后更新日期：{new Date().getFullYear()}年{new Date().getMonth() + 1}月
                {new Date().getDate()}日
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPage;
