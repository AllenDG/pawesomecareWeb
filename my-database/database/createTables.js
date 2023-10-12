const db = require('./db')

const createAppointmentsTable = async () => {
  try {
      // SQL script to create the table
      const createTableQuery = `
          CREATE TABLE IF NOT EXISTS book_appts (
              AppointmentID INT AUTO_INCREMENT PRIMARY KEY, 
              isVeterinaryCare  BOOLEAN, 
              isPetGrooming  BOOLEAN,
              isPetBoarding  BOOLEAN,                           
              isPetSpa  BOOLEAN ,
              AppointmentTime VARCHAR(45) NOT NULL,
              AppointmentDate VARCHAR(45) NOT NULL,
              FistName VARCHAR(15) NOT NULL,
              LastName VARCHAR(15) NOT NULL,
              Email VARCHAR(30) NOT NULL,
              PhoneNo INT NOT NULL,
              Message VARCHAR(155),
              CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
              UpdatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
          );
      `;

      // Execute the SQL script
      await db.query(createTableQuery);

      console.log('book_appts table created or already exists.');
  } catch (error) {
      console.error('Error creating book_appts table:', error);

  }
}
module.exports.createAppointmentsTable = createAppointmentsTable


