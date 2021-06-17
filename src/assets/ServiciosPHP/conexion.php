<?php

function fnconexion() {
	$cn = mysqli_connect('localhost', 'root', 'root');

	$bd = mysqli_select_db($cn, ' la base de datos' )
}


?>