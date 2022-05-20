const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());

app.use("/category", require("./routes/categories"));
app.use('/product',require('./routes/products'));
app.use('/user',require('./routes/users'));


app.listen(port, () => {
  console.log("Servers running!!!" + port);
});