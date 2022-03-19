module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '09763460c310ef3a4bd460008196ff45'),
  },
});
