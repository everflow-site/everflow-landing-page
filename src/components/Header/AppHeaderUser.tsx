import AddressDropdown from "../AddressDropdown/AddressDropdown";

import cx from "classnames";
import "./Header.css";

type Props = {
  openSettings: () => void;
  small?: boolean;
  disconnectAccountAndCloseSettings: () => void;
  redirectPopupTimestamp: number;
  showRedirectModal: (to: string) => void;
  tradePageVersion: number;
};


export function AppHeaderUser({
  openSettings,
  small,
  disconnectAccountAndCloseSettings,
  redirectPopupTimestamp,
  showRedirectModal,
  tradePageVersion,
}: Props) {



    return (
      <div className="App-header-user">
        <div className={cx("App-header-trade-link", { "homepage-header": true })}>
            <button
              style={{
                backgroundColor: '#0E50E2',
                padding: "10px 20px",
                borderRadius: "100px",
                margin: 5,
                border: "none",
                color: "#ffffff",
                boxShadow: "0px 3px 4px 0px #00000026", 
              }}
              className="doc-button"
            >
              Comming Soon
            </button>
          
        </div>
        
      </div>
    );

}
