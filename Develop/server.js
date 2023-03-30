const express = require("express");
const routes = require("./routes");
// import sequelize connection
const sequelize = require("./config/connection");
// Check

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Sync Sequelize models with the database, then start the server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
// Check

// Complete
