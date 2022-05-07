const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  deleteUser,
  createUser,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers);
// .post(createStudent);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// /api/students/:studentId/assignments
// router.route('/:studentId/assignments').post(addAssignment);

// /api/students/:studentId/assignments/:assignmentId
// router.route('/:studentId/assignments/:assignmentId').delete(removeAssignment);

module.exports = router;