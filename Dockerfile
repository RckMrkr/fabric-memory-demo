FROM node:8.5-slim

RUN apt-get update
RUN apt-get install -y libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev build-essential g++

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app/

COPY package.json package.json
RUN npm install
COPY demo.js demo.js

CMD [ "node", "--expose-gc", "demo.js" ]