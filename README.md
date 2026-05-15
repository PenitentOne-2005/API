[README.md](https://github.com/user-attachments/files/27799349/README.md)
# Custom REST API

A simple REST API built with Node.js and Express.js that serves data for films, TV shows, and portfolio projects.

## Tech Stack

- Node.js
- Express.js
- CORS
- dotenv

## Project Structure

```
API/
├── controllers/
│   ├── filmsController.js
│   ├── projectsController.js
│   └── tvShowsController.js
├── middleware/
│   └── errorHandler.js
├── routes/
│   ├── filmsRouter.js
│   ├── projectsRouter.js
│   └── tvShowsRouter.js
├── data.js
├── server.js
└── .env
```

## Getting Started

```bash
# Install dependencies
npm install

# Create .env file
echo "PORT=3000" > .env

# Start the server
npm start
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/projects` | Get all projects |
| GET | `/projects/:id` | Get project by ID |
| GET | `/films` | Get all films |
| GET | `/popular-films` | Get popular films |
| GET | `/newest-films` | Get newest films |
| GET | `/tv-shows` | Get all TV shows |
