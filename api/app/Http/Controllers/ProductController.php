<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\Product\StoreRequest;
use App\Models\Product;
use App\Http\Resources\Product\ProductResource;

class ProductController extends Controller
{
    public function store(Request $request)
    {
        // $data = $request->validated();
        $data = $request->validate([
            'title' =>'required|string',
            'desc' =>'required|string',
            'price' => 'required|integer',
            'img' => '',
            'category_id'=>'exists:categories,id',
            'type_id' => 'exists:types,id'
        ]);


        $filename = $data['img']->getClientOriginalName();
        $finalname = date('His') . $filename ;
        $filePath =  $data['img']->storeAs('images/', $finalname , 'public');

        $product = Product::create([
            'title' => $data['title'],
            'desc' => $data['desc'],
            'price' => $data['price'],
            'img' => url('/storage/' . $filePath),
            'category_id' => $data['category_id'],
            'type_id' => $data['type_id'],
        ]);
        return $product;

    }

    public function index () 
    {
            $products = Product::all();
            return ProductResource::collection($products);
    }

    public function show (Product $product)
    {
        return new ProductResource($product);
    }
}
