### eCommerce using MERN Stack, React, Node, Express, MonogoDB, Redux Toolkit & Tailwind CSS

## Run using docker compose

`docker compose up --build`

## Run using docker run commands

```
docker run -d  -v db-storage:/data/db -p 27017:27017 --name database --restart on-failure --network ecomNetwork -e MONGO_INITDB_ROOT_USERNAME=username -e MONGO_INITDB_ROOT_PASSWORD=password -e MONGO_INITDB_DATABASE=webshop database_img
docker run -d --name db-interface --link database:mongo -p 8081:8081 --network ecomNetwork -e ME_CONFIG_MONGODB_SERVER=mongo -e ME_CONFIG_MONGODB_ADMINUSERNAME=username -e ME_CONFIG_MONGODB_ADMINPASSWORD=password --restart on-failure mongo-express:1.0.2
docker run -d --name server -p 5000:5000 --link database:db --network ecomNetwork --restart on-failure backend
docker run -d --name client -p 3000:3000 --network ecomNetwork --restart on-failure frontend
```
