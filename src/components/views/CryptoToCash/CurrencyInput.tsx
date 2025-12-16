'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, Search } from 'lucide-react';

interface Currency {
    id: string;
    name: string;
    fullName: string;
    icon: string;
    color: string;
}

interface CurrencyInputProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    selectedCurrencyId: string;
    onCurrencyChange: (currencyId: string) => void;
    currencies: Currency[];
}

const CurrencyInput = ({
    label,
    value,
    onChange,
    selectedCurrencyId,
    onCurrencyChange,
    currencies,
}: CurrencyInputProps) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [search, setSearch] = useState('');

    const selectedCurrency = currencies.find(c => c.id === selectedCurrencyId);
    const filteredCurrencies = currencies.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );

    const handleCurrencySelect = (currencyId: string) => {
        onCurrencyChange(currencyId);
        setShowDropdown(false);
        setSearch('');
    };

    return (
        <div className="flex flex-col p-4 sm:p-5 md:p-6 items-start justify-center gap-2 rounded-[20px] sm:rounded-[25px] md:rounded-[30px] bg-white border border-[#E0E0E0] w-full relative">
            <p className="text-sm sm:text-base text-primary-100 leading-normal font-outfit font-medium">
                {label}
            </p>
            <div className="flex justify-between items-center w-full gap-2">
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="text-xl sm:text-2xl font-semibold text-[#000E10] leading-normal outline-none bg-transparent flex-1 min-w-0"
                    placeholder="0.00"
                />
                <div className="relative shrink-0">
                    <button
                        onClick={() => setShowDropdown(!showDropdown)}
                        className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-[#F5F5F5] rounded-4xl hover:bg-[#E0E0E0] transition-colors"
                    >
                        {selectedCurrency && (
                            <>
                                <div className={`w-4 h-4 sm:w-5 sm:h-5 bg-linear-to-br ${selectedCurrency.color} rounded-full flex items-center justify-center overflow-hidden`}>
                                    {selectedCurrency.icon?.startsWith('/') ? (
                                        <Image
                                            src={selectedCurrency.icon}
                                            alt={selectedCurrency.fullName}
                                            width={20}
                                            height={20}
                                            className="w-full h-full object-contain"
                                        />
                                    ) : (
                                        <span className="text-white text-[10px] sm:text-xs font-bold">
                                            {selectedCurrency.icon}
                                        </span>
                                    )}
                                </div>
                                <span className="font-medium text-xs sm:text-sm text-primary-100 hidden sm:inline">{selectedCurrency.name}</span>
                            </>
                        )}
                        <ChevronDown
                            className={`w-3 h-3 sm:w-4 sm:h-4 text-gray-600 transition-transform ${showDropdown ? 'rotate-180' : ''}`}
                        />
                    </button>

                    {/* Currency Dropdown */}
                    {showDropdown && (
                        <div className="absolute right-0 top-full mt-2 w-[calc(100vw-2rem)] sm:w-64 max-w-64 bg-white rounded-2xl shadow-xl border border-[#E0E0E0] p-3 sm:p-4 z-50">
                            {/* Search Input */}
                            <div className="relative mb-2 sm:mb-3">
                                <Search className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-1.5 sm:py-2 border border-[#E0E0E0] rounded-lg text-xs sm:text-sm outline-none focus:border-primary-100"
                                />
                            </div>

                            {/* Currency List */}
                            <div className="space-y-0.5 sm:space-y-1">
                                {filteredCurrencies.map((coin) => (
                                    <button
                                        key={coin.id}
                                        onClick={() => handleCurrencySelect(coin.id)}
                                        className="w-full flex items-center gap-2 sm:gap-3 p-2 sm:p-3 hover:bg-gray-50 rounded-lg transition-colors text-left"
                                    >
                                        <div className={`w-6 h-6 sm:w-8 sm:h-8 bg-linear-to-br ${coin.color} rounded-full flex items-center justify-center overflow-hidden shrink-0`}>
                                            {coin.icon?.startsWith('/') ? (
                                                <Image
                                                    src={coin.icon}
                                                    alt={coin.fullName}
                                                    width={32}
                                                    height={32}
                                                    className="w-full h-full object-contain"
                                                />
                                            ) : (
                                                <span className="text-white text-xs sm:text-sm font-bold">{coin.icon}</span>
                                            )}
                                        </div>
                                        <span className="text-xs sm:text-sm font-medium text-primary-100">{coin.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CurrencyInput;

