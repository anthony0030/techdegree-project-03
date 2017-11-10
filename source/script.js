function show_star(self){
  document.getElementById(self).innerHTML += "<span class='red'> *</span>"
  document.getElementById(self).removeAttribute("id")
}

