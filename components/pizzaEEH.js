"use strict";

// node fetch API can be used to make REST calls, see https://www.npmjs.com/package/node-fetch
const fetch = require("node-fetch");

module.exports = {
  metadata: {
    name: "pizzaEEH",
    eventHandlerType: "ResolveEntities",
    supportedActions: [], // string array of transition actions that might be set by the event handler
  },
  handlers: {
    entity: {
      /**
       * Generic fallback handler that is called when item-specific prompt or disambiguate handler is not specified for the item currently being resolved.
       * Used here to provide acknowledgements when a bag item is updated or a bag item value is provided while the user was prompted for another item.
       *
       * @param {object} event - event object contains the following properties:
       * - currentItem: name of item currently being resolved
       * - promptCount: number of times the user is prompted for current item (only set in case of prompt event)
       * - disambiguationValues: JSONArray with a list of values for the current item that match the user input only set in case of disambiguate event)
       * @param {object} context - entity resolution context, see https://oracle.github.io/bots-node-sdk/module-Lib.EntityResolutionContext.html
       */
      publishMessage: async (event, context) => {
        context.addCandidateMessages();
      },

      /**
       * Handler that gets called when the composite bag entity is resolved. You will typically use this function to call some backend API to
       * complete the transaction which the composite bag entity collected the data for. If the backend API call return some errors, possibly
       * forcing you to re-prompt for some invalid bag items, you can do so by simply clearing those bag items. The RE/CRC component will notice
       * the entity is not fully resolved after all, and will resume prompting for missing bag items.
       *
       * @param {object} event - event object contains no properties for this handler
       * @param {object} context - entity resolution context, see https://oracle.github.io/bots-node-sdk/EntityResolutionContext.html
       */
      resolved: async (event, context) => {
        let pizzaCrust = context.getItemValue("PizzaCrust");
        if (pizzaCrust == null) {
          let crustValue = {};
          crustValue.entityName = "list.pizzaCrust";
          crustValue.canonicalName = "regular";
          crustValue.originalString = "regular";
          crustValue.type = "list.pizzaCrust";
          crustValue.value = "regular";
          crustValue.primaryLanguageValue = "regular";
          context.setItemValue("PizzaCrust", crustValue);
        }
      },

      /**
       * Handler that gets called when the composite bag entity resolution is started. You can use this handler to perform custom initialization logic,
       * for example to set a default value for a bag item.
       *
       * @param {object} event - event object contains no properties for this handler
       * @param {object} context - entity resolution context, see https://oracle.github.io/bots-node-sdk/EntityResolutionContext.html
       */

      //    "skill.pizza": {
      //     "entityName": "cbe.pizza",
      //     "PizzaType": {
      //       "endOffset": 6,
      //       "entityName": "list.pizzaType",
      //       "originalString": "cheese",
      //       "type": "list.pizzaType",
      //       "value": "cheese",
      //       "primaryLanguageValue": "cheese",
      //       "canonicalName": "cheese",
      //       "beginOffset": 0
      //     },
      //     "PizzaCrust": {
      //       "entityName": "list.pizzaCrust",
      //       "originalString": "regular",
      //       "type": "list.pizzaCrust",
      //       "value": "regular",
      //       "primaryLanguageValue": "regular",
      //       "canonicalName": "regular"
      //     },
      //     "PizzaSize": {
      //       "endOffset": 5,
      //       "entityName": "list.pizzaSize",
      //       "originalString": "large",
      //       "type": "list.pizzaSize",
      //       "value": "large",
      //       "primaryLanguageValue": "large",
      //       "canonicalName": "large",
      //       "beginOffset": 0
      //     }
      //   }

      // "repeatOrder": {
      //     "entityName": "cbe.repeatOrderConfirmation",
      //     "confirmation": {
      //       "endOffset": 3,
      //       "entityName": "list.confirmation",
      //       "originalString": "Yes",
      //       "type": "list.confirmation",
      //       "value": "Yes",
      //       "primaryLanguageValue": "Yes",
      //       "canonicalName": "Yes",
      //       "beginOffset": 0
      //     }
      //   }
      init: async (event, context) => {
        async function setEntityValues(itemName, value) {
          let _updatedEntity = {};
          _updatedEntity.entityName = itemName;
          _updatedEntity.canonicalName = value;
          _updatedEntity.originalString = value;
          _updatedEntity.type = itemName;
          _updatedEntity.value = value;
          _updatedEntity.primaryLanguageValue = value;
          return _updatedEntity;
        }

        let repeatOrder = context.getVariable("repeatOrder");
        let userResponse = repeatOrder ? repeatOrder.confirmation.value : null;
        if (userResponse == "Yes") {
          const lastOrder = context.getVariable("user.pizza");
          context.setItemValue("PizzaCrust", lastOrder.PizzaCrust);
          context.setItemValue("PizzaType", lastOrder.PizzaType);
          context.setItemValue("PizzaSize", lastOrder.PizzaSize);
        }
      },
    },
  },
};
