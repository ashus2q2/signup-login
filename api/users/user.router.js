// const router = require("express").Router();
// // const { checkToken } = require("../../auth/token_validation");
// const {
//   createUser,
//   login,
// //   getUserByUserId,
// //   getUsers,
// //   updateUsers,
// //   deleteUser
// } = require("./user.controller");
// router.get("/", (req, res)=>{
//   res.send("got at port 3000")
// });
// // router.post("/", checkToken, createUser);
// router.post("/", createUser);
// // router.get("/:email_id", checkToken, getUserByUserId);  //get using email id
// // router.post("/login", login);
// // router.patch("/", checkToken, updateUsers);
// // router.delete("/", checkToken, deleteUser);

// module.exports = router;





const { createUser, login } = require("./user.controller");
const { getUserByUserEmail } = require("./user.service");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.get("/", (req, res)=>{
  res.send("got at port 3000")
});

// router.get("/:email_id", getUserByUserEmail); 
router.post("/login", login);

router.post("/", checkToken, createUser);

module.exports = router;

