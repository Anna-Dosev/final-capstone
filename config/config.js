const {
  PG_DATABASE,
  PG_HOST,
  PG_PASSWORD,
  PG_PORT,
  PG_USER
} = process.env;


module.exports = { 
  "development": {
    "username": "admin",
    "password": "admin",
    "database": "capstone",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "capstone-test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": PG_USER,
    "password": PG_PASSWORD,
    "database": PG_DATABASE,
    "host": PG_HOST,
    "dialect": "postgres",
    "port": PG_PORT
  }
}
