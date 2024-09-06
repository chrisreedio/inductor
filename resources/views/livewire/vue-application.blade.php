<div>
{{--    {{ $test_prop }}--}}
    <h3>{{ $component_id }}</h3>
    <pre>{!! print_r($page, true) !!}}</pre>
    <pre>{!! print_r($props, true) !!}}</pre>
    {{--<div id="wirevue-{{ $component_id }}"--}}
    {{--     data-wirevue--}}
    {{--     data-wirevue-id="{{ $component_id }}"--}}
    {{--     data-wirevue-component="{{ $component }}"--}}
    {{--     data-wirevue-props="{{ json_encode(array_merge($page ?? [], $props ?? []), JSON_UNESCAPED_SLASHES) }}">--}}
    {{--</div>--}}
</div>
