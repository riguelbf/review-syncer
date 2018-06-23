import Joi from "joi";
import ModelBase from "./modelBase.js";

/**
 * Schema of ShopifyAppReview table
 */
var schema = Joi.object().keys({
  id: Joi.number().integer(),
  shopifyDomain: Joi.string()
    .min(1)
    .max(255).required(),
  appSlug: Joi.string()
    .min(1)
    .max(255).required(),
  starRating: Joi.number().integer(),
  previousStarRating: Joi.number().integer(),
  updatedAt: Joi.date(),
  createdAt: Joi.date()
});

/**
 * Model ShopifyAppReview of Shopify_app_reviews table
 */
class ShopifyAppReview extends ModelBase {
  constructor(name) {
    super();

    const model = {
      id,
      shopifyDomain,
      appSlug,
      starRating,
      previousStarRating,
      updatedAt,
      createdAt
    };

    const isValid = this.validateModel(model, schema);

    if (isValid) return model;

    return null;
  }
}

export default CustomerModel;
