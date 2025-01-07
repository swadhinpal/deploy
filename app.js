/*const express = require("express");
const app =express();

app.get('/', (req, res) => {
    res.send("Hello World Fine!")
})

app.listen(5000, ()=> {
    console.log("Server is running on port 5000");
})*/

const express = require("express");
const math = require("./math"); // Import the math.js module
const app = express();

app.get("/", (req, res) => {
    // Example: Perform some math operations
    const a = 10;
    const b = 5;
    const sum = math.add(a, b);
    const difference = math.sub(a, b);
    const product = math.mul(a, b);
    const quotient = math.div(a, b);

    // Send the results as a response
    res.send(`
        <h1>Math Function Results:</h1>
        <p>${a} + ${b} = ${sum}</p>
        <p>${a} - ${b} = ${difference}</p>
        <p>${a} * ${b} = ${product}</p>
        <p>${a} / ${b} = ${quotient}</p>
    `);
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
