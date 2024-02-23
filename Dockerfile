FROM node:20

WORKDIR /usr/src/app

COPY ./package.json ./

COPY ./package-lock.json ./

RUN npm install

COPY ./ index.ts ./

COPY ./ .env ./

EXPOSE 4000

CMD ["npm", "start"]