//const prompt = require('prompt');
const express = require("express");
const app = express();
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('backend/database.sql', (err) => {
  if (err) {
    return console.error(err.message);
  }
});

app.use(express.static('Public'));

app.listen(5000, () => {
  console.log("Server is running on port 5000");
})


app.post('/make_reservation', (request, response) =>{

 console.log(request.params)

})

// app.get('/', (req, response) =>{
//
//  response.sendFile(index_path);
//
// })
//
// app.get('/Scripts/scriptindex.js', (req, response) =>{
//
//  response.sendFile('/home/jolita/projects/FinalProject/Public/Scripts/scriptindex.js');
//
// })
//
//
// app.post("/add-customer", (request, response) => {
//
//
//   let sqlQuery = `INSERT INTO customers (name, lastname, phone, email
//   ) VALUES('${request.body.name}',
//   '${request.body.lastname}', '${request.body.phone}', '${request.body.email}')`;
//
//   connection.query(sqlQuery)
//
//   response.sendFile(index_path);
//
//

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
