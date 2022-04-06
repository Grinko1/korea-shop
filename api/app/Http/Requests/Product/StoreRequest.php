<?php

namespace App\Http\Requests\Product;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' =>'required|string',
            'desc' =>'required|srting',
            'price' => 'required|integer',
            'img' => 'required|string',
            'category_id'=>'exists:categories,id',
            'type_id' => 'exists:types,id'
        ];
    }
}
