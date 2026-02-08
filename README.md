# Coin Counter

A React application for tracking coin collections and totals, built with Vite and Material-UI.

Prologue and Genesis:

- I spent a really long time in 2021 organizing all of my coins to exchange them at the bank (no, I don't want to use Coinstar).
- Improvement was to create color-coded spreadsheet linked to a QR code that I could scan with my phone every time I added a coin.
- This is the latest and best iteration of a useful utility that helps me track how many coins I have so that I can know when to go trade them in.

## Demo

https://github.com/user-attachments/assets/080909ca-0da5-4679-a284-045cdd2ca868

## Features

- Track coin additions and totals
- View coin inventory by type (quarters, dimes, nickels, pennies)
- Add new coin entries with automatic timestamps
- Filter entries by date range or count
- Delete entries with confirmation
- Real-time total calculations with color-coded coin indicators
- Notification system for user feedback

## Technologies Used

- React 19
- Vite
- Material-UI (MUI)
- JSON Server for mock API
- Axios for HTTP requests
- Vitest for testing

## Testing

Minimal testing exists to cover key helpers and basic of API service layer.

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
3. Initialize the database:
   The application uses JSON Server with a `db.json` file to store coin entries. Create an empty database file with the correct structure:
   ```bash
   echo '{"entries": []}' > db.json
   ```
   This file will be created locally and is not tracked in version control (see `.gitignore`).

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

| Command           | Description                                                |
| ----------------- | ---------------------------------------------------------- |
| `npm start`       | Start both development server and JSON server concurrently |
| `npm run dev`     | Start the Vite development server only                     |
| `npm run server`  | Start the JSON server with the coin data only              |
| `npm run build`   | Build the application for production                       |
| `npm run preview` | Preview the production build locally                       |
| `npm run lint`    | Run ESLint to check code quality                           |
| `npm test`        | Run the test suite with Vitest                             |

## Project Structure

```
src/
├── main.jsx                    # Application entry point
├── App.jsx                     # Root component with state management
├── Body.jsx                    # Main content wrapper
├── Header.jsx                  # Header component
├── Footer.jsx                  # Footer component
├── services.js                 # API service layer
├── components/
│   ├── NewEntryForm.jsx        # Form for adding coin entries
│   ├── Notification.jsx        # Toast notification component
│   ├── entries/
│   │   ├── Entries.jsx         # Entry table display
│   │   ├── Entries.helpers.js  # Table filtering logic
│   │   └── TableFilter.jsx     # Filter controls
│   └── totals/
│       ├── Totals.jsx          # Totals section wrapper
│       ├── Total.jsx           # Grand total calculator
│       └── CoinDisplay.jsx     # Per-coin totals display
├── utils/
│   └── utils.js                # Utility functions
└── styles/
    ├── index.css               # Global styles
    └── variables.css           # CSS custom properties
```

## Architecture

The application follows a simple component-based architecture:

1. **Data Flow**: App fetches entries from JSON Server, passes them down to child components
2. **State Management**: React hooks (useState, useEffect) for local state
3. **API Layer**: Centralized service module handles all HTTP requests
4. **Styling**: Mix of CSS variables, inline styles, and Material-UI components
