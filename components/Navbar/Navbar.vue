<template>
    <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div class="container-fluid">
            <NuxtLink class="navbar-brand" to="/">Intro Nuxt</NuxtLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <NuxtLink class="nav-link active" aria-current="page" to="/">Inicio</NuxtLink>
                </li>
                <li class="nav-item">
                <NuxtLink class="nav-link" to= "/home">Home</NuxtLink>
                </li>
                <li class="nav-item">
                <NuxtLink class="nav-link" to="/about">About</NuxtLink>
                </li>
                <li class="nav-item">
                <NuxtLink class="nav-link" to="/posts">Posts</NuxtLink>
                </li>
                <li class="nav-item">
                <NuxtLink class="nav-link" to="/movies">Movies</NuxtLink>
                </li>
            </ul>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
    </nav>
</template>