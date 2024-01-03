function showMore() {
  var button = document.getElementById("show_more");
  var hidden = document.getElementById("more");
  
  var text = button.innerHTML;
  if (text == "More...") {
    hidden.style.display = "flex";
    button.innerHTML = "Hide";
  } else {
    hidden.style.display = "none";
    button.innerHTML = "More...";
  }
}