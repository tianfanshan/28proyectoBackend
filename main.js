const express = require("express");
const { typeError } = require("./middleware/errors");
const app = express();
const port = 8000;


app.use(express.json());


app.use("/orders", require("./routes/orders"));
app.use("/categories", require("./routes/categories"));
app.use("/products", require("./routes/products"));
app.use("/users", require("./routes/users"));
app.use("/reviews", require("./routes/reviews"));

app.use(typeError)

app.listen(port, () => {
  console.log("Servers running!!!" + port);
});
