<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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

    public function login(Request $request){
        try{
            $request->validate([
                'email' => 'required|email',
                'password' => 'required',
            ]); 
    
            $form = $request->only('email', 'password');
    
            if(Auth::attempt($form)){
                $user = Auth::user();
                // $token = $user->createToken('token')->plainTextToken;
                return response()->json([
                    'error' => false,
                    'user' => $user
                ], 200);
            }else{
                $error =[
                    'email' => ['Email or password is incorrect'],
                ];
        
                return response()->json([
                    'error' => true,
                    'errors' => $error
                ], 422);
            }
            
        }catch(ValidationException $error){
            $error =[
                'email' => ['Email or password is incorrect'],
            ];
    
            return response()->json([
                'error' => true,
                'errors' => $error
            ], 422);
        }
    }
}