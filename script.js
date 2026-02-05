let selectedLoan = "home";
let chart;

document.querySelectorAll(".loan-card").forEach(card => {
  card.addEventListener("click", () => {
    document.querySelectorAll(".loan-card").forEach(c => c.classList.remove("active"));
    card.classList.add("active");
    selectedLoan = card.dataset.type;
  });
});

function calculate() {
  const income = +document.getElementById("income").value;
  const existingEMI = +document.getElementById("existingEMI").value;
  const rate = +document.getElementById("rate").value;
  const years = +document.getElementById("years").value;

  let foir = 0.5;
  if (selectedLoan === "car") foir = 0.45;
  if (selectedLoan === "personal") foir = 0.4;

  const maxEMI = income * foir - existingEMI;
  const r = rate / 12 / 100;
  const n = years * 12;

  const eligibleLoan =
    maxEMI * ((Math.pow(1 + r, n) - 1) / (r * Math.pow(1 + r, n)));

  document.getElementById("loanAmount").textContent =
    "₹" + Math.round(eligibleLoan).toLocaleString();

  renderChart(maxEMI, income);
}

function renderChart(emi, income) {
  const ctx = document.getElementById("emiChart");

  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Income", "EMI"],
      datasets: [{
        data: [income, emi],
        backgroundColor: ["#667eea", "#764ba2"]
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } }
    }
  });
}
