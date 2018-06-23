import DbConnection from "./dbConnection.js";

/**
 *  Class responsible for the persistence and search ShopifyAppReview data
 */
class ShopifyAppReviewRepository extends DbConnection {

  findAll(callback) {
    const query = "SELECT * FROM shopify_app_reviews";
    const modelQuery = {
      sql: query,
      values: params,
      callback: callback
    };

    this.executeQuery(modelQuery);
  }


  findByTitle(shopiFyDomain, callback) {
    const query =
      "SELECT * FROM `shopify_app_reviews` WHERE `shopify_domain` LIKE ?";

    const params = ["%" + shopiFyDomain + "%"];

    const modelQuery = {
      sql: query,
      values: params,
      callback: callback
    };

    this.executeQuery(modelQuery);
  }

  findByAppName(apoName, callback) {
    const query =
      "SELECT * FROM `shopify_app_reviews` WHERE `app_slug` LIKE ?";

    const params = ["%" + apoName + "%"];

    const modelQuery = {
      sql: query,
      values: params,
      callback: callback
    };

    this.executeQuery(modelQuery);
  }

  updateRating(){
    const query =
    "UPDATE `shopify_app_reviews` SET `star_rating`=?, `updated_at`=? WHERE id=?";

    const params = [newRating, new Date(),id];

    const modelQuery = {
      sql: query,
      values: params,
      callback: callback
    };

    this.executeQuery(modelQuery);
  }

  add(model, callback) {

    let query = "INSERT INTO `shopify_app_reviews` (`shopify_domain`, `app_slug`, `Emstar_ratingail`,`previous_star_rating`,null,created_at) VALUES (?, ?, ?, ?, ?, ?)";

    let params = [
      model.shopifyDomain,
      model.appSlug,
      model.starRating,
      model.previousStarRating,
      model.updatedAt,
      model.createdAt
    ];

    let modelQuery = {
        sql: query,
        values: params,
        callback: callback
    };

    this.executeQuery(modelQuery);
  }

}

export default ShopifyAppReviewRepository;
