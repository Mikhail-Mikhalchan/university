<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Поиск</title>
        <link rel="stylesheet" type="text/css" href="style.css"/>
    </head>
    <body>
        <form action="" method="post">
            <p>
                <input name="searchValue" placeholder="Поиск по названию и описанию товара" />
                <input type="submit" name="search" value="Найти"/>
            </p>
        </form>
        <?php
            include 'search.php';
            
            if (!isset($_POST['search'])) return;
            
            $searchValue = $_POST['searchValue'];
            
            $rows = products_search($searchValue);
            
            if($rows == null || count($rows) == 0) {
                
                print("<p>Записей не найдено</p>");
            }
            else {
                foreach ($rows as $row) {
                    $name = $row['name'];
                    $price = $row['price'];
                    $description = $row['description'];
                    
                    $tableContent .= "<tr><td>$name</td><td>$price</td><td>$description</td></tr>"; 
                }
                
                print("
                    <table class='table'>
                        <thead><th>Наименование</th><th>Цена</th><th>Описание</th></thead>
                        <tbody>$tableContent</tbody>
                    </table>
                ");
            }
        ?>
    </body>
</html>