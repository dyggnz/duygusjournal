function checkPassword() {
  const pass = document.getElementById("password").value;
  if (pass === "1987") {
    window.location.href = "dashboard.html";
  } else {
    alert("Yanlış şifre 🛑");
  }
}

function addTask() {
  const input = document.getElementById("taskInput").value;
  if (!input.trim()) return;
  const list = document.getElementById("todoList");
  const item = document.createElement("li");
  item.innerText = "☐ " + input;
  list.appendChild(item);
  document.getElementById("taskInput").value = "";
}
document.getElementById("password").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    checkPassword();
  }
});
function checkPassword() {
  const pass = document.getElementById("password").value;
  if (pass === "1987") {
    window.location.href = "dashboard.html";
  } else {
    alert("Yanlış şifre 🛑");
  }
}

// ENTER tuşu ile de çalışsın
document.getElementById("password").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    checkPassword();
  }
});
