const productModal = require("./models/productSchema");
const userRegister = require("./models/userSchema");
const jwt = require("jsonwebtoken")

exports.getAllProduct = async (req, res) => {
  const products = await productModal.find({});

  try {
    console.log("products", products);
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getSingleProduct = async (req, res) => {
  const product = await productModal.find({ _id: req.params.id });

  try {
    console.log("product", productModal);
    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createUser = async (req, res) => {
 
  try {   
  const user = await userRegister(req.body)
    console.log("user added");
    await user.save();   
  } catch (error) {
    console.log(error)
    res.status(500).send(error);
  }
};

exports.createProduct = async (req, res) => {
  const product = await productModal(req.body);
  console.log("product added", product);
  try {
    await product.save();
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateProduct = async (req, res) => {
   await productModal
    .updateOne({ _id: req.params.id }, { $set: req.body })
    .then((product) => {
      if (!product) {
        return res.status(404).send();
      }
      res.send(product);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
};

exports.deleteProduct = async (req, res) => {
  let products = await new productModal({ _id: req.params.id });
  products.deleteOne();
  try {
    await products.save();
    res.send(products);
  } catch {
    res.status(500).send(error);
  }
};

exports.login = async (req, res) => {
  const token = jwt.sign(req.body, process.env.JWT_SECRET_KEY,{expiresIn:"3m"});  

  try {    
    await 
    console.log("token",token)
    res.send(token);
  } catch(error) {
    res.status(500).send(error);
  }
};
