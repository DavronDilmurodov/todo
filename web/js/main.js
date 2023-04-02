let elForm = elSelector(".form");
let elInput = elSelector(".input__main");
let elList = elSelector(".list");

let allTodo = [];

let onDelete = () => {};

let onEdit = () => {};

let onRender = (arr) => {
  elList.innerHTML = null;
  arr.forEach((item) => {
    // console.log(item);
    let li = elCreator("li");
    li.className =
      "pt-2 pb-1 px-2 flex justify-between border-b-2 rounded-lg items-baseline max-sm:w-full";
    elList.appendChild(li);

    let label = elCreator("label");
    label.className = "b-contain";
    li.appendChild(label);

    let chekInput = elCreator("input");
    chekInput.type = "checkbox";
    label.appendChild(chekInput);

    let span = elCreator("span");
    span.textContent = item.task;
    label.appendChild(span);

    let bgChekbox = elCreator("div");
    bgChekbox.className = "b-input";
    label.appendChild(bgChekbox);

    let buttonsCommon = elCreator("div");
    li.appendChild(buttonsCommon);

    let btnEdit = elCreator("button");
    btnEdit.className =
      "font-medium bg-green-700 text-white px-3 py-2 rounded-md mr-2";
    btnEdit.textContent = "Edit";
    buttonsCommon.appendChild(btnEdit);
    btnEdit.addEventListener("click", onEdit);

    let btnDelete = elCreator("button");
    btnDelete.className =
      "font-medium bg-red-600 text-white px-3 py-2 rounded-md";
    btnDelete.textContent = "Delete";
    buttonsCommon.appendChild(btnDelete);
    btnDelete.addEventListener("click", onDelete);
  });
};

let onSumbit = (event) => {
  event.preventDefault();

  let inputValue = elInput.value.trim();

  if (!inputValue) {
    alert("Add Todo");
  }

  let newTodo = {
    id: allTodo.length + 1,
    task: inputValue,
    isCompleted: false,
  };

  allTodo.unshift(newTodo);

  elInput.value = null;
  onRender(allTodo);
};

elForm.addEventListener("submit", onSumbit);
