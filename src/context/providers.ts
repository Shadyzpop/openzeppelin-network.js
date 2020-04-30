import Web3 from 'web3';
import { ValidProvider } from '../types';
import ExtendedProvider from '../interface/ExtendedProvider';

declare global {
  interface Window {
    ethereum: ValidProvider;
  }
}

export function connection(conn: string): ValidProvider | null {
  return new Web3(conn).currentProvider;
}

export function tryInjected(): ValidProvider | undefined {
  // Detect whether the current browser is ethereum-compatible
  if (window.ethereum === undefined) return undefined;
  const provider = window.ethereum as ExtendedProvider;

  // Disable auto refresh if possible
  if (provider.autoRefreshOnNetworkChange === true) {
    provider.autoRefreshOnNetworkChange = false;
  }

  return provider as any;
}

export function injected(): ValidProvider {
  const provider = tryInjected();
  if (!provider) throw new Error('A web3 provider is not attached to a window.');
  return provider;
}
