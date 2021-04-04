<?php
    header('Content-Type: application/json');
    print(json_encode(getIngredients()));
    
    function getIngredients() {
        $connection = mysqli_connect('localhost', 'g910870e_db', '7*46qyoX', 'g910870e_db');
        if(!$connection) {
            return array('success' => false,'error' => "DB connection is closed.");
        }
        
        $sql = "SELECT p.id 'pizza_id', p.iname 'pizza_name', p.prize 'pizza_price', p.img 'pizza_img', t.id 'type_id', t.tname 'type_name' 
                FROM `a_pizza` p 
                INNER JOIN `a_types` t ON t.id = p.id_t;";
        
        $result = mysqli_query($connection, $sql);
        if(!$result) {
            return array('success' => false,'error' => mysqli_error($connection));
        }
        
        $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);
        
        mysqli_close($connection);
        
        if(count($rows) > 0) {
            $items = array();
            
            foreach ($rows as $row) {
                
                $items[] = array(
                    'id' => $row['pizza_id'], 
                    'name' => $row['pizza_name'],
                    'price' => $row['pizza_price'],
                    'img' => $row['pizza_img'],
                    'type' => array('id' => $row['type_id'], 'name' => $row['type_name'])
                );
            }
            
            return array('success' => true, 'items' => $items);
        }
        else {
            return array('success' => false, 'error' => "Ингредиентов не найдено");
        }
    
        
    }
?>