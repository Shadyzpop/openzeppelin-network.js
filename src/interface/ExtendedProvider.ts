import { provider, HttpProvider, WebsocketProvider, IpcProvider } from 'web3-core';

export default interface ExtendedProvider extends HttpProvider {
  autoRefreshOnNetworkChange?: boolean;
  isMetaMask?: boolean;
  isTrust?: boolean;
  isGoWallet?: boolean;
  isAlphaWallet?: boolean;
  isStatus?: boolean;
  isToshi?: boolean;
  isGSNProvider?: boolean;
  host: string;
  connection?: WebSocket;
}
