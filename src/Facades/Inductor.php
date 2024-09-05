<?php

namespace Inductor\Inductor\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * @see \Inductor\Inductor\Inductor
 */
class Inductor extends Facade
{
    protected static function getFacadeAccessor()
    {
        return \Inductor\Inductor\Inductor::class;
    }
}
