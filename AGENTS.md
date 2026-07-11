# AGENTS.md

## Cursor Cloud specific instructions

Wiki React Redux is a small full-stack app: an Express + Mongoose REST API
(`server.js`, `models/`) and a React 16 / Redux frontend bundled by Webpack
(`src/`, `public/`). See `README.md` for the full overview, API endpoints, and
env vars.

### Running the app (dev)
- Use the in-memory MongoDB — no local Mongo install is needed. The `yarn dev`
  script already sets `USE_IN_MEMORY_DB=true` and runs both processes via
  `concurrently`.
- To run the two processes separately (e.g. for cleaner logs):
  - API server: `USE_IN_MEMORY_DB=true yarn server` → http://localhost:3001
  - Frontend: `yarn start` → http://localhost:3000
- The webpack dev server proxies `/api/*` to the API on port 3001, so the
  frontend must reach the API through port 3000 (not 3001 directly).
- Gotcha: without `USE_IN_MEMORY_DB=true`, `yarn server` tries to connect to a
  local `mongod` at `127.0.0.1:27017` and exits with an error since none is
  installed here. Always export that var (or use `yarn dev`).
- `yarn start` passes `--open`; there is no GUI browser auto-launch in this
  environment, so it simply logs the URL — this is expected, not an error.
- `mongodb-memory-server` downloads a MongoDB binary on first run (cached
  afterward under the home dir); the first `yarn server` start can take longer.

### Lint / test / build
- No lint script is configured. `.jshintrc` exists but `jshint` is not a
  dependency and there is no `lint` npm script.
- No working automated test runner is configured. `src/components/App.test.js`
  uses Jest-style globals, but Jest is not installed and there is no `test`
  script; `yarn test` will fail.
- `yarn build` (production bundle via `webpack.prod.js`) works. The dev build
  emits benign warnings only (Dart Sass "legacy JS API" deprecation and one
  `SET_LOADING` unused-import warning) — these are pre-existing, not errors.
