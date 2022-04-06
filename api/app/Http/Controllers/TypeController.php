<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Type;
use App\Http\Resources\Type\TypeResource;
use App\Http\Requests\Type\StoreRequest;
use App\Http\Requests\Type\UpdateRequest;



class TypeController extends Controller
{
    public function index()
    {
        $types = Type::all();

        return TypeResource::collection($types);
    }
    public function store(StoreRequest $request)
    {
       
        $data = $request->validated();
 
        Type::create($data);
        return response(['json' => 'success']);
    }
    public function update(Type $type , UpdateRequest $request)
    {
            $data = $request->validated();
            $type->update($data);
            return response(['json' => 'Updated successfully']);
    }
    public function delete(Type $type)
    {
        $type->delete();
        return response(['json' => 'Deleted']);
    }
}
