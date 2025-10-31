const textInput = document.querySelector("input[type='text']");
const amountInput = document.querySelector("input[type='number']");
const addBtn = document.querySelector("button");
const historyList = document.querySelector("ul");
const balanceEl = document.querySelector("h3"); // Your Balance
const incomeEl = document.querySelectorAll("h2.text-green-600")[0];
const expenseEl = document.querySelectorAll("h2.text-red-600")[0];

let transactions = [];

addBtn.addEventListener("click", () => {
  const text = textInput.value.trim();
  const amount = Number(amountInput.value.trim());

  if (text === "" || isNaN(amount) || amount === 0) {
    alert("Please enter valid text and amount!");
    return;
  }

  const transaction = {
    id: Date.now(),
    text,
    amount,
  };

  transactions.push(transaction);
  renderTransactions();
  updateBalance();

  textInput.value = "";
  amountInput.value = "";
});

function renderTransactions() {
  historyList.innerHTML = "";

  transactions.forEach((transaction) => {
    const li = document.createElement("li");
    li.classList.add(
      "flex",
      "justify-between",
      "text-lg",
      "font-semibold",
      "bg-white",
      "p-2",
      "rounded-md",
      "shadow-sm",
      "mt-2",
    //   transaction.amount > 0 ? "border-r-4",
    //   transaction.amount > 0 ? "border-green-500" : "border-red-500"
    );

    li.innerHTML = `
      <span>${transaction.text}</span>
      <div>
        <span class="${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}">${transaction.amount > 0 ? '+' : ''}${transaction.amount}</span>
        <button onclick="deleteTransaction(${transaction.id})" class="ml-3 text-gray-500 hover:text-red-500 font-bold">x</button>
      </div>
    `;

    historyList.appendChild(li);
  });
}

function updateBalance() {
  const amounts = transactions.map((t) => t.amount);
  const total = amounts.reduce((acc, item) => acc + item, 0).toFixed(2);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);
  const expense = 
    (amounts.filter((item) => item < 0).reduce((acc, item) => acc + item, 0) * -1).toFixed(2);

  balanceEl.textContent = `$${total}`;
  incomeEl.textContent = `$${income}`;
  expenseEl.textContent = `$${expense}`;
}

function deleteTransaction(id) {
  transactions = transactions.filter((t) => t.id !== id);
  renderTransactions();
  updateBalance();
}

