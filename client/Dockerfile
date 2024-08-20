FROM node:22.6.0

WORKDIR /app

COPY *json ./

RUN npm install

COPY . ./

EXPOSE 3000

CMD ["npm", "start"]
