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


app.post('/make_reservation', (request, response) => {

  let reservation = request.body

  db.run("INSERT INTO reservations (firstname, lastname, email, phone, room, checkin, checkout, adults, children) VALUES (?,?,?,?,?,?,?,?,?)",
    [reservation.fname, reservation.lname, reservation.email, reservation.phone, reservation.room, reservation.checkin, reservation.checkout, reservation.adult, reservation.children],
    function(err, result) {
      if (err) throw err;

      fs.readFile('Public/Reservation.html', 'utf8', function(err, data) {

        if (err) throw err;

        let html_file = cheerio.load(data);

        html_file('.container2').replaceWith('<div class="text-center"><div class="alert alert-success" role="alert">Reservation successful</div></div>');


        db.all('SELECT * FROM reservations;', (err, rows) => {
          if (err) throw err;
          console.table(rows);
        });

        response.send(html_file.html())

      });


    });


})
