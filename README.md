# 💳 Loan Advisor – Smart Loan Eligibility Dashboard

A modern, interactive loan eligibility calculator that uses **real banking logic (FOIR + EMI)** instead of simple rules.  
Built with **HTML, CSS, JavaScript, and Chart.js**, featuring a clean fintech-style UI.

---

## 🚀 Features

- 🏠 Home, 🚗 Car, 💼 Personal loan selection
- 📊 FOIR-based eligibility calculation
- 🧮 EMI calculation using compound interest
- 📈 Visual income vs EMI comparison (Chart.js)
- 🎨 Modern dashboard UI with cards and animations
- 📱 Responsive design

---

## 🧠 Eligibility Logic (Realistic Banking Model)

### 1️⃣ FOIR (Fixed Obligation to Income Ratio)
| Loan Type | FOIR |
|----------|------|
| Home     | 50%  |
| Car      | 45%  |
| Personal | 40%  |

---

## Calculations

```text

Max EMI = (Monthly Income × FOIR) − Existing EMI

EMI = P × r × (1 + r)^n / ((1 + r)^n − 1)

Eligible Loan Amount = Max EMI × EMI Factor

Where:

P = Loan Amount

r = Monthly Interest Rate

n = Tenure in months

