console.log("hello");

const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const subject = document.getElementById("subject").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const formdata = { name, email, subject, message };

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.onload = function () {
    console.log(xhr.responseText);

    if (xhr.responseText == "success") {
      alert("Email sent!");
      name = email = subject = message = "";
    } else {
      alert("something went wrong");
    }
  };

  xhr.send(JSON.stringify(formdata));
});
