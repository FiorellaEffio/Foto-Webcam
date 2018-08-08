firebase.database().ref('Empleados/').on('value', function(snap){
  let employeeUIDs = Object.keys(snap.val());
  employeeUIDs.forEach(function(element) {
    console.log(snap.val()[element].employeeName);
    let nameOfEmployee = document.createElement('option');
    nameOfEmployee.innerText = snap.val()[element].employeeName;
    let employeeOptions = document.getElementById('users-anfitrion');
    employeeOptions.appendChild(nameOfEmployee);
  });
})
