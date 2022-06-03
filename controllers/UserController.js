const { User, Order, Product, Token, Sequelize } = require("../models/index");
const { Op } = Sequelize;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/config.json")["development"];
const transporter = require("../config/nodemailer");

const UserController = {
  async create(req, res, next) {
    try {
      const hash = bcrypt.hashSync(req.body.password, 10);
      const user = await User.create({
        ...req.body,
        // password: hash,
        confirmed: false,
        role: "user",
      });
      // const emailToken = jwt.sign({email:req.body.email},jwt_secret,{expiresIn:'24h'})
      // const url = 'http://localhost:8000/users/confirm/'+ emailToken
      // await transporter.sendMail({
      //     to:req.body.email,
      //     subject: "confirm your register",
      //     html: `<h3>Welcome, you are one step away from registering correctly</h3>
      //     <a href="${url}"> Click to confirm your registration</a>`,
      // })
      res.status(201).send({
        message: "Te hemos enviado un correo para confirmar el registro",
        user,
      });
    } catch (err) {
      console.log(err)
      err.origin = "User";
      next(err)
    }
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
  async getUserInfoWithOrdersProducts(req, res) {
    try {
      const users = await User.findOne({
        where: { id: req.user.id },
        include: {
          model: Order,
          attributes: ["items_bought"],
          include: { model: Product, through: { attributes: [] } },
        },
      });
      res.send(users);
    } catch (error) {
      console.error(error);
      res.send(error);
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
      if(!user.confirmed){
          return res.status(400).send({message: "You should confirm your email"})
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
      res.status(200).send({ message: "Bienvenid@ " + user.first_name, user, token });
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
  async confirm (req,res) {
      try {
        const token = req.params.emailToken
        const payload = jwt.verify(token,jwt_secret)
          await User.update({confirmed:true},{
              where: {
                  email: payload.email
              }
          })
          res.status(201).send("User confirmed");
      } catch (error) {
          console.error(error)
          
      }
  },
};

module.exports = UserController;
