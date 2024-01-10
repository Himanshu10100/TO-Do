const inputBox = document.getElementById("taskInput");
// const btn = document.getElementById("button");

addTask = () => {
  if (inputBox.value === "") {
    alert("Task not Defined !!");
  } else {
    //document.getElementsByClassName("checked")[0].innerHTML = inputBox.value;
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listStyle.appendChild(li);
    inputBox.value = "";
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    addItem();
  }
  shawData();
};

listStyle.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove();
  }
  addItem();
  shawData();
});

addItem = () => {
  localStorage.setItem("data", listStyle.innerHTML);
};

shawData = () => {
  listStyle.innerHTML = localStorage.getItem("data");
  if (listStyle.innerHTML === "") {
    document.getElementById("btnclear").hidden = true;
  } else {
    document.getElementById("btnclear").hidden = false;
  }
};

clearData = () => {
  let a = confirm("Are You Sure ??");
  console.log(a);
  if (a == true) {
    localStorage.clear();
  }
  shawData();
};
shawData();
