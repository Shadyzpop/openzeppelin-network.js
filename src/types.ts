import { HttpProvider, IpcProvider, WebsocketProvider } from 'web3-core';

export type ValidProvider = HttpProvider | IpcProvider | WebsocketProvider | string;
