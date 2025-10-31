# Quiz App

A sleek and interactive quiz application built with **React**, **Vite**, and **Tailwind CSS**. Users can test their knowledge on various topics using questions sourced from the Open Trivia Database API.

***

## Features

- **Quiz Selection**: Choose category, difficulty, question type, and number of questions.
- **Live Timer**: Answer questions within the time limit.
- **Instant Results**: See correct, incorrect, and skipped answers after submission.
- **Responsive Design**: Fully mobile-friendly UI.
- **Custom Styling**: Background image overlay and modern look using Tailwind CSS.

***

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Open Trivia DB API](https://opentdb.com/)

***

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16+ recommended
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/quiz-app.git
   cd quiz-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   - Visit `http://localhost:5174` (or shown by Vite)

***

## Configuration

- **Tailwind CSS** is configured in `tailwind.config.js`.
- **Background Image** can be changed in `App.jsx` by updating the path in the Tailwind class:
  ```jsx
  bg-[url('./assets/bg-image.jpg')]
  ```
  Place your preferred image in the `public/assets` directory for easy access.

***

## Project Structure

```
quiz-app/
├─ public/
│  └─ assets/               # Background images and static files
├─ src/
│  ├─ api/                  # quizApi.jsx for quiz/cat fetch logic
│  ├─ components/           # Reusable React components
│  ├─ pages/                # Home.jsx, Quiz.jsx, etc.
│  ├─ App.jsx
│  ├─ index.css
│  └─ main.jsx
├─ tailwind.config.js
├─ package.json
└─ README.md
```

***

## Credits

- Questions powered by [Open Trivia DB](https://opentdb.com/)
- UI styled via [Tailwind CSS](https://tailwindcss.com/)

***

## License

This project is licensed under the MIT License.  
Feel free to use, modify, and share!

***




