@extends('layouts.login')

@section('content')
<div class="container">
    <div class="col-md-4 ml-auto mr-auto">
        <div class="card card-login card-plain">
            <form class="form" method="" action="">
                @csrf
                <div class="card-header text-center">
                    <div class="logo-container">
                        <img src="{{ asset('img/logo.png') }}" alt="">
                    </div>
                </div>
                <div class="card-body">
                    <div class="input-group no-border input-lg">
                        <div class="input-group-prepend">
                                <span class="input-group-text">
                                  <i class="now-ui-icons users_circle-08"></i>
                                </span>
                        </div>
                        <input type="text" class="form-control" placeholder="First Name...">
                    </div>
                    <div class="input-group no-border input-lg">
                        <div class="input-group-prepend">
                                <span class="input-group-text">
                                  <i class="now-ui-icons text_caps-small"></i>
                                </span>
                        </div>
                        <input type="text" placeholder="Last Name..." class="form-control" />
                    </div>
                </div>
                <div class="card-footer text-center">
                    <a href="#pablo" class="btn btn-primary btn-round btn-lg btn-block">Get Started</a>
                    <div class="pull-left">
                        <h6>
                            <a href="#pablo" class="link">Create Account</a>
                        </h6>
                    </div>
                    <div class="pull-right">
                        <h6>
                            <a href="#pablo" class="link">Need Help?</a>
                        </h6>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection
