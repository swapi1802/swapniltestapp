<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/Developers', 'DevelopersController@index');
Route::get('/Developers/{id}', 'DevelopersController@show');
Route::post('/Developers', 'DevelopersController@store');
Route::post('/Developers/{id}/update', 'DevelopersController@update');
Route::delete('/Developers/{id}', 'DevelopersController@delete');
Route::delete('/Developers/{id}/answers', 'DevelopersController@resetAnswers');