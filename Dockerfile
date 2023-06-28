FROM node:18.14.0-alpine3.16 AS build

WORKDIR /app

ARG VITE_API_URL
ARG VITE_FRONTEND_URL
ARG VITE_HELLOSIGN_CLIENT_ID

ENV VITE_API_URL=$VITE_API_URL
ENV VITE_FRONTEND_URL=$VITE_FRONTEND_URL
ENV VITE_HELLOSIGN_CLIENT_ID=$VITE_HELLOSIGN_CLIENT_ID

COPY src ./src
COPY package.json ./
COPY vite.config.js ./
COPY index.html ./
COPY public ./public

RUN yarn install &&\
        yarn build

COPY robots.txt ./dist

FROM nginx:1.23.3-alpine AS serve

RUN chown -R nginx:nginx /usr/share/nginx/html

COPY ./docker/default.conf /etc/nginx/conf.d/
COPY --from=build ./app/dist /usr/share/nginx/html

EXPOSE 80