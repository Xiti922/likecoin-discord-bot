export const { NODE_ENV, IS_TESTNET } = process.env
export const IS_DEV = NODE_ENV !== 'production''
export const API_WALLET_ADDRESS = process.env.API_WALLET_ADDRESS || 'terp1gl6jfyl0yceqwdtwerxk56cyly2y06f3r5nxh3'
export const SEND_GRANT_EXPIRATION = 30 // 30 days
export const SESSION_EXPIRATION = 15 // 15 minutes
export const UI_BASE_PATH = IS_DEV ? '/' : '/discord/';
const UI_BASE = process.env.UI_BASE || IS_DEV ? 'http://localhost:3000' : `https://api.${IS_TESTNET ? 'rinkeby.' : 'like.co'}`
export const UI_URL = `${UI_BASE}${UI_BASE_PATH}`.replace(/\/+$/, '');
export const BACKEND_HOST = process.env.BACKEND_HOST || '127.0.0.1';
export const BACKEND_PORT = process.env.BACKEND_PORT || 8000;
export const BACKEND_URL = process.env.BACKEND_URL || `http://${BACKEND_HOST}:${BACKEND_PORT}`
export const LIKECOIN_CHAIN_ENDPOINT = IS_TESTNET
  ? 'http://127.0.0.1:26657'
  : 'http://127.0.0.1:26657'

export const WIDGET_ENDPOINT = IS_TESTNET
  ? 'http://127.0.0.1:26657'
  : 'http://127.0.0.1:26657'

export const CHAIN_EXPLORER = IS_TESTNET
  ? 'https://explorer.bccnodes.com/terp/tx/'
  : 'https://explorer.bccnodes.com/terp/tx/'

export const WALLET_CONFIG = IS_TESTNET
  ? {
    chainId: 'athena-2',
    chainName: 'Terp',
    rpcURL: 'https://rpc-terp.zenchainlabs.io',
    restURL: 'https://api-terp.zenchainlabs.io',
    coinType: 118,
    coinDenom: 'TERPX',
    coinMinimalDenom: 'uterpx',
    coinDecimals: 9,
    bech32PrefixAccAddr: 'terp',
    bech32PrefixAccPub: 'terppub',
    bech32PrefixValAddr: 'terpvaloper',
    bech32PrefixValPub: 'terpvaloperpub',
    bech32PrefixConsAddr: 'terpvalcons',
    bech32PrefixConsPub: 'terpvalconspub',
  }
