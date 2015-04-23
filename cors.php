<?php
header("Access-Control-Allow-Origin: *");

$isbn = $_GET['isbn'];
$a = file_get_contents("http://zoeken.bibliotheek.be/api/v0/search/?q=isbn:" . $isbn . "&authorization=ac135e89f84460a251a6283a14180a22");
echo $a;
