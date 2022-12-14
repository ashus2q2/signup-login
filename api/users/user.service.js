const pool = require("../../config/database.js");


module.exports = {
  create: (data, callBack) => {
    pool.query(
                `INSERT INTO user(email_id,user_name,phone_no,password) VALUES(?,?,?,?);`,
      [
        data.email_id,
        data.user_name,
        data.phone_no,
        data.password
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUserByUserEmail: (email, callBack) => {
    pool.query(
      `select * from user where email_id = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    ); 
  }

};
