# Wiki React Redux

A wiki-clone app built with React, Redux, Express, and MongoDB.

## Features

- Create, read, update, and delete wiki articles
- Tag articles and filter the wiki list by tag
- Persist articles in MongoDB via a REST API
- React/Redux frontend with Materialize CSS

## Tech Stack

**Frontend**
- React 16
- Redux + redux-thunk
- React Router
- Webpack 5

**Backend**
- Express
- MongoDB / Mongoose

## Prerequisites

- Node.js 18+
- MongoDB running locally (or a remote `MONGODB_URI`)

## Installation

```bash
yarn install
```

## Running the App

Start MongoDB, then run both the API server and the frontend:

```bash
# Terminal 1 - API server (port 3001)
yarn server

# Terminal 2 - React dev server (port 3000)
yarn start
```

Or run both together:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

The webpack dev server proxies `/api` requests to the Express server on port 3001.

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `3001` | API server port |
| `MONGODB_URI` | `mongodb://127.0.0.1:27017/wiki-react-redux` | MongoDB connection string |
| `USE_IN_MEMORY_DB` | `false` | Set to `true` to use an in-memory MongoDB (useful for local dev without installing MongoDB) |

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/wikis` | List all wikis |
| GET | `/api/wikis/:id` | Get one wiki |
| POST | `/api/wikis` | Create a wiki |
| PUT | `/api/wikis/:id` | Update a wiki |
| DELETE | `/api/wikis/:id` | Delete a wiki |

## Production Build

```bash
yarn build
```

## License

MIT — see [LICENSE.md](LICENSE.md).
