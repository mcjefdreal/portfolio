FROM node:24-slim AS builder
WORKDIR /app

RUN corepack enable pnpm && corepack prepare pnpm@11.9.0 --activate

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

FROM node:20-slim AS runner
WORKDIR /app

RUN corepack enable pnpm && corepack prepare pnpm@11.9.0 --activate


COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml

RUN pnpm install --prod --frozen-lockfile --ignore-scripts

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["node", "build"]
