import axios from 'axios';


/**
 * A wrapper class for Bridge Web API.
 */
class BridgeWebAPI {
  static instance = null;

  /**
   * Returns a singleton instance of axios with preset `csrftoken` and tracking headers.
   */
  static getAxios() {
    if (this.instance === null) {

      this.instance = axios.create({
        baseURL: '/',
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
        },
      });
    }
    return this.instance;
  }

  /**
   * Builds a FormData object for the `data` dict. Returns `null` if data is `null`.
   * @param {dict} data input data dict. Can be `null`
   */
  static formData(data) {
    let formData = null;
    if (data) {
      formData = new FormData();
      Object.entries(data).forEach(([key, value]) => formData.set(key, value));
    }
    return formData;
  }

  /**
   * Calls axios' `request` method.
   * @param {dict} opts axios' request options
   */
  static async request(opts) {
    return this.getAxios().request(opts);
  }

  /**
   * Sends POST request using axios' `request` method.
   * @param {str} url url for the request
   * @param {dict} data data to send. Can be `null`
   */
  static async post(headers, url, data) {
    return this.request({ headers, url, method: 'post', data: this.formData(data) });
  }
}

export default BridgeWebAPI;