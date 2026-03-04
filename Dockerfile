FROM node:25-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm i

COPY . .
RUN npm run build
RUN npm prune --omit=dev


FROM node:25-alpine
WORKDIR /app

COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

CMD ["node", "build/index.js"]