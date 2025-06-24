# 📅 Event Management System Frontend

A modern, responsive, and feature-rich frontend for an Event Management System, built with React.js and Tailwind CSS. This application allows users to browse, create, update, and manage events through a beautiful and intuitive interface.

## ✨ Key Features

This project implements a comprehensive set of features for a complete event management experience:

### 🏠 **Core Navigation & Pages**
- **Home Page**: A welcoming landing page with a hero section, an event highlights carousel, and a preview of upcoming events.
- **Event Listing Page**: A powerful page to view all events with advanced filtering, sorting, and pagination.
- **Event Details Page**: A detailed view of a single event, including description, related events, and a shareable link.
- **Create/Edit Event Page**: A single, dynamic form for both creating new events and editing existing ones.
- **User Dashboard**: A private area for users to view and manage their created events (with edit/delete functionality).
- **Event Registration Page**: A clean form for users to register for an event, with success/error feedback.
- **Calendar View**: An interactive calendar that displays events and allows for easy navigation.
- **Authentication Pages**: Placeholder pages for Login and Signup.
- **Static Pages**: About and Contact pages.

### 🎨 **UI/UX & Interactivity**
- **Dark Mode**: A sleek, user-toggleable dark mode that persists across sessions.
- **Fully Responsive Design**: Optimized for mobile, tablet, and desktop views.
- **Loading States**: Professional loading experience with spinners and skeleton cards.
- **Empty States**: Visually appealing empty state illustrations for "No events found."
- **Scroll-to-Top Button**: Smoothly navigates the user to the top of the page.
- **3D & Hover Effects**: Modern UI with gradients, shadows, and transform effects for an interactive feel.
- **Local State Management**: All event data (creation, edits, deletions) is managed locally and persists in `localStorage`.

### 🔍 **Advanced Filtering & Sorting**
- **Search**: Keyword search for events.
- **Filtering**: Filter events by type/category, price (Free/Paid), date range, and location.
- **Sorting**: Sort events by date, price, or title (ascending/descending).
- **Pagination**: Efficiently handles large numbers of events with page navigation.

---

## 🛠️ Technologies Used

- **React.js**: For building the user interface with functional components and hooks.
- **React Router DOM**: For client-side routing and navigation.
- **Tailwind CSS**: For modern, utility-first styling and dark mode.
- **React Calendar**: For the interactive calendar view.
- **Heroicons**: For high-quality icons used in the UI.
- **`localStorage`**: For persisting event data and theme preferences locally.

---

## 🚀 Getting Started

Follow these instructions to get a local copy of the project up and running.

### Prerequisites

You need to have Node.js and npm installed on your machine.
- [Node.js](https://nodejs.org/en/) (which includes npm)

### Installation

1. **Clone the repository** (or download the source code).
2. **Navigate into the project directory**:
   ```sh
   cd frontend
   ```
3. **Install NPM packages**:
   ```sh
   npm install
   ```

---

## 📜 Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

---

## 🗂️ Folder Structure

```
frontend/
├── public/
├── src/
│   ├── components/       # Reusable components (Navbar, EventCard, etc.)
│   ├── context/          # React context (ThemeContext)
│   ├── data/             # Mock data (events, comments)
│   ├── pages/            # Page components (Home, Events, etc.)
│   ├── App.js            # Main app component with routing
│   ├── index.js          # Entry point of the application
│   └── ...
├── tailwind.config.js    # Tailwind CSS configuration
└── package.json
```
