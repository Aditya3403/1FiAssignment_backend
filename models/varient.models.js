import mongoose from 'mongoose';
import Product from "../models/product.models.js";
import Color from "../models/colors.models.js";

const variantSchema = new mongoose.Schema({

  product:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },

  storage: {
    type: String,
    required: true
  },

  color:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Color',
    required: true,
  },

  price: {
    type: Number,
    required: true
  },

  discount: {
    type: Number,
    required: true
  },

  ourPrice:{
    type:Number,
    required: true
  }
},
    {timestamps: true}
);

const Varient = mongoose.model('Varient', variantSchema);
export default Varient;