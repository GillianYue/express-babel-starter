
import mongoose, { Schema } from 'mongoose';

const NoteSchema = new Schema({
  title: String,
  x: Number,
  y: Number,
  zIndex: Number,
  text: String,
}, {
  toJSON: {
    virtuals: true,
  },
});

// PostSchema.virtual('score').get(function scoreCalc() {
//   return this.upvotes - this.downvotes;
// });

// create model class
const NoteModel = mongoose.model('Post', NoteSchema);

export default NoteModel;
