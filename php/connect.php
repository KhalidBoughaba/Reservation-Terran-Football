
<?php
$con = mysqli_connect("localhost","root","","signup");
$nom = $_POST['nom'];
$prenom = $_POST['prenom'];
$phone = $_POST['phone'];
$password = $_POST['password'];

$querySQL = "INSERT INTO registration(prenom, nom, password, phone) VALUES ('$prenom','$nom','$password','$phone')";
mysqli_query($con,$querySQL);
?>

