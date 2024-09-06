<?php

namespace ChrisReedIO\Inductor\Livewire;

use ChrisReedIO\Inductor\Inductor;
use Illuminate\Support\Str;
use Livewire\Component;

use function array_walk;
use function phpversion;

class VueApplication extends Component
{
    public ?string $component_id = null;

    public ?string $component = null;

    public array $props = [];

    public ?array $page = [];

    public function mount()
    {
        $this->component_id = Str::random(8);
        $this->page = Inductor::getSharedData();
        // $this->component = $component;
        // $this->props = $props;
        // $sharedData = Inductor::getSharedData();
        // $this->page['php_version'] = phpversion();
        // array_walk($sharedData, function ($value, $key) {
        //     $this->page[$key] = $value;
        // });
    }

    public function render()
    {
        return view('inductor::livewire.vue-application');
    }
}
