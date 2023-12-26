function calculateResult() {
    try {
        const ortaAgym = parseFloat(document.getElementById("sr").value) || 0;
        const rk1Val = parseFloat(document.getElementById("rk1").value) || 0;
        const rk2Val = parseFloat(document.getElementById("rk2").value) || 0;
        const emtihan = parseFloat(document.getElementById("em").value) || 0;

        const totalSum = ortaAgym * 0.4 + ((rk1Val + rk2Val) / 2) * 0.2 + emtihan * 0.4;
        const total = totalSum.toFixed(2);

        const resultElement = document.getElementById("resultValue");
        const resultTextElement = document.getElementById("resultText");

        // Handle result cases
        if (totalSum < 25) {
            setResult("red", total, ["F", "FX"]);
        } else if (totalSum < 50) {
            setResult("red", total, ["F", "FX"]);
        } else if (totalSum < 55) {
            setResult("yellow", total, ["D", "D+"]);
        } else if (totalSum < 60) {
            setResult("yellow", total, ["C-"]);
        } else if (totalSum < 65) {
            setResult("yellow", total, ["C"]);
        } else if (totalSum < 70) {
            setResult("yellow", total, ["C"]);
        } else if (totalSum < 75) {
            setResult("blue", total, ["C+", "B-"]);
        } else if (totalSum < 80) {
            setResult("blue", total, ["B"]);
        } else if (totalSum < 85) {
            setResult("blue", total, ["B"]);
        } else if (totalSum < 90) {
            setResult("blue", total, ["B+"]);
        } else if (totalSum < 95) {
            setResult("green", total, ["A-"]);
        } else if (totalSum <= 100) {
            setResult("green", total, ["A"]);
        }

    } catch (error) {
        setResult("red", "Invalid input");
    }
}

function setResult(color, value, text = "Input your data") {
    const resultElement = document.getElementById("resultValue");
    const resultTextElement = document.getElementById("resultText");

    resultElement.textContent = value;
    resultElement.style.color = color;
    resultTextElement.textContent = text;
    resultTextElement.style.color = color;
}
