const { Router } = require("express");
const router = Router();
const {getUser, createUser, deleteUser, getUsers, updateUser} = require ('../controllers/users-control')

router
  .route('/')
  .get(getUsers)
  .post(createUser)

router
  .route("/:id") //http://localhost:3000/api/users/id
  .delete(deleteUser)
  .get(getUser)
  .put(updateUser)

module.exports = router;
