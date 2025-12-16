'use client';

const Tabs = ({ label, isActive, onClick }: { label: string, isActive: boolean, onClick: () => void }) => (
    <button
        onClick={onClick}
        className={`px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-[100px] w-full font-outfit font-medium text-[10px] sm:text-xs md:text-sm leading-tight sm:leading-normal transition-all duration-300 whitespace-nowrap ${isActive ? "bg-primary-100 text-white" : "text-[#828282] bg-transparent cursor-pointer"
            }`}
    >
        {label}
    </button>
);

export default Tabs;