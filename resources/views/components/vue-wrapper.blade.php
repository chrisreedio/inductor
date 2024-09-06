<div>
    This is a simple Vue wrapper component. Component: {{ $component }}
    <div class="flex gap-x-2">
        <dt>Div ID:</dt>
        <dd>{{ $component_id }}</dd>
    </div>
    <h3>Props</h3>
    <pre>{{ print_r($props,true) }}</pre>
    <hr>
    <h3>Page</h3>
    <pre>{{ print_r($page, true) }}</pre>
</div>
