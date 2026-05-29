<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <nav class="fixed inset-x-0 top-0 bg-green-800 h-16 flex items-center justify-between px-6 shadow-md z-20">
    <div class="flex items-center gap-3 hover:text-blue-300">
      <img src= "/src/assets/vist-rwanda.jpg"alt="Logo"class="h-8 w-8" />
      <span class="text-white text-lg font-bold">TEMBERURWANDA</span>
    </div>
    <div class="flex items-center gap-4">
      <ul class="flex gap-8 text-sm font-medium text-white items-center">

        <li>
          <RouterLink to="/" class="px-3 py-2 text-white font-bold hover:text-yellow-300">Home</RouterLink>
        </li>

        <li>
          <RouterLink to="/about" class="px-3 py-2 text-white font-bold hover:text-yellow-300">About</RouterLink>
        </li>

        <li>
          <RouterLink to="/Services"><a href="#" class="px-3 py-2 text-white font-bold hover:text-yellow-300">Services</a></RouterLink>
        </li>

     
        <li class="relative group">
          <a href="#" class="px-3 py-2 text-white font-bold hover:text-yellow-300">Gallery v</a>

          <ul class="absolute left-0 mt-2 w-40 bg-green-600 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
          <li>
              <RouterLink to="/images"><a href="#" class="block px-4 py-2 hover:bg-green-700">Images</a></RouterLink>
            </li>
            <li>
              <RouterLink to="/videos"><a href="#" class="block px-4 py-2 hover:bg-green-700">Videos</a></RouterLink>
            </li>
          </ul>
        </li>

        
        <li class="relative group">
          <a href="#" class="px-3 py-2 text-white font-bold hover:text-yellow-300">Destination v</a>

          <ul class="absolute left-0 mt-2 w-40 bg-green-600 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
            <RouterLink to="/Kigali"> <li><a href="#" class="block px-4 py-2 hover:bg-green-700">Kigali</a></li></RouterLink>
            <RouterLink to="/South"> <li><a href="#" class="block px-4 py-2 hover:bg-green-700">South</a></li></RouterLink>
             <RouterLink to="/West"><li><a href="#" class="block px-4 py-2 hover:bg-green-700">West</a></li></RouterLink>
             <RouterLink to="/North"><li><a href="#" class="block px-4 py-2 hover:bg-green-700">North</a></li></RouterLink>
            <RouterLink to="/East"> <li><a href="#" class="block px-4 py-2 hover:bg-green-700">East</a></li></RouterLink>
          </ul>
        </li>
        <li>
          <RouterLink to="/Contact"><a href="#" class="px-3 py-2 text-white font-bold hover:text-yellow-300">Contact</a></RouterLink>
        </li>

      </ul>
     
    </div>

  </nav>
</template>