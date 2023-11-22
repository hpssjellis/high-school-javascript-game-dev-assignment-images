
<?php
$myCheck = false;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $myInputText01 = $_POST['myText01'];
   // if (strpos($myInputText01, 'fred') !== false) {
   if ($myInputText01 == 'fred') {
        $myCheck = true;
    } 
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Simple Form Checker</title>
</head>
<body>
    <form action="index.php" method="post">
        <label for="myText01">Enter Text:</label>
        <input type="text" id="myText01" name="myText01">
        <input type="submit" value="Submit">
    </form>
    <?php
    if ($myCheck ) {echo "<b style='color:green'> Cool! </b>";}
    else {echo "<span style='color:red'> Try the magic word</span>";}
    ?>
</body>
</html>
