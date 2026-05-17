const calculateButton = document.getElementById("calculate-btn");

const resultContainer = document.getElementById("result-container");

const inputs = {
  gautam: document.getElementById("gautam"),
  madhukar: document.getElementById("madhukar"),
  sadhin: document.getElementById("sadhin"),
  suraj: document.getElementById("suraj"),
  vivek: document.getElementById("vivek")
};

calculateButton.addEventListener("click", () => {
  const totalPrice =
    parseFloat(document.getElementById("item-price").value) || 0;

  const shares = {
    Gautam: parseFloat(inputs.gautam.value) || 0,
    Madhukar: parseFloat(inputs.madhukar.value) || 0,
    Sadhin: parseFloat(inputs.sadhin.value) || 0,
    Suraj: parseFloat(inputs.suraj.value) || 0,
    Vivek: parseFloat(inputs.vivek.value) || 0
  };

  const totalShares = Object.values(shares).reduce(
    (sum, value) => sum + value,
    0
  );

  if (totalPrice <= 0) {
    resultContainer.innerHTML = `<p class="error">
                Enter valid total price
            </p>`;

    return;
  }

  if (totalShares <= 0) {
    resultContainer.innerHTML = `<p class="error">
                Enter valid shares
            </p>`;

    return;
  }

  const pricePerShare = totalPrice / totalShares;

  let resultHTML = `
        <h2>
            Total Shares = ${totalShares.toFixed(3)}
        </h2>
    `;

  for (const person in shares) {
    const amount = (shares[person] * pricePerShare).toFixed(2);

    resultHTML += `
            <p>
                ${person} : ₹${amount}
            </p>
        `;
  }

  resultContainer.innerHTML = resultHTML;
});
