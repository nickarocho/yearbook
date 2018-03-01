var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
const SALT_ROUNDS = 6;

var Milestones = new mongoose.Schema({
  title: String,
  year: Number,
  description: String
});

var Memories = new mongoose.Schema({
  title: String,
  description: String
});

var userSchema = new mongoose.Schema({

  firstName: {type: String, lowercase: true, required: true},
  lastName: {type: String, lowercase: true, required: true},
  email: {type: String, lowercase: true, unique: true},
  password: String,
  isAdmin: Boolean,

  curStatement: String,
  curHeadshot: String,
  curLocation: String,
  curJobs: Array,
  curMaritalStatus: String,
  curKids: Boolean,
  curNumKids: Number,

  elapStatement: String,
  elapPhotos: Array,
  elapLocations: Array,
  elapJobs: Array,
  elapEducation: Array,
  elapTravel: Array,
  elapMilestones: [Milestones],

  initStatement: String,
  initHeadshot: String,
  initPhotos: Array,
  initTeams: Array,
  memories: [Memories]

}, {
  timestamps: true,
  virtuals: true
});

// ---------- JWT Config ---------- //

userSchema.set('toJSON', {
  transform: function(doc, ret) {
    // remove the password property when serializing doc to JSON
    delete ret.password;
    return ret;
  }
});

userSchema.pre('save', function(next) {
  // this will be set to the current document
  var user = this;
  if (!user.isModified('password')) return next();
  // password has been changed - salt and hash it
  bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
    if (err) return next(err);
    // override the user provided password with the hash
    user.password = hash;
    next();
  });
});

userSchema.methods.comparePassword = function(tryPassword, cb) {
  bcrypt.compare(tryPassword, this.password, cb);
};

// userSchema.virtual('fullName').get(function() {
//   return this.firstName + ' ' + this.lastName;
// });

module.exports = mongoose.model('User', userSchema);