const { User, Thought } = require('../models');

// /api/thoughts
module.exports = {
    // Get all thoughts
    getThoughts(req, res) {
      Thought.find()
        .then(async (thoughts) => {
          return res.json(thoughts);
        })
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });
    },
    getSingleThought(req, res) {
      Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v')
        .then(async (thought) =>
          !thought
            ? res.status(404).json({ message: 'No thought with that ID' })
            : res.json({
                thought,
              })
        )
        .catch((err) => {
          console.log(err);
          return res.status(500).json({ message: 'err500: No thought with that ID' });
        });
    },

    createThought(req, res) {
      Thought.create(req.body)
        .then((thought) =>
        !thought
        ? res.status(404).json({ message: 'Thought not created' })
        : User.findOneAndUpdate(
            { userName: req.body.userName },
            { $addToSet: { thoughts: thought._id } },
            { strict: false, runValidators: true, new: true }
          )
        .then((response) =>
          !response
            ? res.status(404).json({ message: 'Thought Created, but user not found' })
            : res.json({ message: 'Thought successfully added to user' })
        )
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        }));
    },

    addReaction(req, res) {
      console.log('You are adding a Reaction');
      Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      )
        .then((reaction) =>
          !reaction
            ? res
                .status(404)
                .json({ message: 'No thought found with that ID' })
            : res.json(reaction)
        )
        .catch((err) => res.status(500).json(err));
    },

    deleteReaction(req, res) {
      console.log(`You are removing thoughtID ${req.params.thoughtId} > reactionID ${req.params.reactionId}`);
      Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: {_id: req.params.reactionId} } },
        { runValidators: true, new: true }
      )
        .then((thought) =>
          !thought
            ? res
                .status(404)
                .json({ message: 'No thought found with that ID :(' })
            : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    }

};