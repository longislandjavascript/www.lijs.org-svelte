exports.handler = function() {
  return Promise.resolve({
    statusCode: 200,
    body: "Hello, World"
  });
};
