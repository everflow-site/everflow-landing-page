import AddressDropdown from "../AddressDropdown/AddressDropdown";

import cx from "classnames";
import "./Header.css";


export function AppHeaderUser() {

  const openPdfInNewTab = () => {
    const pdfUrl = 'Everflow_whitepaper_2024.pdf';
    window.open(pdfUrl, '_blank');
  };


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
              onClick={openPdfInNewTab}
            >
              Whitepaper
            </button>
          
        </div>
        
      </div>
    );

}
