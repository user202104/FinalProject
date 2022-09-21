//const prompt = require('prompt');
const express = require("express");
const app = express();
const sqlite3 = require('sqlite3').verbose();
app.use(express.urlencoded({
    extended: true
}));
const cheerio = require('cheerio');
const fs = require('fs');



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

  let reservation = request.body

  db.run("INSERT INTO reservations (firstname, lastname, email, phone, room, checkin, checkout, adults, children) VALUES (?,?,?,?,?,?,?,?,?)",
    [reservation.fname, reservation.lname, reservation.email, reservation.phone, reservation.room, reservation.checkin, reservation.checkout, reservation.adult, reservation.children  ], function (err, result) {
    if (err) throw err;

    fs.readFile('Public/Reservation.html', 'utf8', function(err, data) {

        if (err) throw err;

        let html_file = cheerio.load(data);

        html_file('.container2').replaceWith('<div>Reservation successful</div>')

        response.send(html_file.html())

    });


  });


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
