
FROM node:20-bullseye-slim as builder

WORKDIR /app


COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile;
COPY . .
EXPOSE 27017
RUN yarn run build


FROM node:20-bullseye-slim
WORKDIR /app

COPY --from=builder /app/next.config.js .
COPY --from=builder /app/public ./public

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules




ENV MONGO_USERNAME=${MONGO_USERNAME}
ENV MONGO_PASSWORD=${MONGO_PASSWORD}
ENV MONGO_DATABASE=${MONGO_DATABASE}
ENV MONGO_PORT=${MONGO_PORT}
ENV MONGO_ADDR=${MONGO_ADDR}
ENV CREDLY_USER=${CREDLY_USER}

ENV USE_ATLAS_DATABASE=${USE_ATLAS_DATABASE}
ENV ATLAS_NAME=${ATLAS_NAME}
ENV ATLAS_PD=${ATLAS_PD}
ENV ATLAS_CLUSTER=${ATLAS_CLUSTER}


EXPOSE 3000

CMD ["yarn", "start"]
