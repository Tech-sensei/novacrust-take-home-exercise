'use client';

import { useState } from 'react';
import { toast } from 'sonner';

const CashToCrypto = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission here
    console.log('Email submitted:', email);
    toast.success('Thank you!', {
      description: 'We\'ll notify you when Cash to Crypto is live.',
    });
    setEmail('');
  };

  return (
    <div className="w-full flex flex-col items-center gap-8">
      {/* Coming Soon Heading */}
      <div className="flex flex-col items-center gap-2 text-center">
        <h2 className="text-[32px] font-medium text-primary-100 mb-3">Coming Soon!</h2>
        <p className="text-lg leading-normal font-outfit font-normal text-[#4F4F4F]">Cash to Crypto is almost here. <br />Enter your email and we&apos;ll let you know the moment it&apos;s live.</p>
      </div>

      {/* Email Form */}
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-14">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-base leading-normal font-outfit font-medium text-primary-100">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-6 py-4 h-15 flex items-center justify-center rounded-[30px] bg-white border border-[#E0E0E0] focus:outline-none text-base leading-normal font-outfit font-normal text-[#828282] placeholder:text-[#828282] placeholder:text-base placeholder:leading-normal placeholder:font-outfit placeholder:font-normal"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-10 py-5 flex items-center justify-center rounded-[30px] bg-primary-100 text-[#E6FBF2] hover:opacity-95 transition-opacity text-base leading-normal font-outfit font-bold cursor-pointer"
        >
          Update me
        </button>
      </form>
    </div >
  );
};

export default CashToCrypto;

