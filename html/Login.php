<?php
include'db.php';



    // connect to the DB
    $mysql = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

    // grab the data that is coming here via POST from React and decode it into a PHP object
      $data = json_decode(file_get_contents('php://input'),true);

    // build our sql query
   $sql = "SELECT * FROM User WHERE Email = '" . $data['u_email'] . "' AND Password = '" . $data['u_password'] . "'";


    $count = mysqli_num_rows($mysql->query($sql));


  

 if($count == 1)
    {   
        $return = array("message"=>"Login Sucessfully");
       
        echo json_encode($return);
       
   }
   else 
    {
        $return = array("message"=>"Your Username Password is wrong");
        
        echo json_encode($return);
    }
?>
