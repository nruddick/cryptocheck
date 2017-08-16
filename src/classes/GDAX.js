import request from 'request';

const headers = {
  'User-Agent': 'request',
};

export default class GDAX {
  /**
   * Calls GDAX API to get price
   *
   * @param {string} Currency Currency to fetch
   * @return {Promise}
   */
  static getCurrency(currency) {
    return new Promise((resolve, reject) => {
      request({ url: `https://api.gdax.com/products/${currency}-USD/ticker`, headers }, (err, response, body) => {
        if (response.statusCode === 404) reject('Symbol not found on GDAX.');
        const output = JSON.parse(body);
        resolve(output.price);
      });
    });
  }
}
