const getOrdersQuery = `
      query getOrders($cursor: String) {
        orders(first: 50, after: $cursor) {
          edges {
            node {
              lineItems(first: 50) {
                edges {
                  node {
                    title
                    quantity
                    originalTotalPrice {
                      amount
                    }
                  }
                }
              }
            }
            cursor
          }
          pageInfo {
            hasNextPage
          }
        }
      }
    `;

module.exports = {
    getOrdersQuery,
};