"use strict";

const fetch = require("node-fetch");

// custom get-products REST api
const getProductsUrl =
  "https://g57a62130c54ddf-productorders.adb.us-chicago-1.oraclecloudapps.com/ords/creditchatbot/oda/products/";

  function getProducts(urlRequest, logger, callback) {
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
   
   // entry point for the 'get-products' component
   module.exports = {
     metadata: () => ({
       name: "com.credit.oda",
       supportedActions: ["success", "failure"],
     }),
     invoke: (conversation, done) => {
       getProducts(getProductsUrl, conversation.logger(), (err, data) => {
         if (err) {
           conversation.transition("failure");
           done();
           return;
         }
         const products = data.map((product) => product.product_name);
         conversation.reply(products.join("\n")).transition("success");
         done();
       });
     },
   };
