const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

//Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min_length: 1,
      max_length: 280,
    },
    userName: {
      type: String,
      required: true,
      max_length: 32,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => {
          // return date.toISOString().split("T") [0];
          return date.toLocaleString();
      }
    },
    updatedAt: {
      type: Date,
      default: Date.now,
      get: (date) => {
          // return date.toISOString().split("T") [0];
          return date.toLocaleString();
      }
    },
    reactions: [reactionSchema],
  },
  {
    timestamps: true,
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
  });

const Thought = model('thought', thoughtSchema);

module.exports = Thought;