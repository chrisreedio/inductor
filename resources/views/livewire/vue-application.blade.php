<div id="wirevue-{{ $component_id }}"
     data-wirevue
     data-wirevue-id="{{ $component_id }}"
     data-wirevue-component="{{ $component }}"
     data-wirevue-props="{{ json_encode(array_merge($page, $props), JSON_UNESCAPED_SLASHES) }}">
</div>
