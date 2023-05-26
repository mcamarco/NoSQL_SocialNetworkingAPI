// 
const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// AT LOCAL HOST 3001/API/USER - USE GET USERS & CREATE USERS METHODS
router.route('/').get(getUsers).post(createUser);

// AT LOCAL HOST 3001/API/USER/USERID - GET SINGLE USER OR UPDATE OR DELETE USER
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// AT LOCAL HOST 3001/API/USER/USERID/FRIENDS/FRIENDID - ADD OR REMOVE FRIEND
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;