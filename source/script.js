$(document).ready(function() {

  $(".datepicker").pickadate({
    format: "dd/mm/yyyy",
    formatSubmit: "dd/mm/yyyy",
    firstDay: 1, 
    min: true, 
    max: 7,  
    disable: [6,7]
  });

  $("#form").parsley();
});

function show_star(self, trigger){
  trigger.setAttribute("onchange", "")
  document.getElementById(self).innerHTML += "<span class='red'> *</span>";
}

new TypeIt(".type-it");