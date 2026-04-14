let toggleBtn = document.getElementById("darkModeToggle");


if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}


toggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let messageInput = document.getElementById("message");
let sendBtn = document.getElementById("sendBtn");
let error = document.getElementById("error");

sendBtn.addEventListener("click", function () {
  let name = nameInput.value.trim();
  let email = emailInput.value.trim();
  let message = messageInput.value.trim();

  if (name === "" || email === "" || message === "") {
    error.innerText = "All fields are required!";
    error.style.color = "red";
  } else if (!email.includes("@")) {
    error.innerText = "Please enter a valid email!";
    error.style.color = "red";
  } else {
    error.innerText = "Message sent successfully ✅";
    error.style.color = "green";
  }
});
nameInput.value = "";
emailInput.value = "";
messageInput.value = "";
