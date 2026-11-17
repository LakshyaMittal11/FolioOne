
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

// 1. Double numbers using map
function doubleNumbers(numbers) {
  return numbers.map(num => num * 2);
}

// 2. Convert names to uppercase
function uppercaseNames(names) {
  return names.map(name => name.toUpperCase());
}

// 3. Filter even numbers
function getEvenNumbers(numbers) {
  return numbers.filter(num => num % 2 === 0);
}

// 4. Filter adults
function getAdults(people) {
  return people.filter(person => person.age >= 18);
}

// 5. Sum numbers
function sumNumbers(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// 6. Calculate total price
function totalPrice(products) {
  return products.reduce((total, p) => total + p.price, 0);
}

// 7. Find user by ID
function findUser(users, id) {
  return users.find(user => user.id === id);
}

// 8. Find expensive product
function findExpensiveProduct(products) {
  return products.find(p => p.price > 1000);
}

// 9. Get active usernames
function activeUsernames(users) {
  return users.filter(u => u.active).map(u => u.name);
}

// 10. Count completed tasks
function countCompleted(tasks) {
  return tasks.filter(task => task.completed).length;
}
