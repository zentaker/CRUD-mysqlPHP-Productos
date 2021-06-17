<?php

header('Access-Control-Allow-Origin', "*");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');


	$cn = mysqli_connect("localhost", "root","", "testmarket");
	$id_producto = $_POST['id_producto'];
	$productName = $_POST['productName'];
	$productCompany = $_POST['productCompany'];
	$productPrice= $_POST['productPrice'];
	$productImage1 = $_POST['productImage1'];
	
	$rs = mysqli_query($cn,  " update products set productName='$productName',  productCompany='$productCompany', productPrice='$productPrice',productImage1='$productImage1' where  id_producto='$id_producto' ");



	mysqli_close($cn);


?>