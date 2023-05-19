import api from "./api.js";

async function login(data) {
  const res = await api.sendRequest("POST", "auth/login", data);
  if (res.status === 200) {
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));
    window.location.href = "index.html";
  } else {
    alert(res.message);
  }
}

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  // verify if the form is valid
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

   const data = Object.fromEntries(formData);

  login(data);
});
