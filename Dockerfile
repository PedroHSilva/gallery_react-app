FROM node:18.13.0-alpine
WORKDIR /usr/src/gallery_react-app
COPY package.json .
EXPOSE 3000
CMD npm install && npm start
