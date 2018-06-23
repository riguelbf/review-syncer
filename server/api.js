/**
 * Start the server for api
 */
import Constants from "./src/config/constants.js";
import Hapi from "hapi";
import RoutesApi from "./src/routes/routesApiRoute.js";
import ApplicationService from "./src/services/applicationServices";

const options = {
  state: {
    cookies: {
      strictHeader: false
    }
  }
};

const constantsConfig = new Constants();
const server = new Hapi.Server();

server.connection({
  port: constantsConfig.application.port,
  host: constantsConfig.application.host
});

/**
 * Register operations in server instance
 */
server.register(error => {
  if (error) {
    throw error;
  }

  /**
   *  Add all the routes within the routes folder
   * */
  const routes = new RoutesApi();

  routes.map(route => {
    server.route(route.index);
  });
});

new ApplicationService().getReviews();

if (process.env.NODE_ENV !== "test") {
  server.start(error => {
    if (error) {
      throw error;
    }
    console.log("Server running in port #" + constantsConfig.application.port);
  });
}

module.exports = server;
