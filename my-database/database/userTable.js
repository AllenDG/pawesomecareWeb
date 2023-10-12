const db = require('./db')

const createUserTable = async () => {
  try {
      // SQL script to create the table
      const createTableUser = `
          CREATE TABLE IF NOT EXISTS users (
              UserID INT AUTO_INCREMENT PRIMARY KEY, 
              UserLName VARCHAR(20) NOT NULL,
              UserFName VARCHAR(20) NOT NULL,
              UserEmail VARCHAR(30) NOT NULL,
              UserName VARCHAR(20) NOT NULL,
              UserPassword VARCHAR(255) NOT NULL
              
          );
      `;

      // Execute the SQL script
      await db.query(createTableUser);

      console.log('user_appts table created or already exists.');
  } catch (error) {
      console.error('Error creating user_appts table:', error);

  }
}
module.exports.createUserTable  = createUserTable
