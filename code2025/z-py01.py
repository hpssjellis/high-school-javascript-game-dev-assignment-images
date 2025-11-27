from flask import Flask, request

app = Flask(__name__)
MAGIC_WORD = 'fred'

@app.route('/', methods=['GET', 'POST'])
def index():
    # Default message when first loading the page (GET request)
    result = "<span style='color:red'> Try the magic word</span>"
    
    # Logic for handling form submission (POST request)
    if request.method == 'POST':
        # Get the input text from the form data
        my_input = request.form.get('myText01')
        
        if my_input == MAGIC_WORD:
            result = "<b style='color:green'> Cool! </b>"
        else:
            result = "<span style='color:red'> Try the magic word</span>"

    # HTML template with the dynamic result
    html_content = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <title>Browser Title</title>
    </head>
    <body>
        <h3 align=center>T2A06-python-codesandbox</h3>
        <form action="/" method="post">
            <label for="myText01">Enter Text:</label>
            <input type="text" id="myText01" name="myText01">
            <input type="submit" value="Submit">
        </form>
        {result}
    </body>
    </html>
    """
    return html_content

if __name__ == '__main__':
    app.run(debug=True)
