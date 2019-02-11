@extends('layouts.admin.app')

@section('title', 'Home')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    
                    <admin-master></admin-master>
                   
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
