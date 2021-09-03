<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Developers extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'Id'         => $this->Id,
            'First_Name'       => $this->First_Name,
            'Last_Name'       => $this->Last_Name,
            'Email'       => $this->Email,
            'Address'       => $this->Address,
            'Avatar'       => $this->Avatar,            
            'Phone'    => (int) $this->Phone,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
