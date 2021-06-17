<?php

header('Access-Control-Allow-Origin', "*");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');


	$cn = mysqli_connect("localhost", "root","", "testmarket");
	$id_producto = $_POST['id_producto'];

	
	$rs = mysqli_query($cn,  " delete from products where  id_producto='$id_producto' ");



	mysqli_close($cn);


?>