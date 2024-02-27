document.querySelector(".comments_container").innerHTML = localStorage.getItem("commentTemplate");

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

function getText() {
  const textField = document.querySelector("form .text").value;
  if (textField.trim().length == 0) {
    const errorField = document.querySelector(".comments span.empty_field_error");
    errorField.style.display = "block";
    errorField.innerHTML = "Enter a value into the comment field.";
    return;
  }
  const commentTemplate = `
    <div class="comment_item">
      <span class="comment_time">${getTime()}</span>
      <p class="comment_text">${textField}</p>
    </div>
  `;
  document.querySelector("form .text").value = "";
  document.querySelector(".comments_container").innerHTML += commentTemplate;
  localStorage.setItem("commentTemplate", document.querySelector(".comments_container").innerHTML);
}

function getTime() {
  const date = new Date();
  return pad(date.getDate()) + "/" + pad(date.getMonth() + 1) + "/" + date.getFullYear() + " " + pad(date.getHours()) + ":" + pad(date.getMinutes());
}

function pad(value) {
  if (value < 10) {
    return "0" + value;
  }
  return value;
}