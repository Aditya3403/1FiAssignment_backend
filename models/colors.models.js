import mongoose from 'mongoose';

const colorSchema = new mongoose.Schema({
  color: {
    type: String,
  },
  images: [
    {
      type: String,
    },
  ],

},
    {timestamps: true}
);

const Color = mongoose.model('Color', colorSchema);
export default Color;