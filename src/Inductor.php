<?php

namespace ChrisReedIO\Inductor;

class Inductor
{
    public array $sharedData = [];

    public function share($key, $value): self
    {
        $this->sharedData[$key] = $value;

        return $this;
    }
}
