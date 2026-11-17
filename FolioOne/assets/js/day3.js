
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#day3ContactForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = form.querySelector("#day3Name").value.trim();
      const email = form.querySelector("#day3Email").value.trim();
      const message = form.querySelector("#day3Message").value.trim();
      const result = form.querySelector("#day3FormResult");

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name || !email || !message) {
        result.textContent = "All fields are required";
        return;
      }

      if (!emailPattern.test(email)) {
        result.textContent = "Enter a valid email";
        return;
      }

      result.textContent = "Form validated successfully!";
      form.reset();
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#itemInput");
  const addBtn = document.querySelector("#addBtn");
  const itemList = document.querySelector("#itemList");

  if (!input || !addBtn || !itemList) return;

  let items = [];

  function renderItems() {
    itemList.innerHTML = "";

    items.forEach((item, index) => {
      const li = document.createElement("li");
      li.textContent = item + " ";

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";

      deleteBtn.addEventListener("click", () => {
        items = items.filter((_, i) => i !== index);
        renderItems();
      });

      li.appendChild(deleteBtn);
      itemList.appendChild(li);
    });
  }

  addBtn.addEventListener("click", () => {
    const value = input.value.trim();

    if (value === "") return;

    items.push(value);
    input.value = "";
    renderItems();
  });
});
