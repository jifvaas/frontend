FROM node:14 as build-deps

WORKDIR /app

COPY . /app

RUN npm i &&\
    npm run build


FROM nginx:alpine

COPY --from=build-deps /app/build /usr/share/nginx/html
