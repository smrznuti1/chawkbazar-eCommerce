FROM node:22.6.0

WORKDIR /app

COPY *json ./

RUN npm install

COPY . ./

EXPOSE 5000

CMD ["npm", "run", "server"]
