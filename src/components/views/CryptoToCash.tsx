'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import CurrencyInput from './CryptoToCash/CurrencyInput';
import WalletSelector from './CryptoToCash/WalletSelector';
import {
  payCurrencies,
  receiveCurrencies,
  walletOptions,
  paymentOptions,
} from './CryptoToCash/constants';

const CryptoToCash = () => {
  const [youPay, setYouPay] = useState('1.00');
  const [youReceive, setYouReceive] = useState('1.00');
  const [selectedPayCurrency, setSelectedPayCurrency] = useState('eth');
  const [selectedReceiveCurrency, setSelectedReceiveCurrency] = useState('ngn');
  const [payFrom, setPayFrom] = useState('');
  const [payTo, setPayTo] = useState('');

  return (
    <div className="w-full flex flex-col gap-4 sm:gap-5 md:gap-6 items-start">
      <CurrencyInput
        label="You pay"
        value={youPay}
        onChange={setYouPay}
        selectedCurrencyId={selectedPayCurrency}
        onCurrencyChange={setSelectedPayCurrency}
        currencies={payCurrencies}
      />

      <CurrencyInput
        label="You receive"
        value={youReceive}
        onChange={setYouReceive}
        selectedCurrencyId={selectedReceiveCurrency}
        onCurrencyChange={setSelectedReceiveCurrency}
        currencies={receiveCurrencies}
      />

      <WalletSelector
        label="Pay from"
        value={payFrom}
        onChange={setPayFrom}
        options={walletOptions}
      />

      <WalletSelector
        label="Pay to"
        value={payTo}
        onChange={setPayTo}
        options={paymentOptions}
      />

      <button
        onClick={() => {
          toast.success('Conversion initiated!', {
            description: `Converting ${youPay} ${selectedPayCurrency.toUpperCase()} to ${youReceive} ${selectedReceiveCurrency.toUpperCase()}`,
          });
        }}
        className="w-full h-12 sm:h-14 bg-primary-100 hover:bg-primary-100 text-white text-sm sm:text-base font-semibold rounded-full transition-colors shadow-lg hover:shadow-xl"
      >
        Convert now
      </button>
    </div>
  );
};

export default CryptoToCash;