<?php

header('Access-Control-Allow-Origin', "*");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');


	$cn = mysqli_connect("localhost", "root","", "testmarket");
	$productName = $_POST['productName'];
	$productCompany = $_POST['productCompany'];
	$productPrice = $_POST['productPrice'];
	$productImage1 = $_POST['productImage1'];
	
	$rs = mysqli_query($cn,  "insert into products (productName, id_categoria,productCompany, productPrice, productImage1) values('$productName','3','$productCompany','$productPrice', '$productImage1' )");


	echo mysqli_insert_id($cn);
	mysqli_close($cn);


?>