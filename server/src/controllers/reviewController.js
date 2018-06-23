import Hapi from "hapi";
import ShopifyAppReviewRepository from "../repository/shopifyAppReviewRepository";
import ReplyHelper from "./helper/replyHelper.js";
import ShopifyAppReview from "../domain/models/shopifyAppReview";

class ReviewController {
  constructor() {}

  login(request, reply) {
    const replyHelper = new ReplyHelper(request, reply);
    const repository = new ShopifyAppReviewRepository();

    repository.login(request.payload.name, request.payload.password, function(
      error,
      data
    ) {
      replyHelper.login(error, data);
    });
  }

  findAll(request, reply) {
    const replyHelper = new ReplyHelper(request, reply);
    const repository = new CustomerRepository();
    repository.findAll(function(error, data) {
      replyHelper.findAll(error, data);
    });
  }

  add(request, reply) {
    const replyHelper = new ReplyHelper(request, reply);
    const model = new CustomerModel(
      request.payload.name,
      request.payload.password,
      request.payload.email
    );
    if (model == null) replyHelper.error("Incorrect parameters");

    const repository = new CustomerRepository();

    repository.add(model, function(error, data) {
      replyHelper.findAll(error, data);
    });
  }
}

export default CustomerController;
