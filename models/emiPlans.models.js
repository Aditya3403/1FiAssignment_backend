import mongoose from 'mongoose';
import Product from "../models/product.models.js";

const emiPlanSchema = new mongoose.Schema({
  product:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },

  monthly: {
    type: Number,
    required: true
  },

  tenure: {
    type: Number,
    required: true
  },

  interestRate: {
    type: Number,
    required: true
  },

  cashback: {
    type: Number,
    required: true
  },
},
    {timestamps: true}
);

const EmiPlan = mongoose.model('EmiPlan', emiPlanSchema);
export default EmiPlan;