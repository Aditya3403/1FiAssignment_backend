import Product from "../models/product.models.js";
import Varient from "../models/varient.models.js";
import Color from "../models/colors.models.js";

export const getProducts = async (req, res) => {
  try {

    const products = await Product.find({})
      .populate({
        path: "variants",
        model:Varient,
        populate: {
          path: "color",
          model: Color,
        },
      })
      .lean();

    const cleanProducts = products.map((product) => {

    let firstImage = null;
    let price = null;
    let discount = null;
    let ourPrice = null;
    let color = null;

    if (product.variants.length > 0) {
      const v = product.variants[0];

      if (v.color && v.color.images && v.color.images.length > 0) {
        firstImage = v.color.images[0];
      }

      price = v.price;
      discount = v.discount;
      ourPrice = v.ourPrice;
      color = v.color.color;
    }

    return {
      _id: product._id,
      name: product.name,
      slug: product.slug,
      rating: product.rating,
      brand: product.brand,
      thumbnail: firstImage,
      price,
      discount,
      ourPrice,
      color
    };
  });


    res.json(cleanProducts);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};

export const getProductBySlug = async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug })
      .populate({
        path: "variants",
        model: Varient,
        populate: {
          path: "color",
          model: Color,
        },
      })
      .populate("emiPlans");

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};