//const prompt = require('prompt');
const express = require("express");
const app = express();
const sqlite3 = require('sqlite3').verbose();

const frontend_path = '/home/jolita/projects/FinalProject/'


let db = new sqlite3.Database('database.sql', (err) => {
  if (err) {
    return console.error(err.message);
  }
});

app.use(express.static('Public'));

app.listen(5000, () => {
  console.log("Server is running on port 5000");
})


// prompt.start();
//
// prompt.get(['firstname', 'lastname'], function (err, result) {
//   if (err) {
//     throw err;
//   }
//
//   db.run(`INSERT INTO reservations(firstname, lastname)  VALUES ('${result.firstname}','${result.lastname}')`, [], (err) =>{
//     console.log(err);
//   });
//
//   db.all('SELECT * FROM reservations', [], (err, rows) => {
//     if (err) {
//       throw err;
//     }
//     console.table(rows);
//
//   //  rows.forEach((row) => {
//   //    console.log(row.firstname);
//   //  });
//   });
//
//
//
// });



//db.close();
