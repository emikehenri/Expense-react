##Frontend
/client
│── /public
│── /src
│   │── /components  # Reusable UI components
│   │── /pages       # Main pages (Dashboard, Login, etc.)
│   │── /context     # Global state management (if using Context API)
│   │── /hooks       # Custom hooks (if any)
│   │── /utils       # Helper functions
│   │── /styles      # CSS or Tailwind configurations
│   │── App.js
│   │── main.jsx
│── package.json
│── tailwind.config.js (if using Tailwind CSS)
│── vite.config.js (if using Vite)

##Backend
/server
│── /config       # Database connection & environment setup
│── /controllers  # Business logic for routes
│── /models       # Database schemas/models
│── /routes       # Express routes
│── /middleware   # Middleware (auth, error handling, etc.)
│── /utils        # Utility functions
│── server.js     # Main entry file
│── package.json
│── .env          # Environment variables

