import PageHeader from "@/components/Layout/PageHeader";
import { useEffect } from "react";

const TermsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeader title="服务条款" subtitle="请仔细阅读以下条款与条件" />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl font-bold font-montserrat mb-4">1. 总则</h2>
              <p className="text-gray-700 font-opensans mb-4">
                欢迎使用 StableTrust 提供的服务。本服务条款（以下简称"条款"）是您与
                StableTrust（以下简称"我们"）之间就 StableTrust
                平台服务等相关事宜所订立的契约。请您仔细阅读本条款，您访问或使用我们的服务，即表示您已阅读、理解并同意受本条款的约束。
              </p>
              <p className="text-gray-700 font-opensans mb-4">
                我们可能随时修改本条款。如有重大变更，我们会提前通知您。您继续使用我们的服务，即表示您接受修改后的条款。如果您不同意本条款的任何内容，请停止使用我们的服务。
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold font-montserrat mb-4">2. 服务内容</h2>
              <p className="text-gray-700 font-opensans mb-4">
                StableTrust
                是一个专注于实体资产数字化（RWA）的区块链平台，提供资产代币化、交易、管理等服务。我们的具体服务内容包括但不限于：
              </p>
              <ul className="list-disc pl-6 text-gray-700 font-opensans mb-4 space-y-2">
                <li>实体资产的数字化与代币化服务</li>
                <li>区块链技术解决方案的开发与实施</li>
                <li>数字资产的管理与交易服务</li>
                <li>合规与监管技术支持</li>
                <li>相关技术咨询与培训</li>
              </ul>
              <p className="text-gray-700 font-opensans mb-4">
                我们保留随时修改、中断或终止部分或全部服务的权利，且无需对您或任何第三方负责。
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold font-montserrat mb-4">3. 用户账户</h2>
              <p className="text-gray-700 font-opensans mb-4">
                您可能需要创建账户才能使用我们的某些服务。您应当提供真实、准确、完整的信息，并保持信息更新。您应当妥善保管账户信息和密码，对账户下的所有活动负责。如发现任何未经授权使用您账户的情况，请立即通知我们。
              </p>
              <p className="text-gray-700 font-opensans mb-4">
                我们保留在以下情况下暂停或终止您账户的权利：违反本条款、提供虚假信息、长期不活动或我们认为必要的其他情况。
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold font-montserrat mb-4">4. 用户行为规范</h2>
              <p className="text-gray-700 font-opensans mb-4">使用我们的服务时，您同意不会：</p>
              <ul className="list-disc pl-6 text-gray-700 font-opensans mb-4 space-y-2">
                <li>违反任何适用的法律法规</li>
                <li>侵犯他人的知识产权、隐私权或其他合法权益</li>
                <li>传播虚假、欺诈或误导性信息</li>
                <li>上传含有病毒、恶意代码的内容</li>
                <li>干扰或破坏服务的正常运行</li>
                <li>未经授权访问我们的系统或网络</li>
                <li>从事洗钱、恐怖融资等非法活动</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold font-montserrat mb-4">5. 知识产权</h2>
              <p className="text-gray-700 font-opensans mb-4">
                StableTrust
                平台及其内容（包括但不限于文本、图像、标志、软件等）的知识产权归我们或相关权利人所有。未经我们或相关权利人明确书面许可，您不得复制、修改、传播或使用这些内容。
              </p>
              <p className="text-gray-700 font-opensans mb-4">
                对于您上传或发布的内容，您保留相应的知识产权，但授予我们全球范围内的、免费的、非独占的许可，允许我们使用、复制、修改、传播该内容，以便提供和改进我们的服务。
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold font-montserrat mb-4">6. 免责声明</h2>
              <p className="text-gray-700 font-opensans mb-4">
                我们的服务按"现状"和"可用性"提供，不提供任何明示或暗示的保证。我们不保证服务不会中断或无错误，不保证缺陷会被纠正，也不保证服务或提供服务的服务器不含病毒或其他有害成分。
              </p>
              <p className="text-gray-700 font-opensans mb-4">
                您理解并同意，您使用我们的服务需自行承担风险。在法律允许的最大范围内，我们对因使用或无法使用我们的服务而导致的任何直接、间接、附带、特殊、衍生性或惩罚性损害不承担责任。
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold font-montserrat mb-4">7. 隐私政策</h2>
              <p className="text-gray-700 font-opensans mb-4">
                我们重视您的隐私。我们的隐私政策描述了我们如何收集、使用和保护您的个人信息，该政策构成本条款的一部分。请访问我们的
                <a href="/privacy" className="text-primary hover:underline">
                  隐私政策
                </a>
                页面了解详情。
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold font-montserrat mb-4">8. 适用法律与争议解决</h2>
              <p className="text-gray-700 font-opensans mb-4">
                本条款受中华人民共和国法律管辖。与本条款相关的任何争议，应首先通过友好协商解决；协商不成的，应提交至有管辖权的人民法院诉讼解决。
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold font-montserrat mb-4">9. 其他条款</h2>
              <p className="text-gray-700 font-opensans mb-4">
                本条款构成您与我们之间关于使用我们服务的完整协议，取代先前或同时的所有口头或书面协议。我们未行使或执行本条款中的任何权利或规定，不构成对该权利或规定的放弃。
              </p>
              <p className="text-gray-700 font-opensans mb-4">
                如本条款的任何条款被认定为无效或不可执行，该条款将被删除，其余条款继续有效。本条款的标题仅为方便参考，不具有法律或合同效力。
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold font-montserrat mb-4">10. 联系我们</h2>
              <p className="text-gray-700 font-opensans mb-4">
                如您对本条款有任何疑问，请通过以下方式联系我们：
              </p>
              <p className="text-gray-700 font-opensans">
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

export default TermsPage;
