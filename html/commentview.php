<?php
header('Access-Control-Allow-Origin: *');

    if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }

    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers:{$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

        
    }

   define(DB_HOST, 'localhost');
   define(DB_USER, 'jesse');
   define(DB_PASSWORD, '390070730');
   define(DB_NAME, 'Userdatabase');


    // connect to the DB
    $mysql = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
    
    $location="http://localhost/uploads/";
$data = json_decode(file_get_contents('php://input'),true);
    
    // build our sql query
    $sql = "SELECT * FROM Comment WHERE Movie_ID= '" . $data['movieid'] . "'";


    if ($results = $mysql->query($sql))
    {
        // build our data into a PHP arrray
        while ($row = $results->fetch_assoc())
        {
            
            $comment['c_ID'] = $row['Comment_ID'];
            $comment['c_title'] = $row['Comment_Title'];
            $comment['c_comment'] = $row['Comment'];
            $comment['u_ID'] = $row['User_ID'];

             


             


             
          
         
            


            // assign the individual user to the overall users array
            $comment11[] = $comment;
        }

        // return a happy message w/json encoded data representing users
        http_response_code(201);
        echo json_encode($comment11);
        echo json_encode();
    }
    else 
    {
        $return = array("message"=>"No records returned.");
        http_response_code(422);
        echo json_encode($return);
    }
?>


