<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class IsAdmin
{
    public function handle($request, Closure $next)
    {
        $user = Auth::user();

        if (!$user || !$user->role || $user->role->name !== 'Admin') {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        return $next($request);
    }
}
