
function changeImage(pic) {
  document.getElementById("yay_image").src = pic;
}

function changePrice(value) {
  document.getElementById("amazon_price").innerHTML = "$" + value + ".00";
  document.getElementById("gift_card_price").innerHTML = "$" + value + ".00";
}