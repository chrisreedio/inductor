<?php

namespace ChrisReedIO\Inductor\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * @see \ChrisReedIO\Inductor\Inductor
 */
class Inductor extends Facade
{
    protected static function getFacadeAccessor()
    {
        return \ChrisReedIO\Inductor\Inductor::class;
    }
}
