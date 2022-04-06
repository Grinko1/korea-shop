<?php

namespace App\Http\Controllers;


use App\Models\Category;
use App\Http\Requests\Category\StoreRequest;
use App\Http\Requests\Category\UpdateRequest;
use App\Http\Resources\Category\CategoryResource;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        return CategoryResource::collection($categories);
    }
    public function store(StoreRequest $request)
    {
        $data = $request->validated();
        Category::create($data);
        return response(['json' => 'success']);
    }
    public function update(Category $category , UpdateRequest $request)
    {
            $data = $request->validated();
            $category->update($data);
            return response(['json' => 'Updated successfully']);
    }
    public function delete(Category $category)
    {
        $category->delete();
        return response(['json' => 'Deleted']);
    }

}
