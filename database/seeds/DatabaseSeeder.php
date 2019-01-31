<?php

use Illuminate\Database\Seeder;

use App\Category;
use App\Post;
use App\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);

        factory(App\User::class, 10)->create();
        factory(App\Category::class, 10)->create();
        factory(App\Post::class, 20)->create();
    }
}
