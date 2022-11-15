import { React } from "react";
import { useAppContext } from "./Context";
import "./styles/tailwind.css";

const Wallet = () => {
  const { wallet } = useAppContext();
  return (
    <div
      className={wallet ? "connect-wallet active" : "connect-wallet"}
      onClick={handleClose}
    >
      <div className="connect" onClick={(e) => e.stopPropagation()}>
        <div>
          <h3>Connect Wallet</h3>
          <img
            src="/img/close.svg"
            alt="close"
            className="close"
            onClick={handleClose}
          />
        </div>
        <div className="line"></div>
        <div>
          <p>Choose your preferred wallet:</p>
          <div className="wallet">
            <div>
              <img src="/img/metamask-logo.svg" alt="metamask" />
              <h3>Metamask</h3>
            </div>
            <img src="/img/arrow.svg" alt="arrow" />
          </div>
          <div className="wallet">
            <div>
              <img src="/img/opensea-logo.svg" alt="walletConnect" />
              <h3>WalletConnect</h3>
            </div>
            <img src="/img/arrow.svg" alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
