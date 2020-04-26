<?
    define(DB_HOST, 'localhost');
    define(DB_USER, 'cit416crud');
    define(DB_PASSWORD, 'coronavirus123!');
    define(DB_NAME, 'cit416crud');

    // connect to the DB
    $mysql = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

    // grab the data that is coming here via POST from React and decode it into a PHP object
    $data = json_decode(file_get_contents('php://input'));

    // build our sql query
    $sql = "INSERT into user values (null, '" . $data->first_name . "',
                                        '" . $mysql->real_escape_string($data->last_name) <?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: *');

header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

    define(DB_HOST, 'localhost');
    define(DB_USER, 'jesse');
    define(DB_PASSWORD, '390070730');
    define(DB_NAME, 'Userdatabase');

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
?>. "',
                                        '" . $data->email . "')";

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
