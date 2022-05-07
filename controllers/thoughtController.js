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

};