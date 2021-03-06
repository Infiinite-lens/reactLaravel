<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Log;
use Exception;
use App\Models\Employee;

class EmployeesController extends Controller
{
    //Get Employee list from database

    public function getEmployeeList(){
        try {
           $employees =  Employee::orderBy('id','ASC')->get();
           return response()-> json($employees);
        } catch (Exception $e) {
            Log::error($e);
        }
    }
}
