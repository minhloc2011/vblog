<!doctype html>
<html lang="{{ app()->getLocale() }}">
    @include('partials._head')
<body>
<!-- Navbar -->
@include('partials._navbar')
<!-- End Navbar -->
<div class="page-header clear-filter" filter-color="orange">
    <div class="page-header-image" style="background-image:url({{ asset('img/login.jpg') }})"></div>
    <div class="content">
        @yield('content')
    </div>
    <!-- Footer -->
    @include('partials._footer')
    <!-- End Footer -->
</div>

<script src="{{asset('js/vendor.js')}}" ></script>
<script src="{{asset('js/app.js')}}" ></script>
</body>
</html>
