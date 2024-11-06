FROM node:22.4.0-slim AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* ./
RUN yarn --frozen-lockfile

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# sharpがないままstandaloneモードでビルドすると警告が出る
RUN yarn add sharp
RUN yarn run build

FROM gcr.io/distroless/nodejs20 AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV NEXT_TELEMETRY_DISABLED=1

# Copy from build
COPY --from=builder /app/next.config.mjs ./
# publicに使用するファイルがあればコピーする
# COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/.next/standalone ./

USER nonroot

# Run app command
# CMD ["./node_modules/next/dist/bin/next", "start"]
# For standalone mode
CMD ["server.js"]