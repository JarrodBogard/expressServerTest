const express = require("express");
const app = express();
const peopleRouters = require("./routers/people");
const PORT = 3000;

app.use(express.json());
app.use("/", peopleRouters);

app.listen(PORT, () => console.log(`I am listening on port ${PORT}`));
