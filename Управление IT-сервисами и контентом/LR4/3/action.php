<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    
    header('Content-Type: application/json');
    print(json_encode(save($name, $email)));
    
    function save($name, $email) {
        
        $connection = mysqli_connect('localhost', 'g910870e_db', '7*46qyoX', 'g910870e_db');
        if(!$connection) {
            return array('success' => false,'error' => "DB connection is closed.");
        }
        
        $sql = "INSERT INTO `users` (name, email) VALUES ('$name', '$email')";
    
        $result = mysqli_query($connection, $sql);
        if(!$result) {
            return array('success' => false,'error' => mysqli_error($connection));
        }
        
        mysqli_close($connection);
        
        return array('success' => true,'error' => null);
    }
?>