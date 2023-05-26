const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const reactionSchema = new Schema(
    {
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // get: (timestamp) => formatDate(timestamp), // Optional: Use a getter method to format the timestamp
        },
    },
    {
        toJSON: {
            getters: true, // Enable getters to include virtual properties when converting to JSON
        },
    }
);

module.exports=reactionSchema;