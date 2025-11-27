const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Handle GET requests (display the form)
app.get('/', (req, res) => {
    // Check state is 'Try the magic word' by default
    const checkResult = `<span style='color:red'> Try the magic word</span>`;
    
    // Send the HTML page
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
        checkResult = `<span style='color:red'> Try the magic word</span>`;
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

app.listen(port, () => {
    console.log(\`App listening at http://localhost:${port}\`);
});
