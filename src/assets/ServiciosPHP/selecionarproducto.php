<?php
   header('Access-Control-Allow-Origin', "*");

   $prod = $_POST['prod'];
   $cn = mysqli_connect("localhost", "root","", "testmarket");
   $rs = mysqli_query($cn, 'SELECT productName, productCompany, productPrice, productImage1 FROM products  where id_producto ='.$prod);
 
   while ($row = mysqli_fetch_assoc($rs)) {
      // cada fila meterla en el arreglo
       $res[] = $row;
   }
   echo json_encode($res, JSON_UNESCAPED_UNICODE);
   mysqli_close($cn);
 
 
 
 
 
?>