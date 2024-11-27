function f1(x, y) {
    return x * Math.sqrt(y);  // f(x, y) = x * sqrt(y)
}

function f2(x, y) {
    return 2 * x * y;  // f(x, y) = 2xy
}


function rungeKutta() {
    let x0 = parseFloat(document.getElementById('x0').value);  
    let y0 = parseFloat(document.getElementById('y0').value);  
    let h = parseFloat(document.getElementById('h').value);  
    let x_final = parseFloat(document.getElementById('xFinal').value);  
    let problemType = document.getElementById('problemType').value; 

    let y = y0;
    let x = x0;
    let iterations = (x_final - x0) / h;  
    let resultText = "<h5>Iteraciones:</h5>";

    let f = (problemType === "1") ? f1 : f2;

    for (let i = 0; i < iterations; i++) {
        let k1 = f(x, y);
        let k2 = f(x + h / 2, y + k1 * h / 2);
        let k3 = f(x + h / 2, y + k2 * h / 2);
        let k4 = f(x + h, y + k3 * h);

        y = y + (h / 6) * (k1 + 2 * k2 + 2 * k3 + k4);
        x = x + h;

        resultText += `<p>Iteración ${i + 1}: x = ${x.toFixed(1)}, y = ${y.toFixed(4)}</p>`;
    }

    document.getElementById('result').innerHTML = resultText;
}
