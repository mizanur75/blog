<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Category;

class CategoryController extends Controller
{
    public function index(){
        $categories = Category::orderBy('id','DESC')->paginate(10);
        return $categories;
    }

    public function addCategory(Request $request){
        $this->validate($request, [
            'name' => 'required'
        ]);
        $category = new Category();
        $category->name = $request->name;
        $category->save();
    }
}
