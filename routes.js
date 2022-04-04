const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const middleware = require("./middleware");
const controllers = require("./controllers");
app.use(express.json());

app.get("/products", controllers.getAllProduct);
app.get("/product/:id", controllers.getSingleProduct);
app.post("/user", controllers.createUser);
app.post("/product", controllers.createProduct);
app.post("/login", middleware.auth, controllers.login);
app.patch("/product/:id", controllers.updateProduct);
app.delete("/product/:id", controllers.deleteProduct);
app.post("/verify", (req, res) => {
  try {
    jwt.verify(req.body.token, process.env.JWT_SECRET_KEY);
    res.send("verified")
  } catch (err) {}
     res.send()
});

module.exports = app;
