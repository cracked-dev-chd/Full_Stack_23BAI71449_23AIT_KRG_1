# My Form App

This project is a simple React application built with Vite. It demonstrates a basic form that collects user information such as name, email, age, gender, and country. The form uses React's `useState` hook to manage input values, and the `onSubmit` event to handle form submission. All form variables are stored in a state object and, upon submission, the values are displayed in the browser console.

## Features

- Built with React 19 and Vite for fast development and hot module replacement (HMR)
- Collects user data: name, email, age, gender, and country
- Uses React hooks (`useState`) for state management
- Simple and clean UI
- ESLint integration for code quality

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   ```
3. Open your browser at [http://localhost:5173](http://localhost:5173) to view the app.

## Project Structure

- `src/App.jsx`: Main React component with the form
- `src/App.css`: Styles for the form
- `public/`: Static assets
- `vite.config.js`: Vite configuration

## Usage

Fill out the form fields and click **Submit**. The form data will be logged to the browser console.

### How to View Form Data in the Console

1. Open your browser and navigate to [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).
2. Right-click anywhere on the page and select **Inspect** or press `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Option+I` (Mac) to open the Developer Tools.
3. Go to the **Console** tab.
4. Fill out the form and click **Submit**.
5. You will see the submitted form data displayed in the console as an object.

## License

This project is for educational purposes.
