# React + TypeScript + Vite

This is a starter template for building web applications using React, TypeScript, and Vite. It provides a minimal setup to get you up and running quickly with Hot Module Replacement (HMR) and some sensible ESLint rules.

## 🛠️ Tech Stack

- **[React](https://react.dev/)**: A JavaScript library for building user interfaces.
- **[TypeScript](https://www.typescriptlang.org/)**: A typed superset of JavaScript that compiles to plain JavaScript.
- **[Vite](https://vitejs.dev/)**: A next-generation frontend tooling that provides a faster and leaner development experience.
- **[ESLint](https://eslint.org/)**: A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.

## 🚀 Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

Make sure you have Node.js (version 18 or newer is recommended) and `npm` installed.

### Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone <your-repository-url>
    cd <project-directory>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the Development Server

To start the local development server, run:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## 📦 Available Scripts

- `npm run dev`: Starts the development server with HMR.
- `npm run build`: Builds the application for production.
- `npm run lint`: Lints the source code using ESLint.
- `npm run preview`: Serves the production build locally to preview it.

## Project Structure

A quick look at the top-level files and directories you'll see in this project.

```
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .eslintrc.cjs
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🔍 Code Quality and Linting

This project uses ESLint for identifying and reporting on patterns in the code. For a production application, we recommend enhancing the ESLint configuration for better code quality.

### Enabling Type-Aware Linting

To enable stricter, type-aware linting rules, modify your `eslint.config.js` (or `.eslintrc.cjs`) file:

```javascript
// eslint.config.js
import tseslint from "typescript-eslint";

// In your config, find the extends array and replace
// tseslint.configs.recommended with one of the following:

// For recommended type-checked rules
tseslint.configs.recommendedTypeChecked,

// For stricter type-checked rules
tseslint.configs.strictTypeChecked,
```

### React-Specific Linting

To add React-specific linting rules, install the plugins and update your config:

```bash
npm install -D eslint-plugin-react-x eslint-plugin-react-dom
```

Then, add them to your `eslint.config.js`:

```javascript
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

// In your config, add the following to the `extends` array:
reactX.configs["recommended-typescript"],
reactDom.configs.recommended,
```

## ⚛️ React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## 🤝 Contributing

Contributions are welcome! If you'd like to help improve this project, please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes and commit them (`git commit -m 'Add some feature'`).
4.  Push to the branch (`git push origin feature/your-feature-name`).
5.  Open a Pull Request.
