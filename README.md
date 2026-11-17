# Lab 2 – Basic CI Workflow (GitHub Actions)

Every push / pull request to `main` triggers `.github/workflows/ci.yml`, which installs dependencies, runs ESLint and runs Jest tests on Node.js 20 and 22.

```
npm ci
npm run lint
npm test
```
