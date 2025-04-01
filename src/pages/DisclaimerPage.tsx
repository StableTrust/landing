import PageHeader from "@/components/Layout/PageHeader";
import { useEffect } from "react";

const DisclaimerPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeader title="免责声明" subtitle="请仔细阅读以下声明内容" />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl font-bold font-montserrat mb-4">免责声明</h2>
              <p className="text-gray-700 font-opensans mb-4">
                欢迎访问 StableTrust
                网站和使用我们的服务。在您访问本网站或使用我们的服务前，请仔细阅读本免责声明。您访问本网站或使用我们的服务，即表示您已阅读、理解并同意受本免责声明的约束。
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold font-montserrat mb-4">1. 信息准确性</h2>
              <p className="text-gray-700 font-opensans mb-4">
                StableTrust
                致力于确保网站上的信息准确、完整和最新，但我们不对信息的准确性、完整性或及时性作出任何保证或承诺。本网站上的信息可能包含技术错误、排版错误或其他不准确之处，我们保留随时更正或更新这些信息的权利，恕不另行通知。
              </p>
              <p className="text-gray-700 font-opensans mb-4">
                本网站上的信息仅供参考，不构成任何形式的建议、推荐或保证。用户在依赖这些信息做出任何决策前，应自行验证信息的准确性和适用性。
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold font-montserrat mb-4">2. 非投资建议</h2>
              <p className="text-gray-700 font-opensans mb-4">
                本网站提供的内容不构成投资建议、财务建议、交易建议或任何其他类型的建议。所有观点、新闻、研究、分析、价格或其他信息仅作为一般市场评论，不构成投资建议。
              </p>
              <p className="text-gray-700 font-opensans mb-4">
                StableTrust
                不对任何人因依赖本网站上的信息而采取或不采取任何行动所导致的任何损失或损害承担责任。投资决策应基于您自己的判断，并在必要时咨询专业顾问。
              </p>
              <p className="text-gray-700 font-opensans mb-4">
                请注意，数字资产和代币化实体资产投资涉及重大风险，包括但不限于市场风险、流动性风险、技术风险和监管风险。过去的表现不代表未来的结果，您可能损失部分或全部投资。
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold font-montserrat mb-4">3. 第三方链接</h2>
              <p className="text-gray-700 font-opensans mb-4">
                本网站可能包含指向第三方网站或资源的链接。这些链接仅为方便用户而提供，不代表我们对这些网站或资源的认可、推荐或验证。我们对这些第三方网站的内容、准确性、合法性、适用性或任何其他方面不承担任何责任。
              </p>
              <p className="text-gray-700 font-opensans mb-4">
                您访问任何第三方网站的风险由您自行承担。我们建议您在访问这些网站时查阅其服务条款和隐私政策。
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold font-montserrat mb-4">4. 服务可用性</h2>
              <p className="text-gray-700 font-opensans mb-4">
                StableTrust
                不保证网站或服务将不间断、及时、安全或无错误地运行。我们可能会不时地暂停、限制或终止部分或全部服务，用于维护、更新或其他原因，恕不另行通知。
              </p>
              <p className="text-gray-700 font-opensans mb-4">
                我们不对因网站或服务的任何中断、暂停或终止而导致的任何损失或损害承担责任，无论是直接的、间接的、附带的还是后果性的。
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold font-montserrat mb-4">5. 责任限制</h2>
              <p className="text-gray-700 font-opensans mb-4">
                在法律允许的最大范围内，StableTrust
                及其董事、员工、合作伙伴和代理人不对因使用或无法使用本网站或服务而导致的任何直接、间接、附带、特殊、衍生性或惩罚性损害承担责任，包括但不限于利润损失、商誉损失、数据损失或其他无形损失。
              </p>
              <p className="text-gray-700 font-opensans mb-4">
                即使 StableTrust
                已被告知此类损害的可能性，上述责任限制仍然适用。在某些司法管辖区不允许排除或限制附带或后果性损害的责任，因此上述限制可能对您不适用。
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold font-montserrat mb-4">6. 知识产权</h2>
              <p className="text-gray-700 font-opensans mb-4">
                本网站及其内容（包括但不限于文本、图像、标志、按钮图标、图片、音频剪辑、数字下载、数据编译和软件）受版权、商标和其他知识产权法律的保护，归
                StableTrust 或其内容提供商所有。
              </p>
              <p className="text-gray-700 font-opensans mb-4">
                未经 StableTrust
                明确书面许可，不得复制、修改、发布、传播、分发、展示、表演、编辑、改编或以其他方式利用本网站的任何内容。未经授权使用本网站内容可能违反版权、商标和其他适用法律，并可能导致刑事或民事处罚。
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold font-montserrat mb-4">7. 遵守法律</h2>
              <p className="text-gray-700 font-opensans mb-4">
                您同意在使用本网站和服务时遵守所有适用的法律、法规和规则。您不得以任何非法或禁止的方式使用本网站或服务，或以任何可能损害、禁用、过度负荷或损害本网站的方式使用本网站。
              </p>
              <p className="text-gray-700 font-opensans mb-4">
                StableTrust
                保留在发现违法或违规行为时，采取适当措施的权利，包括但不限于删除内容、暂停或终止服务、向有关当局报告等。
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold font-montserrat mb-4">8. 管辖法律</h2>
              <p className="text-gray-700 font-opensans mb-4">
                本免责声明受中华人民共和国法律管辖，并按其解释。与本免责声明相关的任何争议应首先通过友好协商解决；协商不成的，应提交至有管辖权的人民法院诉讼解决。
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold font-montserrat mb-4">9. 声明修改</h2>
              <p className="text-gray-700 font-opensans mb-4">
                StableTrust
                保留随时修改本免责声明的权利。修改后的声明将在本网站上发布，并自发布之日起生效。您继续使用本网站或服务，即表示您接受修改后的免责声明。我们建议您定期查阅本页面，以了解最新的免责声明内容。
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold font-montserrat mb-4">10. 联系我们</h2>
              <p className="text-gray-700 font-opensans mb-4">
                如果您对本免责声明有任何疑问或意见，请通过以下方式联系我们：
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

export default DisclaimerPage;
