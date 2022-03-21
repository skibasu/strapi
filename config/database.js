// const path = require("path");

// module.exports = ({ env }) => ({
//   connection: {
//     client: "sqlite",
//     connection: {
//       filename: path.join(
//         __dirname,
//         "..",
//         env("DATABASE_FILENAME", ".tmp/data.db")
//       ),
//     },
//     useNullAsDefault: true,
//   },
// });

module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("mariadb106.server975366.nazwa.pl", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "server975366_strapi"),
      user: env("DATABASE_USERNAME", "server975366_strapi"),
      password: env("DATABASE_PASSWORD", "b'9Ca/N9_HS,MmDF"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
