firebase.database().ref('Empleados/').on('value', function(snap){
  console.log(snap.val());
  misdatos = snap.val();
  misdatos.forEach(function(element) {
    console.log(element);
  });
})
