<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class UserController extends Controller
{
    //Register user
    public function register(Request $request){
        try{
            $formValidate = $request->validate([
                'name' => 'required|string',
                'email' => 'required|email|unique:users,email',
                'password' => 'required|min:6|confirmed',
            ]);
            User::create($formValidate);

            return response()->json([
                'error' => false,
                'message' => 'User registered successfully'
            ], 201);
        }catch(ValidationException $error){
            return response()->json([
                'error' => true,
                'errors' => $error->errors(),
            ], 422);
        }
    }
}
