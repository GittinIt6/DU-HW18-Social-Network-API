const router = require('express').Router();

const {
  getThoughts,
  getSingleThought,
  createThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');
  
// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtID
router.route('/:thoughtId').get(getSingleThought);

// /api/thoughts/:thoughtID
router.route('/:thoughtId').post(addReaction);

// /api/thoughts/:thoughtID/reactions/:reactionID
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;