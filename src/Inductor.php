<?php

namespace ChrisReedIO\Inductor;

class Inductor
{
    protected static array $sharedData = [];

    public static function share($key, $value): void
    {
        self::$sharedData[$key] = $value;
    }

    public static function getSharedData(): array
    {
        return self::$sharedData;
    }
}
