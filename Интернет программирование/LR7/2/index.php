<html>
    <head>
        <meta charset="utf-8">
        <title>24-hour clock to 12-hour clock</title>
    </head>
    <body>
        <?php 
            $time24 = rand(0, 23);
            $time12 = "";
            
            if($time24 >= 0 and $time24 < 12) {
                $time12 = $time24 == 0 ? 12 : $time24;
                $time12 .= " AM";
            }
            else {
                $time12 = $time24 == 12 ? 12 : $time24 - 12;
                $time12 .= " PM";
            }
            
            print("<p><strong>24-hour clock: </strong>$time24</p>");
            print("<p><strong>12-hour clock: </strong>$time12</p>");
        ?>
    </body>
</html>