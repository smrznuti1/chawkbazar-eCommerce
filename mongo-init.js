db = db.getSiblingDB("webshop");

db.createUser({
  user: "jesuis",
  pwd: "admin",
  roles: [
    {
      role: "readWrite",
      db: "webshop",
    },
  ],
});
