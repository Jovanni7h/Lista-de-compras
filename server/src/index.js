require("dotenv").config();

const appli = require("./app");
require("./database");

async function main() {
  await appli.listen(appli.get("port"));
  console.log("Server on port", appli.get("port"));
}

main();
