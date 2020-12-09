<?php header('Content-Type: text/html; charset=utf-8');

    include 'add.php';
    
    $page = getAbsoluteUri();
    $ip = $_SERVER['REMOTE_ADDR'];
     
    stat_add($ip, $page);
    
    function getAbsoluteUri() {
        
        $path = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http";
        $path .= "://"; 
        $path .= $_SERVER['HTTP_HOST']; 
        $path .= $_SERVER['REQUEST_URI']; 
              
        return $path;
    }
?>