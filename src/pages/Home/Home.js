import Footer from "components/Footer/Footer";
import "./Home.css";
import liquidityLockIcon from "img/liquidity-lock.png";
import moneyIcon from "img/money.png";
import swapIcon from "img/swap.png";
import transactionIcon from "img/transaction.png";
import stockMarketIcon from "img/stock-market.png";
import groupIcon from "img/liquidity.png";
import uniswapIcon from "img/uniswap.png";
import { SwapWidget } from '@uniswap/widgets'
import '@uniswap/widgets/fonts.css'
import MY_TOKEN_LIST from "../../constants"

import LiquidityCard from "./LiquidityCard";
import { useEffect, useState } from "react";
import Roadmap from "components/Roadmap/Roadmap";

export default function Home({ showRedirectModal, redirectPopupTimestamp }) {
  const TitleActionButton = ({ children, onClick, className, style = { backgroundColor: '#0E50E2' } }) => {
    return (
      <button
        style={{
          ...style,
        }}
        onClick={onClick}
        className={`${className} Home-title-action-button`}>
        {children}
      </button>
    )
  }

  const theme = {
    primary: '#000',
    secondary: '#666',
    container: '#FFF',
    accent: "rgb(14, 80, 226)",
    borderRadius: 0,
    networkDefaultShadow: "rgb(14, 80, 226)",
    accentSoft: "#FFF"
  }

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const [marketData, setMarketData] = useState({
    marketcap: 0,
    tradingVolume: 0,
    totalLiquidity: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.dexscreener.com/latest/dex/pairs/ethereum/0x8770C1Cfb7b15F792D8940dEE258a0f611ef785C');
        const data = await response.json();

        // Assuming your API response has properties like marketcap, tradingVolume, totalLiquidity
        console.log(data);
        if (data) {
          const marketcap = data.pair.priceUsd * 1000000000;
          // const tradingVolume = data.pair.volume.h24;
          const totalLiquidity = data.pair.liquidity.usd;
          setMarketData({
            marketcap: formatter.format(marketcap),
            tradingVolume: "1,000,000K",
            totalLiquidity: formatter.format(totalLiquidity),
          });
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const openLink = (link) => {
    window.open(link, "_blank")
  }

  return (
    <div className="Home">
      <div className="Home-top">
        <div className="background-image" ></div>
        <div className="Home-title-section-container default-container">
          <div className="Home-title-section" id="app">
            <div className="Home-title">
              <div>
                Decentralized
                <br />
                Perpetual Exchange
              </div>
            </div>
            <div className="Home-description">
              <div>
                The Safest Place to Trade! Where Staking EFT Tokens Unlocks Lower Fees
              </div>
            </div>
            <div className="Home-title-action">
              <TitleActionButton onClick={() => openLink("https://www.cyberscope.io/audits/5-eft")}>Contract Audit</TitleActionButton>
              <TitleActionButton onClick={() => openLink("https://www.team.finance/view-coin/0xf86cFCE1e746456135d7fACe48c2916D7D3cb676?name=Everflow%20Token&symbol=EFT&chainid=0x1")} style={{ backgroundColor: '#FFFFFF', color: "#000000" }}>Team Finance</TitleActionButton>
            </div>
          </div>
        </div>
        <div className="Home-latest-info-container default-container">
          <div className="Home-latest-info-block">
            <img src={transactionIcon} alt="Open Interest Icon" className="Home-latest-info__icon" />
            <div className="Home-latest-info-content">
              <div className="Home-latest-info__title">
                <div>Circulating Supply</div>
              </div>
              <div className="Home-latest-info__value">{marketData.tradingVolume}</div>
            </div>
          </div>
          <div className="Home-latest-info-block">
            <img src={stockMarketIcon} alt="Total Trading Volume Icon" className="Home-latest-info__icon" />
            <div className="Home-latest-info-content">
              <div className="Home-latest-info__title">
                <div>Marketcap</div>
              </div>
              <div className="Home-latest-info__value">{marketData.marketcap}</div>
            </div>
          </div>
          <div className="Home-latest-info-block">
            <img src={groupIcon} alt="Total Users Icon" className="Home-latest-info__icon" />
            <div className="Home-latest-info-content">
              <div className="Home-latest-info__title">
                <div>Total Liquidity</div>
              </div>
              <div className="Home-latest-info__value">{marketData.totalLiquidity}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="Home-cta-section" id="swap">
        <div className="Home-cta-container default-container">
          <div className="Home-cta-info">
            <div className="Home-cta-info__title">
              <div>Everflow Token</div>
            </div>
            <div className="Home-cta-info__description">
              <div>EFT Token has launched on Uniswap <b>(Ethereum)</b>
                <br />
                Applied a <b>2%</b> tax on token purchases and sales - the resulting auto-buyback liquidity will contribute to the initial supply on the <b>Blast</b> Chain at a later stage.
                <br /><br /> <b>Token Contract address :</b> <a className="scan-link" href="https://etherscan.io/token/0xf86cFCE1e746456135d7fACe48c2916D7D3cb676" target="_blank">0xf86cFCE1e746456135d7fACe48c2916D7D3cb676</a> </div>
            </div>
          </div>
          <div className="Home-cta-options">
            <div className="Home-cta-option">
              {/* <div className="Uniswap">
                  <SwapWidget 
                    tokenList={MY_TOKEN_LIST} 
                    defaultInputTokenAddress={"NATIVE"}
                    defaultOutputTokenAddress={"0xf86cFCE1e746456135d7fACe48c2916D7D3cb676"}
                    defaultChainId={1}
                    theme={theme}
                    routerUrl="https://api.uniswap.org/v1/quote?protocols=v2%2Cv3%2Cmixed&tokenInAddress=ETH&tokenInChainId=1&tokenOutAddress=0xf86cFCE1e746456135d7fACe48c2916D7D3cb676&tokenOutChainId=1"
                  />
              </div> */}
              <div className="Home-cta-option-icon">
                <img src={uniswapIcon} width="90" alt="Uniswap Logo" />
              </div>
              <div className="Home-cta-option-info">
                <div className="Home-cta-option-title">Uniswap</div>
                <div className="Home-cta-option-action">
                  {/* <LaunchExchangeButton /> */}
                  <button onClick={() => openLink("https://app.uniswap.org/swap?chain=mainnet&outputCurrency=0xf86cFCE1e746456135d7fACe48c2916D7D3cb676&inputCurrency=ETH")} className="Home-cta-option-action-btn">Get $EFT</button>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </div>
      <div className="Home-token-card-section">
        <LiquidityCard
          image={liquidityLockIcon}
          title="Liquidity Lock"
          description="Rest assured, our commitment to security includes a 100% liquidity lock on Team Finance."
        />
        <LiquidityCard
          image={moneyIcon}
          title="Total Supply as Liquidity"
          description="The entire EFT token total supply has been added as liquidity"
        />
        <LiquidityCard
          image={swapIcon}
          title="Lower Fees for Trading"
          description="Stake EFT tokens to enjoy significantly lower trading fees compared to other platforms."
        />
      </div>
      <Roadmap />
      <Footer showRedirectModal={showRedirectModal} redirectPopupTimestamp={redirectPopupTimestamp} />
    </div>
  );
}
