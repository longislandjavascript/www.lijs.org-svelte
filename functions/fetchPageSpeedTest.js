const axios = require("axios");

exports.handler = async () => {
  const { PAGESPEED_URL } = process.env;

  const getPageSpeedTest = async () => {
    const result = await axios.get(PAGESPEED_URL);
    const { data } = result;
    return data;
  };

  return getPageSpeedTest()
    .then(result => {
      return { statusCode: 200, body: JSON.stringify(result) };
    })
    .catch(error => {
      return { statusCode: 500, body: JSON.stringify(error) };
    });
};
