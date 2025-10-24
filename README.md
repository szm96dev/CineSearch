# CineSearch 🎬

A modern, production-ready movie discovery platform built with React and TailwindCSS. CineSearch provides a seamless movie exploration experience with powerful search, detailed information, and personalized favorites management.

![React](https://img.shields.io/badge/React-61dafb?style=flat&logo=react) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38bdf8?style=flat&logo=tailwindcss) ![Axios](https://img.shields.io/badge/Axios-5a29e4?style=flat&logo=axios) ![OMDb API](https://img.shields.io/badge/OMDb_API-ff6b6b?style=flat&logo=api) ![JavaScript](https://img.shields.io/badge/JavaScript-f7df1e?style=flat&logo=javascript)

## ✨ Features

### 🔍 Movie Discovery
- **Powerful Search** - Real-time movie search with instant results
- **Smart Results** - Detailed movie information with posters and metadata
- **Advanced Filtering** - Search by title, year, and movie type
- **Error Handling** - Graceful error messages and empty states
- **Loading States** - Smooth loading indicators and skeleton screens

### 📱 Movie Details
- **Comprehensive Information** - Plot, cast, director, genre, and ratings
- **IMDb Integration** - Official ratings and vote counts from IMDb
- **Multiple Ratings** - IMDb, Rotten Tomatoes, Metacritic ratings
- **High-quality Posters** - Movie posters with intelligent fallback images
- **Responsive Design** - Optimized for all device sizes

### ❤️ Favorites Management
- **Save Favorites** - Add movies to your personal collection
- **Persistent Storage** - Favorites saved to localStorage across sessions
- **Collection Management** - Remove individual favorites or clear all
- **Quick Access** - Dedicated favorites page with grid layout
- **Visual Indicators** - Heart icons show favorite status

### 🎨 User Experience
- **Dark/Light Mode** - Toggle between themes with smooth transitions
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Modern UI/UX** - Clean, minimalist design with perfect spacing
- **Smooth Animations** - Elegant transitions and hover effects
- **Professional Polish** - Production-ready interface design

## 🚀 Tech Stack

### Frontend Core
- **React** - Modern UI library with hooks and functional components
- **React Hooks** - useState, useEffect, useContext for state management
- **React Router DOM** - Client-side routing and navigation
- **React.memo** - Performance optimization for component re-renders

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Custom CSS** - Smooth animations and transitions
- **Responsive Design** - Mobile-first approach with breakpoint optimization
- **Dark Mode** - Theme system with localStorage persistence

### API Integration
- **Axios** - HTTP client with interceptors for API requests
- **OMDb API** - Free movie database with comprehensive information
- **Error Handling** - Comprehensive error boundaries and validation
- **API Key Management** - Secure environment variable handling

### State Management
- **React Context** - Global state management for favorites
- **Custom Hooks** - useDarkMode, useFavorites for reusable logic
- **localStorage** - Browser storage for data persistence
- **State Optimization** - Efficient state updates and re-renders

### Development Tools
- **React Scripts** - Create React App build scripts
- **PostCSS** - CSS transformations and optimizations
- **Autoprefixer** - Automatic CSS vendor prefixing
- **ESLint** - Code quality and consistency

## 📁 Project Structure

```
src/
├── components/              # React components
│   ├── ui/                 # Reusable UI component library
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Input.jsx
│   │   ├── EmptyState.jsx
│   │   ├── RatingBadge.jsx
│   │   ├── SectionHeader.jsx
│   │   ├── MovieInfo.jsx
│   │   ├── BackButton.jsx
│   │   └── index.js
│   ├── MovieCard.jsx       # Movie card component
│   ├── MovieDetail.jsx     # Detailed movie view
│   ├── MovieSearch.jsx     # Search functionality
│   ├── Navbar.jsx          # Navigation bar
│   ├── LoadingSpinner.jsx  # Loading indicator
│   └── DarkModeToggle.jsx  # Theme toggle button
│
├── pages/                  # Page components
│   ├── Home.jsx            # Search page
│   ├── Favorites.jsx       # Favorites page
│   ├── MovieDetail.jsx     # Movie detail page
│   └── NotFound.jsx        # 404 error page
│
├── contexts/               # React contexts
│   └── FavoritesContext.js # Favorites state management
│
├── hooks/                  # Custom React hooks
│   └── useDarkMode.js      # Theme management with localStorage
│
├── services/               # API services
│   ├── apiClient.js        # Axios configuration
│   └── movieService.js     # Movie API calls
│
├── utils/                  # Utility functions
│   └── cn.js              # Class name utility for Tailwind
│
├── constants/              # Application constants
│   ├── storage.js          # localStorage keys and default values
│   └── index.js            # Constants export
│
├── App.js                  # Main application component
├── index.js                # Application entry point
└── index.css               # Global styles and Tailwind directives
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- OMDb API key (free)

### Installation

```bash
# Clone the repository
git clone https://github.com/szm96dev/CineSearch.git

# Navigate to project directory
cd CineSearch

# Install dependencies
npm install

# Get OMDb API Key
# Visit http://www.omdbapi.com/apikey.aspx
# Register for a free API key

# Start development server
npm start
```

The app will be available at `http://localhost:3000`

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```bash
# Required: OMDb API Key
REACT_APP_OMDB_API_KEY=your_omdb_api_key_here

# Optional: OMDb API Base URL (defaults to https://www.omdbapi.com)
REACT_APP_OMDB_BASE_URL=https://www.omdbapi.com
```

**Get your free OMDb API key at:** [http://www.omdbapi.com/apikey.aspx](http://www.omdbapi.com/apikey.aspx)

### Build for Production

```bash
# Create optimized production build
npm run build

# The build folder will contain optimized static files
```

## 🎨 UI/UX Highlights

- **Professional Design** - Clean, modern interface with perfect spacing
- **Consistent Card Layout** - Uniform movie cards with equal heights
- **Smooth Animations** - Elegant hover effects and theme transitions
- **Responsive Layout** - Optimized for all device sizes
- **Dark Mode** - Eye-friendly dark theme with smooth transitions
- **Visual Hierarchy** - Clear information architecture and typography
- **Touch Friendly** - Optimized for mobile interactions
- **Loading States** - Professional loading indicators and empty states

## ⚡ Performance Optimizations

- **React.memo** - Prevents unnecessary component re-renders
- **useCallback** - Optimized event handlers and functions
- **Code Splitting** - Efficient bundle size and loading
- **localStorage Optimization** - Efficient data persistence
- **Fast Loading** - Optimized for quick startup
- **Efficient Styles** - Minimal and clean CSS with Tailwind
- **Image Optimization** - Smart fallbacks for movie posters
- **API Caching** - Efficient request handling with Axios interceptors

## 🎯 Key Features Explained

### Search Functionality
- **Real-time Search** - Instant results as you type
- **Error Handling** - Graceful handling of API failures
- **Loading States** - Visual feedback during searches
- **No Results** - User-friendly empty states

### Movie Details
- **Comprehensive Data** - Plot, cast, ratings, runtime
- **Multiple Ratings** - IMDb, Rotten Tomatoes, Metacritic
- **High-quality Images** - Movie posters with fallbacks
- **Responsive Design** - Works on all screen sizes

### Favorites System
- **Local Storage** - Persists across browser sessions
- **Add/Remove** - Toggle favorites with one click
- **Bulk Actions** - Clear all favorites
- **Visual Indicators** - Heart icons show favorite status

## 🎨 UI/UX Features

### Responsive Design
- **Mobile First** - Optimized for mobile devices
- **Flexible Grid** - Adapts to different screen sizes
- **Touch Friendly** - Large touch targets for mobile
- **Fast Loading** - Optimized images and code

### Animations
- **Smooth Transitions** - Hover effects and state changes
- **Loading Animations** - Spinners and skeleton screens
- **Fade Effects** - Smooth content transitions
- **Micro-interactions** - Button and card animations

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Build the project: `npm run build`
2. Deploy the `build` folder to Netlify
3. Add environment variables in Netlify dashboard
4. Your app is live!

### Deploy to Vercel
1. Connect your GitHub repository
2. Add environment variables
3. Deploy automatically on push


## 🎓 Skills Demonstrated

This project showcases proficiency in:

- ✅ Modern React development with hooks
- ✅ Custom hook creation and state management
- ✅ Component architecture and reusability
- ✅ Tailwind CSS utility-first styling
- ✅ Responsive design and mobile optimization
- ✅ Performance optimization techniques
- ✅ localStorage integration and data persistence
- ✅ API integration with error handling
- ✅ Theme system implementation
- ✅ Professional UI/UX design
- ✅ Code organization and architecture
- ✅ Production-ready code practices

## 🎯 Production Ready

- ✅ **Clean Code** - Well-organized and maintainable
- ✅ **Performance** - Fast and optimized
- ✅ **Responsive** - Works perfectly on all device sizes
- ✅ **User Friendly** - Intuitive interface and smooth experience
- ✅ **Error Handling** - Comprehensive error management
- ✅ **Accessibility** - WCAG compliant design
- ✅ **SEO Optimized** - Proper meta tags and structure

## 🛠️ Available Scripts

### `npm start`
Runs the app in development mode at `http://localhost:3000`

### `npm test`
Launches the test runner in interactive watch mode

### `npm run build`
Builds the app for production to the `build` folder

### `npm run eject`
Ejects from Create React App (one-way operation)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**SiKaNDaR ZuBaIr MaYo**
- GitHub: [@szm96dev](https://github.com/szm96dev)
- LinkedIn: [Sikandar Zubair Mayo](https://www.linkedin.com/in/szm96dev/)
- Portfolio: [Sikandar Portfolio](https://szm96dev.github.io/)

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

Built with ❤️ using React, TailwindCSS, and the OMDb API
