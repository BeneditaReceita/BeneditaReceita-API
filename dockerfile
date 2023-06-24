FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm i

COPY . .

CMD [ "npm", "run", "dev" ]

EXPOSE 4000
