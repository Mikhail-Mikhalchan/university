<?php
    $tabn = $_POST['tabn'];
    $salary = $_POST['salary'];
    
    header('Content-Type: application/json');
    print(json_encode(updateEmployee($tabn, $salary)));
    
    function updateEmployee($tabn, $salary) {
        $connection = mysqli_connect('localhost', 'g910870e_db', '7*46qyoX', 'g910870e_db');
        if(!$connection) {
            return array('success' => false,'error' => "DB connection is closed.");
        }
        
        if(count($salary) == 0) {
            return array('success' => false,'error' => "Поле 'Оклад' должно быть заполнено!");
        }
        
        $sql = "UPDATE `a_employees` SET salary = $salary WHERE tabn = $tabn";
        
        $result = mysqli_query($connection, $sql);
        if(!$result) {
            return array('success' => false,'error' => mysqli_error($connection));
        }
        
        mysqli_close($connection);
    
        return array('success' => true);
    }
?>