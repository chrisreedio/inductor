<?php

namespace ChrisReedIO\Inductor\Commands;

use Illuminate\Console\Command;

class InductorCommand extends Command
{
    public $signature = 'inductor';

    public $description = 'My command';

    public function handle(): int
    {
        $this->comment('All done');

        return self::SUCCESS;
    }
}
