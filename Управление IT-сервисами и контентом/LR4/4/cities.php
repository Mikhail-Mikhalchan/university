<?php
    $countryId = $_GET['countryId'];
    
    header('Content-Type: application/json');
    print(json_encode(getCities($countryId)));
    
    function getCities($countryId) {
        $connection = mysqli_connect('localhost', 'g910870e_db', '7*46qyoX', 'g910870e_db');
        if(!$connection) {
            return array('success' => false,'error' => "DB connection is closed.");
        }
        
        $sql = "SELECT * FROM `cities` WHERE id_c='$countryId'";
        
        $result = mysqli_query($connection, $sql);
        if(!$result) {
            return array('success' => false,'error' => mysqli_error($connection));
        }
        
        $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);
        
        mysqli_close($connection);
        
        $cities = array();
        
        foreach ($rows as $row) {
            $cities[] = array('id' => $row['id'], 'name' => $row['name']);
        }
        
        return array('success' => true, 'items' => $cities, 'error' => null);
    }
?>