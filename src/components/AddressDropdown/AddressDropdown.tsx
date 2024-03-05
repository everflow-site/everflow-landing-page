import Davatar from "@davatar/react";
import { Menu } from "@headlessui/react";
import ExternalLink from "components/ExternalLink/ExternalLink";
import copy from "img/ic_copy_20.svg";
import externalLink from "img/ic_new_link_20.svg";
import disconnect from "img/ic_sign_out_20.svg";
import oneClickTradingIcon from "img/one_click_trading_20.svg";
import { helperToast } from "lib/helperToast";
import { FaChevronDown } from "react-icons/fa";
import { createBreakpoint, useCopyToClipboard } from "react-use";
import "./AddressDropdown.scss";

type Props = {
  account: string;
  accountUrl: string;
  disconnectAccountAndCloseSettings: () => void;
};

function AddressDropdown({ account, accountUrl, disconnectAccountAndCloseSettings }: Props) {
  const useBreakpoint = createBreakpoint({ L: 600, M: 550, S: 400 });
  const breakpoint = useBreakpoint();
  const [, copyToClipboard] = useCopyToClipboard();

  return (
    <Menu>
      <Menu.Button as="div">
        <button className="App-cta small transparent address-btn">
          <div className="user-avatar">
          </div>
          <FaChevronDown />
        </button>
      </Menu.Button>
      <div>
        <Menu.Items as="div" className="menu-items">
          <Menu.Item>
            <div
              className="menu-item"
              onClick={() => {
                copyToClipboard(account);
                helperToast.success(`Address copied to your clipboard`);
              }}
            >
              <img width={20} src={copy} alt="Copy user address" />
              <p>
                <div>Copy Address</div>
              </p>
            </div>
          </Menu.Item>
          <Menu.Item>
            <ExternalLink href={accountUrl} className="menu-item">
              <img width={20} src={externalLink} alt="Open address in explorer" />
              <p>
                <div>View in Explorer</div>
              </p>
            </ExternalLink>
          </Menu.Item>
          <Menu.Item>
            <div className="menu-item" >
              <img width={20} src={oneClickTradingIcon} alt="Open One-click Trading settings" />
              <p>
                <div>One-Click Trading</div>
              </p>
            </div>
          </Menu.Item>
          <Menu.Item>
            <div className="menu-item" onClick={disconnectAccountAndCloseSettings}>
              <img width={20} src={disconnect} alt="Disconnect the wallet" />
              <p>
                <div>Disconnect</div>
              </p>
            </div>
          </Menu.Item>
        </Menu.Items>
      </div>
    </Menu>
  );
}

export default AddressDropdown;
