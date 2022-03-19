module.exports = {
  routes: [
    {
      // Path defined with a URL parameter
      method: "GET",
      path: "/porffolios/:category/:slug",
      handler: "porffolio.findOneByCategory",
    },
  ],
};
