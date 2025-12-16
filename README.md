# Novacrust Take-Home Exercise

A Next.js application for cryptocurrency exchange and loan services, featuring a modern UI with tabbed navigation for different transaction types.

## Features

- **Crypto to Cash**: Convert cryptocurrency to fiat currency (NGN)
- **Cash to Crypto**: Coming soon - Convert fiat currency to cryptocurrency
- **Crypto to Fiat Loan**: Coming soon - Loan services using cryptocurrency as collateral

### Key Components

- Currency selection with support for multiple cryptocurrencies (ETH, BTC, USDT variants)
- Wallet selector for various wallet providers (MetaMask, Rainbow, WalletConnect, etc.)
- Toast notifications using Sonner
- Responsive design with mobile-first approach
- Tab-based navigation between different services

## Setup Instructions

### Prerequisites

- Node.js 20.x or higher
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd novacrust-take-home-exercise
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Tech Stack

- **Framework**: Next.js 16.0.10 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Components**:
  - Radix UI (Select component)
  - Custom components with shadcn/ui style
- **Icons**: Lucide React
- **Notifications**: Sonner
- **Font**: Outfit (Google Fonts)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with Toaster
│   ├── page.tsx            # Main page with tab navigation
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── select.tsx
│   │   ├── sonner.tsx      # Toast notification configuration
│   │   └── Tabs.tsx
│   └── views/              # Page-level components
│       ├── CryptoToCash/
│       │   ├── constants.ts
│       │   ├── CurrencyInput.tsx
│       │   └── WalletSelector.tsx
│       ├── CryptoToCash.tsx
│       ├── CashToCrypto.tsx
│       └── CryptoToFiatLoan.tsx
└── lib/
    └── utils.ts            # Utility functions
```

## Assumptions and Trade-offs

### Assumptions

1. **Static Currency Data**: Currency options and exchange rates are hardcoded in constants. In a production environment, these would typically be fetched from an API or blockchain.

2. **No Real Conversion Logic**: The conversion functionality displays a toast notification but doesn't perform actual currency conversion calculations. The "You receive" value is independent of the "You pay" value.

3. **No Wallet Integration**: Wallet selectors are UI-only components. No actual wallet connection or blockchain interaction is implemented.

4. **No Form Validation**: Input validation for currency amounts, email addresses, and wallet selection is not implemented.

5. **No Backend Integration**: All functionality is client-side only. No API calls or backend services are integrated.

6. **Email Collection**: The "Coming Soon" forms collect emails but only display a toast notification. No actual email submission or storage is implemented.

7. **Design System**: The project uses a custom design system with Tailwind CSS, assuming specific color tokens (primary-100, accent-80, etc.) are defined in the global CSS.

### Trade-offs

1. **Simplicity over Complexity**:

   - Chose static data over dynamic API integration for faster development
   - Used client-side state management instead of a state management library (Redux, Zustand, etc.)

2. **UI/UX Focus**:

   - Prioritized visual design and user experience over functional implementation
   - Implemented responsive design patterns but may need refinement for edge cases

3. **Component Architecture**:

   - Created reusable components (CurrencyInput, WalletSelector) but kept them simple
   - Could be further abstracted with more props and configuration options

4. **Type Safety**:

   - Used TypeScript for type safety but kept types minimal
   - Could benefit from more comprehensive type definitions for currency and wallet data

5. **Accessibility**:

   - Basic accessibility considerations (semantic HTML, keyboard navigation)
   - Could be enhanced with ARIA labels, focus management, and screen reader optimizations

6. **Performance**:

   - No code splitting or lazy loading implemented
   - All components load upfront, which is acceptable for a small application

7. **Error Handling**:
   - Minimal error handling implemented
   - No error boundaries or fallback UI for failed operations

## Future Enhancements

- Implement real currency conversion API integration
- Add wallet connection functionality (Web3 integration)
- Implement form validation and error handling
- Add loading states for async operations
- Integrate backend API for email collection and transaction processing
- Add unit and integration tests
- Implement proper error boundaries
- Add internationalization (i18n) support
- Enhance accessibility features
- Add analytics and tracking

## License

This project is part of a take-home exercise and is for assessment purposes.
