# [Cistercian Numeral](https://en.wikipedia.org/wiki/Cistercian_numerals) Generator

```bash
# Install dependencies
yarn

# Live-reloading server
yarn start

# Build
yarn build

# Deploy
yarn clean
yarn build
aws s3 sync --delete dist/ s3://public.nikhil.io/cistercian/
```
