const mongose = require('mongoose');
const { Schema } = mongose;

const userSchema = new Schema({
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Please enter a valid email address']
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  });
  
//   Add a virtual property friendCount to retrieve the length of the user's friends array
  userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
  });

//   export the user model
  const User = mongoose.model('User', userSchema);

module.exports = User;
