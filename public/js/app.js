const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector(".loader").style.display = "flex";

  let name = document.getElementById("name").value;
  let subject = document.getElementById("subject").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let formdata = { name, email, subject, message };

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.onload = function () {
    console.log(xhr.responseText);

    if (xhr.responseText == "success") {
      alert("Email sent!");
      Object.keys(formdata).forEach((e) => {
        document.getElementById(e).value = "";
      });
    } else {
      alert("something went wrong");
    }

    document.querySelector(".loader").style.display = "none";
  };

  xhr.send(JSON.stringify(formdata));
});
