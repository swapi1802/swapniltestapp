<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;
use Illuminate\Http\Request;

use \DB;
use App\Models\Developers;
use App\Http\Resources\Developers as DevelopersResource;
use App\Http\Resources\DevelopersCollection;

class DevelopersController extends Controller
{
    public function index()
    {
        return new DevelopersCollection(Developers::all());
    }

    public function show($id)
    {
        return new DevelopersResource(Developers::findOrFail($id));
    }

    public function store(Request $request)
    {
        $request->validate([
            'First_Name' => 'required|max:255',
            'Last_Name' => 'required|max:255',
            'Email' => 'required|max:255',
            'Address' => 'required|max:255',
        ]);

        $Developer = Developers::create($request->all());

        return (new DevelopersResource($Developer))
                ->response()
                ->setStatusCode(201);
    }

    public function update($id, Request $request)
    {
         //$Developer = Developers::findOrFail($id);
        // $Developer->First_Name = ($request->get('First_Name'));
        // $Developer->save();

        DB::table('Developers')
        ->where('Id', $id)
        ->update([
                'First_Name' => $request->get('First_Name'), 
                'Last_Name' => $request->get('Last_Name'),
                'Email' => $request->get('Email'),
                'Address' => $request->get('Address'),
                'Avatar' => $request->get('Avatar'),
                'Phone' => $request->get('Phone')
            ]);

        $Developer = Developers::findOrFail($id);

        return new DevelopersResource($Developer);
    }

    public function delete($id)
    {
        //$Developer = Developers::findOrFail($id)->delete();
        DB::delete('delete from Developers where Id = :id' ,['id' => $id]);

        return new DevelopersCollection(Developers::all());
    }

    public function resetAnswers($id)
    {
        $Developer = Developers::findOrFail($id);

        return new PlayerResource($Developer);
    }
}
