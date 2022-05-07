const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    // deleteUser,
    // createUser,
  } = require('../../controllers/thoughtController');
  
  // /api/thoughts
  router.route('/').get(getThoughts);
  // .post(createStudent);

  // /api/thoughts/:thoughtID
  router.route('/:thoughtId').get(getSingleThought);

module.exports = router;