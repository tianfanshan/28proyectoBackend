const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());
app.use("/order", require("./routes/orders"));
app.use("/category", require("./routes/categories"));

//prueba para branch
//asdasdadsjhjujhjhhhhhh

app.listen(port, () => {
  console.log("Servers running!!!" + port);
});
