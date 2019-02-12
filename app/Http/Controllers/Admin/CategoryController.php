<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Category;

class CategoryController extends Controller
{
    public function index(){
        $categories = Category::paginate(10);
        return $categories;
    }

    public function addCategory(Request $request){
        return $request;
    }
}
