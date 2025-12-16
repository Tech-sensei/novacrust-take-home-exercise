export interface Currency {
  id: string;
  name: string;
  fullName: string;
  icon: string;
  color: string;
}

export interface WalletOption {
  id: string;
  name: string;
  icon: string | null;
}

export const payCurrencies: Currency[] = [
  { id: "eth", name: "ETH", fullName: "Ethereum", icon: "/eth.svg", color: "from-purple-400 to-purple-600" },
  { id: "btc", name: "BTC", fullName: "Bitcoin", icon: "₿", color: "from-orange-400 to-orange-600" },
  { id: "usdt-celo", name: "USDT - CELO", fullName: "Tether CELO", icon: "/celo.svg", color: "from-yellow-400 to-yellow-500" },
  { id: "usdt-ton", name: "USDT - TON", fullName: "Tether TON", icon: "/ton.svg", color: "from-blue-400 to-blue-500" },
  { id: "usdt-bnb", name: "USDT - BNB", fullName: "Tether BNB", icon: "/bnb.svg", color: "from-yellow-500 to-yellow-600" },
];

export const receiveCurrencies: Currency[] = [
  { id: "ngn", name: "NGN", fullName: "Nigerian Naira", icon: "/nigeriaFlag.svg", color: "from-green-400 to-green-600" },
  { id: "usdt-celo", name: "USDT - CELO", fullName: "Tether CELO", icon: "/celo.svg", color: "from-yellow-400 to-yellow-500" },
  { id: "usdt-ton", name: "USDT - TON", fullName: "Tether TON", icon: "/ton.svg", color: "from-blue-400 to-blue-500" },
  { id: "usdt-bnb", name: "USDT - BNB", fullName: "Tether BNB", icon: "/bnb.svg", color: "from-yellow-500 to-yellow-600" },
];

export const walletOptions: WalletOption[] = [
  { id: "metamask", name: "Metamask", icon: "/metamask.svg" },
  { id: "rainbow", name: "Rainbow", icon: "/rainbow.svg" },
  { id: "walletconnect", name: "WalletConnect", icon: "/walletconnet.svg" },
  { id: "other", name: "Other Crypto Wallets (Binance, Coinbase, Bybit etc)", icon: "/wallet.svg" },
];

export const paymentOptions: WalletOption[] = [
  { id: "metamask", name: "Metamask", icon: "/metamask.svg" },
  { id: "rainbow", name: "Rainbow", icon: "/rainbow.svg" },
  { id: "walletconnect", name: "WalletConnect", icon: "/walletconnet.svg" },
  { id: "other", name: "Other Crypto Wallets (Binance, Coinbase, Bybit etc)", icon: "/wallet.svg" },
];
