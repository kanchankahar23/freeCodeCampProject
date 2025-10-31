const currentbalance = document.querySelector("#currentbalance");
const income = document.querySelector("#income");
const expense = document.querySelector("#expense");
const items = document.querySelector("#items");
const text = document.querySelector("#text");
const amount = document.querySelector("#amount");
const add = document.querySelector("#add");
let transactions = [];
add.addEventListener("click", () => {
    console.log(text.value);
    if (text === "" || isNaN(amount) || amount === 0) {
        alert("please enter correct information");
        return;
    }
    let transaction = {
        id: Date.now(),
        text,
        amount,
    }
    transactions.push(transaction);
    renderTransactions();
    updateBalance();
    text.value = ""
    amount.value = ""
})
function renderTransactions() {
    transactions.forEach((transaction)=>{
  const li = document.createElement("li");
    li.classList.add("flex",
        "justify-between",
        "text-lg",
        "font-semibold",
        "bg-white",
        "p-2",
        "rounded-md",
        "shadow-sm",
        "mt-2",)
    li.innerHTML = `<span>${transaction.text}</span>
      <div>
        <span class="${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}">${transaction.amount > 0 ? '+' : ''}${transaction.amount}</span>
        <button onclick="deleteTransaction(${transaction.id})" class="ml-3 text-gray-500 hover:text-red-500 font-bold">x</button>
      </div>`
    })
  
      items.appendChild(li);

}
function updateBalance(){
const amount = transaction.map((t)=>{
  t.amount;
})
 const total = amounts.reduce((acc, item) => acc + item, 0).toFixed(2);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);
  const expense = 
    (amount.filter((item) => item < 0).reduce((acc, item) => acc + item, 0) * -1).toFixed(2);

  balanceEl.textContent = `$${total}`;
  incomeEl.textContent = `$${income}`;
  expenseEl.textContent = `$${expense}`;
}

function deleteTransaction(id) {
  transactions = transactions.filter((t) => t.id !== id);
  renderTransactions();
  updateBalance();
}


