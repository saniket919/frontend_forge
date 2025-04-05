# Dashboard Application

A modern dashboard application built with React, Vite, and Tailwind CSS.

## Project Structure

```
src/
  ├── components/         # Reusable UI components
  │   ├── layout/        # Layout components
  │   └── ui/            # UI components
  ├── pages/             # Page components
  ├── hooks/             # Custom React hooks
  ├── utils/             # Utility functions
  ├── assets/            # Static assets
  └── styles/            # Global styles
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy the `.env.example` file to a new file named `.env`
   - Fill in your Firebase configuration values in the `.env` file
   ```bash
   cp .env.example .env
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```

## Environment Variables

The following environment variables are required:

- `VITE_FIREBASE_API_KEY`: Your Firebase API key
- `VITE_FIREBASE_AUTH_DOMAIN`: Your Firebase authentication domain
- `VITE_FIREBASE_PROJECT_ID`: Your Firebase project ID
- `VITE_FIREBASE_STORAGE_BUCKET`: Your Firebase storage bucket
- `VITE_FIREBASE_MESSAGING_SENDER_ID`: Your Firebase messaging sender ID
- `VITE_FIREBASE_APP_ID`: Your Firebase app ID
- `VITE_FIREBASE_MEASUREMENT_ID`: Your Firebase measurement ID

## Technologies Used

- React
- Vite
- Tailwind CSS
- PostCSS
- Autoprefixer
- Firebase Authentication
- React Router
