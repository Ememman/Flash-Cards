# FlashCards – Interactive JavaScript Learning App

An interactive flashcard application built with **React.js, Vite, and Tailwind CSS**. Designed to help users practice JavaScript concepts through question-and-answer flashcards, card-flipping animations, and progress tracking.

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/f34d0d7c-9674-4cbd-8d50-5dbfc52e9746" />


## Overview

FlashCards is a simple learning application that allows users to review predefined JavaScript questions and answers one card at a time. It provides an interactive study experience through reusable React components, state management, and responsive UI design.

This project focuses on understanding component-based architecture, React Hooks, props, event handling, and dynamic rendering.

## Features

- **Predefined Flashcards** – Contains JavaScript questions and answers covering different programming concepts.
- **Interactive Flashcards** – Flip cards to reveal answers and return to the original questions.
- **Progress Tracking** – Displays the user's current position and overall learning progress through a dynamic progress bar.
- **Card Navigation** – Navigate between flashcards using Previous and Next controls.
- **Completion Screen** – Displays a completion message after reviewing all flashcards.
- **Restart Functionality** – Allows users to restart the flashcard session.
- **Responsive Interface** – Provides a clean layout adaptable to different screen sizes.
- **Custom Logo and Favicon** – Includes an original SVG-based 3D ribbon logo with an electric blue-to-crimson gradient design, used for application branding and browser identification.

## Technology Stack

| Technology | Purpose |
|---|---|
| React.js | Component-based UI development |
| Vite | Frontend development server and build tool |
| JavaScript (ES6+) | Application logic and functionality |
| Tailwind CSS v4 | Utility-first styling |
| Lucide React | Interface icons |
| CSS3 | Custom 3D card-flipping animations |

## Project Structure

```text
flashcards-app/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Flashcard.jsx
│   │   ├── ProgressBar.jsx
│   │   └── Navigation.jsx
│   │   └── FlashCardsLogo.jsx
│   │
│   ├── data/
│   │   └── flashcards.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
└── vite.config.js
```

## Installation and Setup

### Prerequisites

Make sure the following are installed:

- [Node.js](https://nodejs.org/)
- npm
- [Visual Studio Code](https://code.visualstudio.com/) (recommended)

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Navigate to the project directory

```bash
cd flashcards-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

Visit the local development URL provided by Vite, usually:

```text
http://localhost:5173
```

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Builds the application for production |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs ESLint checks (if configured) |

## Application Architecture

The application follows a component-based architecture where each component handles a specific responsibility.

| Component | Responsibility |
|---|---|
| `App.jsx` | Main application component and state management |
| `Header.jsx` | Application branding and header |
| `Flashcard.jsx` | Displays questions, answers, and flipping interactions |
| `ProgressBar.jsx` | Calculates and displays learning progress |
| `Navigation.jsx` | Handles Previous and Next navigation |
| `flashcards.js` | Stores predefined flashcard data |

### State Management

The application uses React's built-in `useState()` Hook to manage its interactive behavior.

- `currentIndex` – Tracks the currently displayed flashcard.
- `isFlipped` – Determines whether the question or answer is visible.
- `isCompleted` – Determines whether the flashcard session has been completed.

State updates automatically trigger React re-rendering, keeping the interface synchronized with the application's current data.

### Component Communication

The parent `App` component manages the application state and passes the necessary data and callback functions to its child components through props.

This approach keeps state management centralized while allowing individual components to remain reusable and focused on their responsibilities.

## Logo and Favicon

The application includes a custom **FlashCards 3D Ribbon Logo**, designed as an SVG-based React component.

### Design Details

- **Main Symbol:** A stylized letter `F` integrated into a circular ribbon.
- **Color Scheme:** Electric blue, royal blue, indigo, purple, and crimson red gradients.
- **Visual Effects:** SVG gradients, highlights, drop shadows, and layered ribbon effects.
- **Badge Variant:** Displays the complete circular ribbon logo.
- **Glyph Variant:** Displays only the inner letter `F` ribbon.

### Component Variants

```jsx
import { FlashCardsLogo } from "./components/FlashCardsLogo";

// Complete logo with circular ribbon
<FlashCardsLogo variant="badge" />

// Inner F ribbon only
<FlashCardsLogo variant="glyph" />
```

The component also provides reusable SVG data and favicon data URI exports:

- `FLASH_CARDS_LOGO_SVG`
- `FLASH_CARDS_FAVICON_DATA_URI`

These allow the same visual identity to be reused across application branding and browser favicon implementation.

## Learning Objectives

This project demonstrates practical implementation of:

1. **Component-Based Architecture** – Breaking down the application into reusable and maintainable components.
2. **React Hooks** – Managing application state using `useState()`.
3. **Props and Component Communication** – Passing data and callback functions between components.
4. **Event Handling** – Managing user interactions through click and keyboard events.
5. **Conditional Rendering** – Displaying different interfaces based on application state.
6. **Dynamic Styling** – Updating CSS classes and progress indicators based on state changes.
7. **Data Management** – Separating predefined flashcard data from UI components.
8. **Responsive UI Development** – Building an interface that adapts to different screen sizes.

## Future Improvements

- Add a Know It / Need Practice feature.
- Implement randomized flashcard ordering.
- Add flashcard categories and filtering.
- Save learning progress using localStorage.
- Allow users to create and manage custom flashcards.
- Add a scoring system and study statistics.

## Project Status

**Status:** Initial Development Completed

The core flashcard functionality, component architecture, state management, navigation, progress tracking, completion screen, and custom branding have been implemented.

---

**Built with React.js, Vite, and Tailwind CSS.**
