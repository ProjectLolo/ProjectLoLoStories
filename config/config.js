require("dotenv").config();

module.exports = {
  development: {
    url: "postgres://lbysztap:15XQIihmVlJPTUjK5AHr-a6jm1Hf1KRR@kandula.db.elephantsql.com:5432/lbysztap",
    dialect: "postgres",
    operatorsAliases: "0",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    url: "postgres://lbysztap:15XQIihmVlJPTUjK5AHr-a6jm1Hf1KRR@kandula.db.elephantsql.com:5432/lbysztap",
    use_env_variable: "DATABASE_URL",
  },
};
