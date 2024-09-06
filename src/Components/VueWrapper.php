<?php

namespace ChrisReedIO\Inductor\Components;

use ChrisReedIO\Inductor\Inductor;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Str;
use Illuminate\View\Component;

class VueWrapper extends Component
{
    public function __construct(
        public string $component,
        public ?string $component_id = null,
        public array $props = []
    ) {
        $this->component_id = $this->component_id ?: Str::random(8);
    }

    public function render(): View
    {
        return view('inductor::components.vue-wrapper')
            ->with([
                'page' => Inductor::getSharedData(),
            ]);
    }
}
