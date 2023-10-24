"use strict";

// node-fetch library to make HTTP requests, allows us to fetch resources across the network.
const fetch = require("node-fetch");

// custom get-customers REST api
const getCustomersURL =
  "https://g57a62130c54ddf-productorders.adb.us-chicago-1.oraclecloudapps.com/ords/creditchatbot/oda/creditchatbot/";


function getCustomers(urlRequest, logger, callback) {
  logger.info(urlRequest);
  fetch(urlRequest)
    .then((res) => {
      if (!res.ok) {
        const errorMessage = `Invalid status ${res.status}`;
        logger.error(errorMessage);
        callback(errorMessage);
        throw new Error(errorMessage);
      }
      return res.json();
    })
    .then((body) => {
      callback(null, body.items);
    })
    .catch((err) => {
      logger.error(err.message);
      callback(err.message);
    });
}

// entry point for the 'get-customers' component
module.exports = {
  metadata: () => ({
    name: "com.credit.oda",
    supportedActions: ["success", "failure"],
  }),
  invoke: (conversation, done) => {
    getCustomers(getCustomersURL, conversation.logger(), (err, data) => {
      if (err) {
        conversation.transition("failure");
        done();
        return;
      }
      const customers = data.map((customer) => customer.name);
      conversation.reply(customers.join("\n")).transition("success");
      done();
    });
  },
};
