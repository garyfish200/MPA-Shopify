const express = require('express');
const routes = require('../services/shopifyServices');

const router = express.Router();

// Middleware to parse JSON bodies
router.use(express.json());

router.get('/orders', routes.getOrders);

module.exports = router;
