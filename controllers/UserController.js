const { User, Order,Product, Token, Sequelize } = require("../models/index");
const { Op } = Sequelize;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/config.json")["development"];

const UserController = {
  create(req, res) {
    const password = bcrypt.hashSync(req.body.password, 10);
    User.create({ ...req.body, password: password })
      .then((user) => res.status(201).send({ message: "User created!", user }))
      .catch(console.error);
  },
  getAll(req, res) {
    // me traigo los usuarios
    //Sequelize solo entiende camelCase como foreigk=Key ejemplo UserId, TrainTransactionId
    User.findAll({
      include: [Order],
    })
      .then((users) => res.send(users))
      .catch(console.error);
  },
  async getUserInfoWithOrdersProducts(req,res){
    try {
      const users = await User.findOne({where:{id:req.user.id},
        include:{model:Order,attributes:["items_bought"], include:{model:Product,through:{attributes:[]}}}
      });
      res.send(users);
    } catch (error) {
      console.error(error);
      res.send(error)
    }
  },
  login(req, res) {
    User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((user) => {
      if (!user) {
        return res
          .status(400)
          .send({ message: "Usuario o contraseña incorrectos" });
      }
      const isMatch = bcrypt.compareSync(req.body.password, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .send({ message: "Usuario o contraseña incorrectos" });
      }
      token = jwt.sign({ id: user.id }, jwt_secret);
      console.log(token);
      Token.create({ token, UserId: user.id });
      res.send({ message: "Bienvenid@" + user.first_name, user, token });
    });
  },

  async logout(req, res) {
    try {
      await Token.destroy({
        where: {
          [Op.and]: [
            { UserId: req.user.id },
            { token: req.headers.authorization },
          ],
        },
      });
      res.send({ message: "Desconectado con éxito" });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ message: "hubo un problema al tratar de desconectarte" });
    }
  },
};

module.exports = UserController;
