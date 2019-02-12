<?php

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();
Route::group(['prefix'=>'admin', 'namespace'=>'Admin', 'middleware'=>'auth'], function(){
    Route::get('home', 'HomeController@index')->name('home');
    Route::get('show-profile', 'HomeController@show')->name('show-profile');
    Route::resource('post', 'PostController');

    //category
    Route::get('all-category', 'CategoryController@index');
    Route::post('store-category', 'CategoryController@addCategory');
});
