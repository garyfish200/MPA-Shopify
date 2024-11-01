const shopifyService = require('../services/shopifyService');

exports.getOrders = async (req, res) => {
  try {
    const orders = await shopify.getOrders();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}