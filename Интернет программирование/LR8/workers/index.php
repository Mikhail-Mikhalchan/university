<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Рабочие | Список</title>
        <link rel="stylesheet" type="text/css" href="style.css"/>
        <?php include 'list.php'; ?>
    </head>
    <body>
        <?php 
            $rows = workers_list();
            
            if($rows == null || count($rows) == 0) {
                
                print("<p>Записей не найдено</p>");
            }
            else {
                foreach ($rows as $row) {
                    $id = $row['id'];
                    $name = $row['name'];
                    $age = $row['age'];
                    
                    $tableContent .= "<tr><td>$id</td><td>$name</td><td>$age</td></tr>"; 
                }
                
                print("
                    <table class='table'>
                        <thead><th>id</th><th>Имя</th><th>Возраст</th></thead>
                        <tbody>$tableContent</tbody>
                    </table>
                ");
            }
        ?>
        <form action="add.php" method="post">
            <p>
                <label for="name">Имя</label><br>
                <input id="name" name="name" placeholder="Введите имя" />
            </p>
            <p>
                <label for="age">Возраст</label><br>
                <input type="number" id="age" name="age" placeholder="Введите число" min="0" />
            </p>
            <p><input type="submit" name="add" value="Сохранить"/></p>
        </form>
    </body>
</html>