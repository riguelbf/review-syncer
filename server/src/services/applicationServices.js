import fetch from "node-fetch";
import { log } from "util";

class ApplicationService {
  getReviews(appName = "", refetchTime = 30) {
    const timeInMinutes = 30 * 1000; //TODO change for minutes

    setInterval(() => {
      const result = {};
      fetch(`https://apps.shopify.com/${appName}/reviews.json`).then(res =>
        console.log(res.body.json())
      );
    }, timeInMinutes);
  }
}

export default ApplicationService;
