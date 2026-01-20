# Coin Counter

A React application for tracking coin collections and totals, built with Vite and Material-UI.

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm

### Installation

1. Clone the repository and navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

#### Option 1: Single Command (Recommended)

Run the application with a single command:
```bash
npm start
```

This will start both the React development server and the JSON server backend simultaneously.

#### Option 2: From Anywhere on Your Computer

If you want to run the app from anywhere on your computer, execute the provided shell script:
```bash
./start-coin-counter.sh
```

#### Option 3: Manual Commands

If you need to run the servers separately:

```bash
# Terminal 1: Start the React development server
npm run dev

# Terminal 2: Start the JSON server backend
npm run server
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:3000

## Available Scripts

- `npm start` - Start both development server and JSON server concurrently
- `npm run dev` - Start the Vite development server
- `npm run server` - Start the JSON server with the coin data
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Features

- Track coin additions and totals
- View coin inventory by type (quarters, dimes, nickels, pennies)
- Add new coin entries with dates
- Filter entries by date
- Responsive Material-UI interface

## Technologies Used

- React 19
- Vite
- Material-UI (MUI)
- JSON Server for mock API
- Axios for HTTP requests
