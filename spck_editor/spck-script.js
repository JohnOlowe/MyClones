var hour = new Date().getHours();
if (hour >= 19 || hour <= 6) {
  document.head.innerHTML += '<link rel="stylesheet" href="spck-dark-style.css">';
}

function openApp() {
  document.location.href = "https://play.google.com/store/apps/details?id=io.spck&hl=en&gl=US";
}

function toggleDisplay(elementName) {
  var element = document.querySelector(elementName);
  if (window.getComputedStyle(element).getPropertyValue("display") == "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}

function displayImage(image) {
  var src = image.src;
  document.querySelector(".image_clicked img").src = src;
  document.querySelector(".whole_content").style.display = "none";
  document.querySelector(".image_clicked").style.display = "flex";
  document.querySelector("body").style.margin = "0px";
  document.querySelector(".back").style.display = "inline-block";
}

function back() {
  document.querySelector(".whole_content").style.display = "block";
  document.querySelector(".image_clicked").style.display = "none";
  document.querySelector("body").style.margin = "4%";
  document.querySelector(".back").style.display = "none";
}

function appRated(number) {
  for (var i = 1; i <= 5; i++) {
    document.querySelector(".big_star_" + i + " img").src = (i <= number) ? (hour >= 19 || hour <= 6 ? "images/star_filled_night.svg" : "images/star_filled.svg") : "images/star.svg";
  }
}