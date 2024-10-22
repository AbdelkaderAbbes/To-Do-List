let input = document.querySelector(".input");
let add = document.querySelector(".add");
let info = document.querySelector(".info");
let listItems = document.querySelector(".list-items");

function addtodo() {
  if (input.value != "") {
    createItem();
    input.value = "";
  }
}

function rmvitem(e) {
  e.target.parentNode.parentNode.remove();

  info.style.visibility = "visible";
  info.textContent = "removed successfully";
  info.style.color = "red";

  setTimeout(function () {
    info.style.visibility = "hidden";
  }, 1500);
}

function createItem() {
  let li = document.createElement("li");
  let span = document.createElement("span");
  span.textContent = input.value;
  let rmv = document.createElement("button");
  let icon = `<i class="fa-solid fa-trash"></i>`;
  rmv.classList.add("rmv");
  rmv.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  li.appendChild(span);
  li.appendChild(rmv);
  listItems.appendChild(li);

  info.style.visibility = "visible";
  info.textContent = "added successfully";
  info.style.color = "green";

  setTimeout(function () {
    info.style.visibility = "hidden";
  }, 1500);

  rmv.onclick = rmvitem;
}

add.onclick = addtodo;
