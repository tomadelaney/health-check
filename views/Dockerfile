# Use maven to compile the java application.
FROM docker.io/maven AS build-env

FROM node:12.18.1

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

EXPOSE 80

CMD [ "node", "server.js" ]