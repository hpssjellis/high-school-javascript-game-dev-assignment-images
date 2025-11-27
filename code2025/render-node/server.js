const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// 1. **CRITICAL FIX:** Use the environment variable $PORT provided by Render,
//    or default to 3000 for local development.
const PORT = process.env.PORT || 3000;

// Middleware to parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Handle GET requests (display the form)
app.get('/', (req, res) => {
    const checkResult = `<span style='color:red'> Try the magic word "fred"</span>`;
    // Send the HTML page
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Browser Title</title>
        </head>
        <body>
            <h3 align=center>Render-node-backend</h3>
            <form action="/" method="post">
                <label for="myText01">Enter Text:</label>
                <input type="text" id="myText01" name="myText01">
                <input type="submit" value="Submit">
            </form>
            ${checkResult}
        </body>
        </html>
    `);
});

// Handle POST requests (process the form submission)
app.post('/', (req, res) => {
    const myInputText01 = req.body.myText01;
    let myCheck = false;
    let checkResult = '';

    if (myInputText01 === 'fred') {
        myCheck = true;
    }

    if (myCheck) {
        checkResult = `<b style='color:green'> Cool! </b>`;
    } else {
        checkResult = `<span style='color:red'> Try the magic word "fred"</span>`;
    }
    
    // Re-send the HTML page with the new result
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Browser Title</title>
        </head>
        <body>
            <h3 align=center>T2A06-node-codesandbox</h3>
            <form action="/" method="post">
                <label for="myText01">Enter Text:</label>
                <input type="text" id="myText01" name="myText01">
                <input type="submit" value="Submit">
            </form>
            ${checkResult}
        </body>
        </html>
    `);
});

// 2. **CRITICAL FIX:** Listen on the PORT variable.
app.listen(PORT, '0.0.0.0', () => {
    console.log(`App listening on port ${PORT}`);
    // Note: Logging the URL is optional but good practice.
    // On Render, the host will not be 'localhost' but '0.0.0.0'
    // or simply the external URL provided by Render.
});
