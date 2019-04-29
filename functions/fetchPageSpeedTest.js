const axios = require("axios");
const { format } = require("date-fns");

exports.handler = async () => {
  // TODO- Convert to environment variable.
  const API_URL =
    "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://lijs.org";

  const getPageSpeedTest = async () => {
    const result = await axios.get(API_URL);
    const { data } = result;
    return data.lighthouseResult.audits["speed-index"].displayValue;
  };

  // if (event.httpMethod === 'GET') {
  return getPageSpeedTest()
    .then(result => {
      return { statusCode: 200, body: JSON.stringify(result) };
    })
    .catch(error => {
      return { statusCode: 500, body: JSON.stringify(error) };
    });
  // }
};
