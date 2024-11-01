
const querys = require('../constants/querys');
const testing = require('@shopify/shopify-api/adapters/node')
const { shopifyApi, LATEST_API_VERSION } = require('@shopify/shopify-api');

const shopify = shopifyApi({
    apiKey: process.env.SHOPIFY_API_KEY,
    apiSecret: process.env.SHOPIFY_API_SECRET,
    scopes: ['read_orders'],
    shop: process.env.SHOPIFY_SHOP_NAME,
    apiVersion: LATEST_API_VERSION,
    verbose: false,
});

const sessionId = await shopify.session.getCurrentId({
    isOnline: true,
    rawRequest: req,
    rawResponse: res,
  });

  // use sessionId to retrieve session from app's session storage
  // getSessionFromStorage() must be provided by application
const session = await getSessionFromStorage(sessionId);

const shopifyGraphqlClient = new shopify.clients.Graphql({
    session,
    apiVersion: LATEST_API_VERSION,
})

exports.getOrders = async () => {
    try {
        const response = await shopifyGraphqlClient.request(querys.getOrdersQuery);
        return {data: response.data, extenstions: response.extensions};
    } catch (error) {
        throw error;
    }
}