<?php
    header('Content-Type: application/json');
    print(json_encode(getCountries()));
    
    function getCountries() {
        $connection = mysqli_connect('localhost', 'g910870e_db', '7*46qyoX', 'g910870e_db');
        if(!$connection) {
            return array('success' => false,'error' => "DB connection is closed.");
        }
        
        $sql = "SELECT * FROM `countries`";
        
        $result = mysqli_query($connection, $sql);
        if(!$result) {
            return array('success' => false,'error' => mysqli_error($connection));
        }
        
        $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);
        
        mysqli_close($connection);
        
        $countries = array();
        
        foreach ($rows as $row) {
            $countries[] = array('id' => $row['id'], 'name' => $row['name']);
        }
        
        return array('success' => true, 'items' => $countries, 'error' => null);
    }
?>