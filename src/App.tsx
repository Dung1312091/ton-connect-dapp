import './App.scss'
import {THEME, TonConnectUIProvider} from "@tonconnect/ui-react";
import {Header} from "./components/Header/Header";
import {TxForm} from "./components/TxForm/TxForm";
import {Footer} from "./components/Footer/Footer";
import {TonProofDemo} from "./components/TonProofDemo/TonProofDemo";
import {useEffect} from "react";

function App() {
    console.log("-------returnStrategy none")
    return (
      <TonConnectUIProvider
          manifestUrl="https://ton-connect.github.io/demo-dapp-with-react-ui/tonconnect-manifest.json"
          uiPreferences={{ theme: THEME.DARK }}
          walletsListConfiguration={{
              includeWallets: [
                  {
                      appName: "TobiWallet",
                      name: "TobiWallet",
                      imageUrl: "https://wallet.tg/images/logo-288.png",
                      aboutUrl: "https://wallet.tg/",
                      universalLink: "https://t.me/telifidev_bot/wallet",
                      bridgeUrl: "https://bridge.tonapi.io/bridge",
                      platforms: ["ios", "android", "macos", "windows", "linux"]
                  }
              ],
          }}
          actionsConfiguration={{
            //   twaReturnUrl: 'https://t.me/mpc_wallet_connect_bot/tobi_wallet',
            returnStrategy: 'back'
            

          }}
      >
        <div className="app">
            <Header />
            <TxForm />
            <TonProofDemo />
            <Footer />
        </div>
      </TonConnectUIProvider>
  )
}

export default App
