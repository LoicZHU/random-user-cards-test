FROM node:18.20-alpine

RUN mkdir /app
WORKDIR /app

RUN npm install -g @angular/cli
COPY ./package*.json ./
RUN npm ci

COPY . .
CMD ["ng", "serve", "--host", "0.0.0.0"]
