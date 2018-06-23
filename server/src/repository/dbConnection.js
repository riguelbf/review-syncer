import MySql from "mysql";
import Constants from "../config/constants.js";

const options = {
  multipleStatements: true
};

const dataBaseConfiguration = new Constants().database;

Object.assign(options, dataBaseConfiguration);

const pool = MySql.createPool(options);

/**
 * Class the communication database of api
 */
class DbConnection {
  createConnect(connectHandler) {
    pool.getConnection((err, connection) => {
      if (err) return connectHandler(err, null);
      return connectHandler(null, connection);
    });
  }
  /**
   * Execute query in database
   * @param {params} params - the parameter necessary for executing in database
   */
  executeQuery(params) {
    const sql = params.sql;
    const values = params.values;
    const queryHandler = params.callback;

    this.createConnect((err, connection) => {
      if (err) return queryHandler(err, null);

      values != undefined && values != null
        ? execQueryWithParameter(sql, values, queryHandler, connection)
        : execQuery(sql, queryHandler, connection);
    });
  }
}

 execQueryWithParameter(sql, values, queryHandler, connection) {
  connection.query(sql, values, (err, rows, fields) => {
    queryHandler(err, rows);
    connection.release();
  });
}

 execQuery(sql, queryHandler, connection) {
  connection.query(sql, (err, rows, fields) => {
    queryHandler(err, rows);
    connection.release();
  });
}

export default DbConnection;
