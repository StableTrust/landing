import PageHeader from "@/components/Layout/PageHeader";
import { useEffect } from "react";

const RiskPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeader title="风险披露" subtitle="请在参与前了解相关风险" />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl font-bold font-montserrat mb-4">风险披露声明</h2>
              <p className="text-gray-700 font-opensans mb-4">
                StableTrust
                平台（以下简称"平台"）提供的实体资产数字化（RWA）服务涉及多种风险。在使用我们的服务或参与任何相关活动前，请仔细阅读并充分理解本风险披露声明。本声明旨在提醒您可能面临的风险，但并不包含所有可能的风险。
              </p>
              <p className="text-gray-700 font-opensans mb-4">
                通过使用我们的服务，您确认已阅读、理解并接受以下风险。如果您不能接受这些风险，请勿使用我们的服务。
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold font-montserrat mb-4">1. 市场风险</h2>
              <p className="text-gray-700 font-opensans mb-4">
                数字资产和代币化实体资产的价格可能会因多种因素而波动，包括但不限于：
              </p>
              <ul className="list-disc pl-6 text-gray-700 font-opensans mb-4 space-y-2">
                <li>市场供需变化</li>
                <li>经济和政治因素</li>
                <li>技术发展和创新</li>
                <li>监管环境变化</li>
                <li>投资者情绪和市场预期</li>
              </ul>
              <p className="text-gray-700 font-opensans mb-4">
                这些波动可能导致您的投资价值大幅增加或减少。过去的表现不代表未来的结果，您应该只投资您能够承受损失的资金。
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold font-montserrat mb-4">2. 流动性风险</h2>
              <p className="text-gray-700 font-opensans mb-4">
                代币化实体资产可能面临流动性不足的问题，这意味着您可能无法在期望的时间或价格买入或卖出资产。流动性不足可能导致：
              </p>
              <ul className="list-disc pl-6 text-gray-700 font-opensans mb-4 space-y-2">
                <li>交易延迟或无法执行</li>
                <li>价格大幅波动</li>
                <li>买卖价差扩大</li>
                <li>在紧急情况下无法快速退出市场</li>
              </ul>
              <p className="text-gray-700 font-opensans mb-4">
                某些资产可能设有锁定期或赎回限制，这会进一步限制您的流动性。
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold font-montserrat mb-4">3. 技术风险</h2>
              <p className="text-gray-700 font-opensans mb-4">
                区块链和智能合约技术仍处于发展阶段，可能存在以下技术风险：
              </p>
              <ul className="list-disc pl-6 text-gray-700 font-opensans mb-4 space-y-2">
                <li>软件漏洞或编程错误</li>
                <li>网络攻击和安全漏洞</li>
                <li>区块链网络拥堵导致交易延迟</li>
                <li>私钥丢失或被盗导致资产损失</li>
                <li>智能合约执行不当或失败</li>
                <li>系统故障或技术中断</li>
              </ul>
              <p className="text-gray-700 font-opensans mb-4">
                我们采取多种安全措施保护平台和用户资产，但无法保证完全免受技术风险的影响。
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold font-montserrat mb-4">4. 监管风险</h2>
              <p className="text-gray-700 font-opensans mb-4">
                区块链和数字资产行业的监管环境正在不断发展，可能面临以下监管风险：
              </p>
              <ul className="list-disc pl-6 text-gray-700 font-opensans mb-4 space-y-2">
                <li>法律法规的变更可能影响资产的合法性或使用方式</li>
                <li>不同司法管辖区的监管要求不同，可能导致跨境合规挑战</li>
                <li>监管机构可能实施新的限制或要求</li>
                <li>税务政策变化可能影响投资回报</li>
                <li>监管不确定性可能导致市场波动</li>
              </ul>
              <p className="text-gray-700 font-opensans mb-4">
                我们致力于遵守适用的法律法规，但监管环境的变化可能会影响我们提供服务的方式或您使用服务的能力。
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold font-montserrat mb-4">5. 实体资产相关风险</h2>
              <p className="text-gray-700 font-opensans mb-4">
                代币化实体资产面临与底层实体资产相关的特定风险：
              </p>
              <ul className="list-disc pl-6 text-gray-700 font-opensans mb-4 space-y-2">
                <li>
                  <strong>房地产：</strong>
                  物业损坏、租金收入波动、市场价值下降、自然灾害等风险
                </li>
                <li>
                  <strong>大宗商品：</strong>
                  价格波动、供应链中断、存储和保管风险、质量变化等
                </li>
                <li>
                  <strong>艺术品和收藏品：</strong>
                  真实性和估值挑战、保存和保管风险、市场偏好变化等
                </li>
                <li>
                  <strong>金融资产：</strong>
                  发行方信用风险、利率变动、通货膨胀、违约风险等
                </li>
              </ul>
              <p className="text-gray-700 font-opensans mb-4">
                代币化并不能消除底层资产固有的风险，投资者仍需承担这些风险。
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold font-montserrat mb-4">6. 托管和第三方风险</h2>
              <p className="text-gray-700 font-opensans mb-4">
                平台可能依赖第三方服务提供商进行资产托管、验证和管理，这可能带来以下风险：
              </p>
              <ul className="list-disc pl-6 text-gray-700 font-opensans mb-4 space-y-2">
                <li>托管方或服务提供商的财务不稳定或破产</li>
                <li>第三方的安全漏洞或操作失误</li>
                <li>服务中断或系统故障</li>
                <li>合同纠纷或服务终止</li>
              </ul>
              <p className="text-gray-700 font-opensans mb-4">
                我们谨慎选择合作伙伴并实施严格的尽职调查流程，但无法完全消除第三方风险。
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold font-montserrat mb-4">7. 操作风险</h2>
              <p className="text-gray-700 font-opensans mb-4">使用平台时可能面临的操作风险包括：</p>
              <ul className="list-disc pl-6 text-gray-700 font-opensans mb-4 space-y-2">
                <li>输入错误的交易信息或接收地址</li>
                <li>密码或私钥管理不当</li>
                <li>未经授权的账户访问</li>
                <li>对平台功能或产品特性的误解</li>
                <li>未能遵循安全最佳实践</li>
              </ul>
              <p className="text-gray-700 font-opensans mb-4">
                用户应采取适当措施保护账户安全，并在进行任何交易前仔细核对信息。
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold font-montserrat mb-4">8. 不可抗力风险</h2>
              <p className="text-gray-700 font-opensans mb-4">
                平台运营和资产价值可能受到不可抗力事件的影响，包括但不限于：
              </p>
              <ul className="list-disc pl-6 text-gray-700 font-opensans mb-4 space-y-2">
                <li>自然灾害（地震、洪水、台风等）</li>
                <li>公共卫生紧急情况（如疫情）</li>
                <li>战争、恐怖袭击或社会动荡</li>
                <li>政府行为或政策变化</li>
                <li>电力或通信中断</li>
              </ul>
              <p className="text-gray-700 font-opensans mb-4">
                这些事件可能导致服务中断、市场波动或资产价值变化，且通常超出我们的控制范围。
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold font-montserrat mb-4">9. 风险管理建议</h2>
              <p className="text-gray-700 font-opensans mb-4">为帮助您管理上述风险，我们建议：</p>
              <ul className="list-disc pl-6 text-gray-700 font-opensans mb-4 space-y-2">
                <li>只投资您能够承受损失的资金</li>
                <li>分散投资，不要将所有资金集中在单一资产上</li>
                <li>了解您投资的资产和相关风险</li>
                <li>保持对市场和监管环境的关注</li>
                <li>采取适当的安全措施保护您的账户和私钥</li>
                <li>考虑咨询专业的财务和法律顾问</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold font-montserrat mb-4">10. 免责声明</h2>
              <p className="text-gray-700 font-opensans mb-4">
                本风险披露声明不构成投资建议、财务建议或任何形式的推荐。StableTrust
                不对用户的投资决策或因使用我们的服务而产生的任何损失承担责任。
              </p>
              <p className="text-gray-700 font-opensans mb-4">
                用户应自行评估风险并做出独立判断。过去的表现不代表未来的结果，所有投资都存在风险，包括本金损失的可能性。
              </p>
              <p className="text-gray-700 font-opensans mb-4">
                本风险披露声明可能会不时更新，用户应定期查阅最新版本。
              </p>
            </div>
            <div className="mb-12">
              <h2 className="text-2xl font-bold font-montserrat mb-4">11. 联系我们</h2>
              <p className="text-gray-700 font-opensans mb-4">
                如果您对本风险披露有任何疑问或意见，请通过以下方式联系我们：
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

export default RiskPage;
