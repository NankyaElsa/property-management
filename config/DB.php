<?php

// define global variables
$DB_HOST = "localhost";
$DB_USER = "root";
$DB_PASS = "";
$DB_NAME = "property_management";

// Database class responsible for connecting to the database
class DB
{
    private static $instance = NULL;
    private $conn;

    private function __construct()
    {
        global $DB_HOST, $DB_USER, $DB_PASS, $DB_NAME;
        $this->conn = new PDO("mysql:host=$DB_HOST;dbname=$DB_NAME", $DB_USER, $DB_PASS);
        $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }

    // get instance of DB since it is a singleton
    public static function getInstance()
    {
        if (!isset(self::$instance)) {
            self::$instance = new DB();
        }
        return self::$instance;
    }

    // get connection
    public function getConnection()
    {
        return $this->conn;
    }
}
