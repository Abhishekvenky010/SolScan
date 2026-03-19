# SolScan - Solana Blockchain Explorer

A modern, feature-rich Solana blockchain explorer built with React Native and Expo. SolScan provides users with an intuitive interface to explore wallet balances, transaction histories, token details, and more on the Solana network.

## Features

### 📱 Core Functionality
- **Wallet Explorer**: Search and view Solana wallet balances, tokens, and transaction history
- **Watchlist**: Save favorite wallet addresses for quick access
- **Token Details**: View detailed information about Solana tokens by mint address
- **Swap Interface**: Interactive token swap simulation with real-time price updates
- **Network Support**: Switch between Solana Mainnet and Devnet
- **Mobile Wallet Integration**: Connect to Solana wallets using Mobile Wallet Adapter
- **Transaction History**: View and analyze wallet transaction history with timestamps

### 🎨 Design Highlights
- Modern, clean interface with gradient backgrounds
- Smooth animations and transitions
- Responsive design for mobile devices
- Dark/Light theme support
- Intuitive navigation with bottom tabs

## Tech Stack

- **React Native**: Cross-platform mobile development
- **Expo**: Development platform for React Native
- **Expo Router**: File-based routing
- **Solana Web3.js**: Solana blockchain integration
- **Zustand**: State management
- **Ionicons**: Icon library from Expo
- **Async Storage**: Local data persistence

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- Expo Go app installed on your mobile device or an emulator
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd SolScan
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Run on your device or emulator:
- Scan the QR code with Expo Go (iOS/Android)
- Press `a` to run on Android emulator
- Press `i` to run on iOS simulator

## Project Structure

```
SolScan/
├── app/                          # Expo Router pages
│   ├── _layout.tsx               # Root layout
│   ├── watchlist.tsx             # Watchlist screen
│   ├── (tabs)/                   # Bottom tab screens
│   │   ├── _layout.tsx           # Tab layout
│   │   ├── index.tsx             # Wallet explorer (home)
│   │   ├── swap.tsx              # Token swap interface
│   │   └── settings.tsx          # Settings screen
│   └── token/
│       └── [mint].tsx            # Token details screen
├── src/
│   ├── components/               # Reusable components
│   │   ├── ConnectButton.tsx     # Wallet connection button
│   │   └── FavoriteButton.tsx    # Favorite toggle button
│   ├── hooks/
│   │   └── useWallet.ts          # Wallet connection hook
│   └── stores/
│       └── wallet-store.ts       # Zustand state management
├── assets/                       # Static resources
├── package.json                  # Dependencies
└── tsconfig.json                 # TypeScript config
```

## Key Components

### Wallet Explorer
The main screen for exploring Solana wallets. Features include:
- Address search functionality
- Real-time balance display
- Token holdings with values
- Transaction history with details
- Add to watchlist functionality
- Network toggle (Mainnet/Devnet)

### Watchlist
Keep track of your favorite wallet addresses with:
- Automatic balance updates
- Quick access to wallet details
- Refresh functionality
- Delete from watchlist option

### Token Details
View comprehensive token information:
- Token name, symbol, and logo
- Total supply
- Token mint address
- Current price
- Holders and transfers

### Swap Interface
Interactive token swapping experience:
- Real-time price calculations
- Token selection
- Swap simulation
- Input validation

## Configuration

### Network Settings
By default, the app connects to Solana Mainnet. Users can switch to Devnet via the settings screen for testing purposes.

### RPC Endpoints
The app uses public RPC endpoints:
- **Mainnet**: `https://api.mainnet-beta.solana.com`
- **Devnet**: `https://api.devnet.solana.com`

## Development

### Adding New Features

1. Create new screens in the `app/` directory
2. Add components to `src/components/`
3. Manage state with Zustand in `src/stores/`
4. Add custom hooks to `src/hooks/`

### Styling
Use React Native StyleSheet for styling. The app follows a consistent design system with:
- Primary colors: Blue gradients (#2B6CB0 to #2C5282)
- Accent colors: Purple (#9945FF)
- Neutral colors: White, gray shades

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Create a pull request

## License

MIT License

## Acknowledgments

- Solana Foundation for blockchain technology
- Expo for development tools
- React Native community for resources and support

## Support

For issues, feature requests, or questions:
1. Check the [Issues](../../issues) page
2. Create a new issue
3. Or contact the development team

---

**Note**: This is a mobile application built with React Native and Expo. It is designed to run on iOS and Android devices.
