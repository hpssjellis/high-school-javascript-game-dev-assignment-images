<?php
// Initialize variables for the result message and the input text.
$checkResult = "<span style='color:red'> Try the magic word 'fred'</span>";
$myInputText01 = '';

// Check if the form was submitted (i.e., if the request method is POST)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the input text from the form data.
    // We use isset() and the null coalescing operator (??) for safety.
    $myInputText01 = $_POST['myText01'] ?? '';

    // The logic from the Node.js application
    $myCheck = false;
    if ($myInputText01 === 'fred') {
        $myCheck = true;
    }

    // Determine the result message and color
    if ($myCheck) {
        $checkResult = "<b style='color:green'> Cool! </b>";
    } else {
        $checkResult = "<span style='color:red'> Try the magic word 'fred'</span>";
    }
}

// Now, render the HTML page, embedding the dynamic content.
// The form's 'action' is set to the current file (index.php) and the method is 'post'.
?>
<!DOCTYPE html>
<html>
<head>
    <title>Browser Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <h3>Render-PHP-submit</h3>

    <form action="" method="post" >
        <label for="myText01">Enter Text:</label>
        <!-- The 'value' attribute keeps the entered text after submission -->
   <!-- <input type="text" id="myText01" name="myText01" value="<?= htmlspecialchars($myInputText01); ?>"> -->
        <input type="text" id="myText01" name="myText01" value="">
        <input type="submit" value="Submit">
    </form>
    
    <div style="text-align: center;">
        <?php echo $checkResult; ?>
    </div>

</body>
</html>
