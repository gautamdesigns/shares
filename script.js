const calculateButton = document.getElementById("calculate-btn");

calculateButton.addEventListener("click", function () {
    // PRICE SETTINGS
    const totalBoxPrice = 115;
    const totalCigarettes = 10;
    const pricePerCigarette = totalBoxPrice / totalCigarettes;

    // INPUT VALUES
    const gautam = parseFloat(document.getElementById("gautam").value) || 0;
    const madhukar = parseFloat(document.getElementById("madhukar").value) || 0;
    const sadhin = parseFloat(document.getElementById("sadhin").value) || 0;
    const suraj = parseFloat(document.getElementById("suraj").value) || 0;
    const vivek = parseFloat(document.getElementById("vivek").value) || 0;

    // TOTAL CIGARETTES
    const total = gautam + madhukar + sadhin + suraj + vivek;

    // RESULT DIV
    const resultContainer = document.getElementById("result-container");

    // VALIDATION
    if (total.toFixed(3) != 10.0) {
        resultContainer.innerHTML = `
            <h2>Total Cigarettes = ${total.toFixed(3)}</h2>
            <p style="color:red;">
                Error: Total cigarettes must be exactly 10
            </p>
        `;

        return;
    }

    // INDIVIDUAL CALCULATIONS
    const gautamAmount = (gautam * pricePerCigarette).toFixed(2);
    const madhukarAmount = (madhukar * pricePerCigarette).toFixed(2);
    const sadhinAmount = (sadhin * pricePerCigarette).toFixed(2);
    const surajAmount = (suraj * pricePerCigarette).toFixed(2);
    const vivekAmount = (vivek * pricePerCigarette).toFixed(2);

    // SHOW RESULTS
    resultContainer.innerHTML = `

        <h2>Total Verified = 10 Cigarettes</h2>

        <p>Gautam : ₹${gautamAmount}</p>

        <p>Madhukar : ₹${madhukarAmount}</p>

        <p>Sadhin : ₹${sadhinAmount}</p>

        <p>Suraj : ₹${surajAmount}</p>

        <p>Vivek : ₹${vivekAmount}</p>

    `;
});
