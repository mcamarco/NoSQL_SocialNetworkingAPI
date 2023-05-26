// require necessary modules and create the thought schema
const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const reactionSchema = require('./reaction');

// define thought schema using mongoose schema constructor
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => formatDate(timestamp), // Optional: Use a getter method to format the timestamp
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            getters: true, // Enable getters to include virtual properties when converting to JSON
        },
    }
);

//   add virtual property to retreive the length of the array field on query
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

//   format date
function formatDate(timestamp) {
    return new Date(timestamp).toLocaleDateString();
}

// Create the Thought model using mongoose.model
const Thought = model('Thought', thoughtSchema);
// Export the Thought model
module.exports = Thought;

