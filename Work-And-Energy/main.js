function hideImage() {
 if (document.getElementById("image-cont1").style.display == "none") {
   document.getElementById("image-cont1").style.display = "flex";
 } else {
   document.getElementById("image-cont1").style.display = "none";
 }
}

function showLinks() {
  const menu = document.getElementById("menu");
  if (menu.style.display == "none") {
    menu.style.display = "inline";
  } else {
    menu.style.display = "none";
  }
}