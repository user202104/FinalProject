// perimti su js formos action
// serializuoti formos parametrus
// nusiusti i node
// nodesuvirskina ir grazina ok ar ne

const form = document.querySelector('#reservation_form')

form.addEventListener('submit', function(e){

   e.preventDefault();
   console.log(e)

});
