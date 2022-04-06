<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['prefix' => 'categories'], function () {
    Route::get('/', 'CategoryController@index');
    Route::post('/', 'CategoryController@store');
    Route::patch('/{category}', 'CategoryController@update');
    Route::delete('/{category}', 'CategoryController@delete');
});
Route::group(['prefix' => 'types'], function () {
    Route::get('/', 'TypeController@index');
    Route::post('/', 'TypeController@store');
    Route::patch('/{type}', 'TypeController@update');
    Route::delete('/{type}', 'TypeController@delete');
});

Route::group(['prefix' => 'products'], function () {
    Route::post('/', 'ProductController@store');
    Route::get('/', 'ProductController@index');
    Route::get('/{product}', 'ProductController@show');
});