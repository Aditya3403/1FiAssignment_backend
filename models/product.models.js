import mongoose from 'mongoose';
import Varient from "../models/varient.models.js";
import EmiPlan from "../models/emiPlans.models.js";

const productSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  slug: {
    type: String,
    unique: true,
  },

  rating: {
    type: Number,
  },

  variants: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Varient',
        required: true,
    },
  ],

  emiPlans: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'EmiPlan',
      required: true,
    },
  ],
  
},

    {timestamps: true}

);

const Product = mongoose.model('Product', productSchema);
export default Product;