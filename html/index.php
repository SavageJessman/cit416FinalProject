<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: *');

header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

 include'db.php';

    // connect to the DB
    $mysql = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

    // grab the data that is coming here via POST from React and decode it into a PHP object
    $data = json_decode(file_get_contents('php://input'));

    // build our sql query
    $sql = "INSERT into names values (null, '" . $data->u_firstname. "',
                                        '" . $data->u_lastname. "')";

    if ($mysql->query($sql))
    {   
        $return = array("message"=>"Record Inserted Successfully");
        http_response_code(201);
        echo json_encode($return);
        
    }
    else 
    {
        $return = array("message"=>"Thomas will not work here.");
        http_response_code(422);
        echo json_encode($return);
    }
?>
