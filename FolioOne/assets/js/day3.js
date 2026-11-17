
document.addEventListener("DOMContentLoaded", () => {

  // CONTACT FORM VALIDATION
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
        result.style.color = "red";
        return;
      }

      if (!emailPattern.test(email)) {
        result.textContent = "Enter a valid email";
        result.style.color = "red";
        return;
      }

      result.textContent = "Form validated successfully!";
      result.style.color = "green";
      form.reset();
    });
  }


  // DYNAMIC LIST + AUTOCOMPLETE
  const input = document.querySelector("#itemInput");
  const addBtn = document.querySelector("#addBtn");
  const itemList = document.querySelector("#itemList");
  const suggestionList = document.querySelector("#suggestionList");

  if (!input || !addBtn || !itemList || !suggestionList) {
    return;
  }

  // Available suggestions
  const suggestions = [
    "Java",
    "JavaScript",
    "Java Developer",
    "Java Programming",
    "Python",
    "Python Developer",
    "React",
    "React Native",
    "Rahul",
    "Rohit",
    "HTML",
    "CSS",
    "Bootstrap",
    "Node.js",
    "Express.js",
    "MySQL"
  ];

  let items = [];

  // Show suggestions while typing
  input.addEventListener("input", () => {
    const word = input.value.trim().toLowerCase();

    suggestionList.innerHTML = "";

    if (word === "") return;

    const matchedWords = suggestions.filter(skill =>
      skill.toLowerCase().includes(word)
    );

    matchedWords.forEach(skill => {
      const li = document.createElement("li");

      li.className =
        "list-group-item list-group-item-action";

      li.textContent = skill;
      li.style.cursor = "pointer";

      li.addEventListener("click", () => {
        input.value = skill;
        suggestionList.innerHTML = "";
      });

      suggestionList.appendChild(li);
    });
  });

  // Render added skills
  function renderItems() {
    itemList.innerHTML = "";

    items.forEach((item, index) => {
      const li = document.createElement("li");

      li.className =
        "list-group-item d-flex justify-content-between align-items-center";

      const span = document.createElement("span");
      span.textContent = item;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.className = "btn btn-danger btn-sm";

      deleteBtn.addEventListener("click", () => {
        items = items.filter((_, i) => i !== index);
        renderItems();
      });

      li.appendChild(span);
      li.appendChild(deleteBtn);
      itemList.appendChild(li);
    });
  }

  // Add skill
  function addItem() {
    const value = input.value.trim();

    if (value === "") return;

    items.push(value);
    input.value = "";
    suggestionList.innerHTML = "";

    renderItems();
  }

  addBtn.addEventListener("click", addItem);

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      addItem();
    }
  });

});


// 1. Double numbers using map()
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
