FROM node as build-deps

# Set the working directory
WORKDIR /app

# Copy the package.json and install the dependencies
COPY . ./
RUN npm i &&\
    npm run build

FROM nginx:alpine

COPY --from=build-deps /app/build /usr/share/nginx/html
