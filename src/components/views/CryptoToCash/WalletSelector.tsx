'use client';

import Image from 'next/image';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

interface WalletOption {
    id: string;
    name: string;
    icon: string | null;
}

interface WalletSelectorProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    options: WalletOption[];
}

const WalletSelector = ({ label, value, onChange, options }: WalletSelectorProps) => {
    const selectedOption = options.find(opt => opt.id === value);

    return (
        <div className="w-full">
            <p className="text-sm sm:text-base text-primary-100 leading-normal font-outfit font-medium mb-2">
                {label}
            </p>
            <Select value={value} onValueChange={onChange}>
                <SelectTrigger className="w-full h-12 sm:h-14 rounded-[20px] sm:rounded-[25px] md:rounded-[30px] border-[#E0E0E0] bg-white px-4 sm:px-5 md:p-6 py-3 sm:py-4 md:py-6 text-primary-100 font-medium">
                    {value ? (
                        <div className="flex items-center gap-2 sm:gap-3 w-full">
                            {selectedOption?.icon && (
                                <Image
                                    src={selectedOption.icon}
                                    alt={selectedOption.name}
                                    width={20}
                                    height={20}
                                    className="w-4 h-4 sm:w-5 sm:h-5 object-contain shrink-0"
                                />
                            )}
                            <span className="font-medium text-xs sm:text-sm text-primary-100 truncate">{selectedOption?.name}</span>
                        </div>
                    ) : (
                        <SelectValue placeholder="Select an option" className="text-primary-100 text-xs sm:text-sm" />
                    )}
                </SelectTrigger>
                <SelectContent className="rounded-2xl border-[#E0E0E0] bg-white p-2">
                    {options.map((option) => (
                        <SelectItem
                            key={option.id}
                            value={option.id}
                            className="cursor-pointer rounded-lg px-3 sm:px-4 py-2 sm:py-3 hover:bg-gray-50"
                        >
                            <div className="flex items-center gap-2 sm:gap-3">
                                {option.icon ? (
                                    <Image
                                        src={option.icon}
                                        alt={option.name}
                                        width={20}
                                        height={20}
                                        className="w-4 h-4 sm:w-5 sm:h-5 object-contain shrink-0"
                                    />
                                ) : (
                                    <span className="text-lg sm:text-xl">💼</span>
                                )}
                                <span className="font-medium text-xs sm:text-sm text-primary-100">{option.name}</span>
                            </div>
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
};

export default WalletSelector;

