<div>
    {{--This is a Livewire Vue wrapper component. Component: {{ $component }}--}}
    {{--<div class="flex gap-x-2">--}}
    {{--    <dt>Div ID:</dt>--}}
    {{--    <dd>{{ $component_id }}</dd>--}}
    {{--</div>--}}
    {{--<h3>Props</h3>--}}
    {{--<pre>{{ print_r($props,true) }}</pre>--}}
    {{--<hr>--}}
    {{--<h3>Page</h3>--}}
    {{--<pre>{{ print_r($page, true) }}</pre>--}}
    <div id="wirevue-{{ $component_id }}"
         data-wirevue
         data-wirevue-id="{{ $component_id }}"
         data-wirevue-component="{{ $component }}"
         data-wirevue-props="{{ json_encode(array_merge($page ?? [], $props ?? []), JSON_UNESCAPED_SLASHES) }}">
    </div>
</div>
