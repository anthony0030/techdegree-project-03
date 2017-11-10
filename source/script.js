$(document).ready(function() {

  $('.datepicker').pickadate({
    formatSubmit: 'dd/mm/yyyy',
    firstDay: 1, 
    min: true, 
    max: 7,  
    disable: [6,7]
  });

  $('#form').parsley();
});

function show_star(self){
  document.getElementById(self).innerHTML += "<span class='red'> *</span>";
  document.getElementById(self).removeAttribute("id");
}