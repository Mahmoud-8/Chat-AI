# Project README
![alt text](<Screenshot 2024-06-01 at 4.40.50 PM.png>)

## Overview

This project is a web application with a conversational interface powered by AI, allowing users to input prompts, receive AI-generated responses, and manage their conversation history.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/your-repo-name.git
    ```
2. Navigate to the project directory:
    ```bash
    cd your-repo-name
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm start
    ```

## Usage

Open your browser and navigate to `http://localhost:3000`.

## Project Structure

```plaintext
your-repo-name/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Main/
│   │   ├── Sidebar/
│   ├── context/
│   │   ├── Context.js
│   ├── config/
│   │   ├── Hepha.js
│   ├── App.js
│   ├── index.js
├── package.json
├── README.md
```

## Key Components

- **Main Component (`src/components/Main/Main.js`)**: Primary user interface for interactions.
- **Sidebar Component (`src/components/Sidebar/Sidebar.js`)**: Navigation and recent prompt management.
- **Context (`src/context/Context.js`)**: Global state management.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a Pull Request.

