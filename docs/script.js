function showStar(t,a){a.setAttribute("onchange",""),document.getElementById(t).innerHTML+="<span class='red'> *</span>"}$((function(){$(".datepicker").pickadate({format:"dd/mm/yyyy",formatSubmit:"dd/mm/yyyy",firstDay:1,min:!0,max:7,disable:[6,7]}),$("#form").parsley()}));