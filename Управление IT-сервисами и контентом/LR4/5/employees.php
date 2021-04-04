<?php
    $tabn = $_GET['tabn'];
    
    header('Content-Type: application/json');
    print(json_encode(getEmployee($tabn)));
    
    function getEmployee($tabn) {
        $connection = mysqli_connect('localhost', 'g910870e_db', '7*46qyoX', 'g910870e_db');
        if(!$connection) {
            return array('success' => false,'error' => "DB connection is closed.");
        }
        
        $sql = "SELECT * FROM `a_employees` WHERE tabn = $tabn";
        
        $result = mysqli_query($connection, $sql);
        if(!$result) {
            return array('success' => false,'error' => mysqli_error($connection));
        }
        
        $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);
        
        mysqli_close($connection);
        
        if(count($rows) == 1) {
            $employee = $rows[0];
            
            $entity = array(
                    'tabn' => $employee["tabn"],
                    'surname' => $employee["surname"],
                    'name' => $employee["name"],
                    'patronymic' => $employee["patronymic"],
                    'gender' => $employee["gender"],
                    'position' => $employee["position"],
                    'department' => $employee["department"],
                    'salary' => $employee["salary"],
                    'date_n' => $employee["date_n"]
                );
            
            return array('success' => true, 'entity' => $entity);
        }
        else {
            return array('success' => false, 'error' => "Сотрудник не найден");
        }
    
        
    }
?>