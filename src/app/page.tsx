"use client"
import React, { useState } from 'react'
import Tabs from '@/components/ui/Tabs'
import CryptoToCash from '@/components/views/CryptoToCash'
import CashToCrypto from '@/components/views/CashToCrypto'
import CryptoToFiatLoan from '@/components/views/CryptoToFiatLoan'

const Homepage = () => {
  const [activeTab, setActiveTab] = useState<'crypto-to-cash' | 'cash-to-crypto' | 'crypto-to-fiat-loan'>('crypto-to-cash')

  const tabs = [
    { id: 'crypto-to-cash' as const, label: 'Crypto to cash' },
    { id: 'cash-to-crypto' as const, label: 'Cash to crypto' },
    { id: 'crypto-to-fiat-loan' as const, label: 'Crypto to fiat loan' },
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'crypto-to-cash':
        return <CryptoToCash />
      case 'cash-to-crypto':
        return <CashToCrypto />
      case 'crypto-to-fiat-loan':
        return <CryptoToFiatLoan />
      default:
        return <CryptoToCash />
    }
  }

  return (
    <section className='flex justify-center items-center min-h-screen py-4 px-4 md:px-0 md:py-0 md:h-screen'>
      <div className='md:w-160 w-full max-w-full flex flex-col px-4 py-6 md:px-16 md:py-14 gap-6 md:gap-10 rounded-4xl md:rounded-[30px] bg-white border border-[#CCF6E5]'>
        {/* tabs */}
        <div className="flex bg-[#F2F2F2] rounded-4xl md:rounded-[30px] overflow-hidden p-0.5 md:p-1 gap-0.5 md:gap-1">
          {tabs.map((tab) => (
            <Tabs
              key={tab.id}
              label={tab.label}
              isActive={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            />
          ))}
        </div>

        {/* content */}
        <div className="w-full">
          {renderContent()}
        </div>
      </div>
    </section>
  )
}

export default Homepage