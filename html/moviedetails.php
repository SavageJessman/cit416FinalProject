<?php
header('Access-Control-Allow-Origin: *');

include'db.php';

if (isset($_GET['id'])){
    $mysql = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

$id= mysqli_real_escape_string($mysql,$_GET['id']);

    // connect to the DB
    
$location="http://localhost/uploads/";
    // build our sql query
    $sql = "SELECT Movie_ID,Title,Synopsis,Release_Date,Genre,m_cast,MoviePic_ID from Movie WHERE Movie_ID='$id'";

    if ($results = $mysql->query($sql))
    {
        // build our data into a PHP arrray
        while ($row = $results->fetch_assoc())
        {
            $movie['m_ID'] = $row['Movie_ID'];
            $movie['m_title'] = $row['Title'];
            $movie['m_synopsis'] = $row['Synopsis'];
            $movie['m_release'] = $row['Release_Date'];
            $movie['m_genre'] = $row['Genre'];
            $movie['m_cast'] = $row['m_cast'];
            $movie['m_pic'] = $location.$row['MoviePic_ID'];
            


            // assign the individual user to the overall users array
            $movies[] = $movie;
        }

        // return a happy message w/json encoded data representing users
        http_response_code(201);
        echo json_encode($movies);
    }
    else 
    {
        $return = array("message"=>"No records returned.");
        http_response_code(422);
        echo json_encode($return);
    }
}
?>


