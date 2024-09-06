<?php

namespace ChrisReedIO\Inductor;

class Inductor
{
    public static array $sharedData = [];

    public static function share($key, $value): void
    {
        self::$sharedData[$key] = $value;
    }
}
