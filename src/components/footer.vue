  <template>
  <footer class="bg-green-800 text-white px-8 py-10 mt-10">
    <!--THIS IS THE FOOTER OF THE WEBSITE-->

  <div class="flex flex flex-wrap justify-between gap-8">
  <div>
  <h3 class="text-yellow-300 font-bold text-lg mb-3">TEMBERA URWANDA</h3> 
  <P class="text-sm text-green-200">discover the bauty of land of a thousand hills</P>
  </div>
  <!--quick links-->
  <div>
  <h3 class="text-yellow-300 font-bold text-lg mb-3">QUICKLINKS</h3>
  <ul class="space-y-2 text-sm">
  <li><RouterLink to="/" class="hover:text-yellow-300">Home</RouterLink></li>
  <li><RouterLink to="/about" class="hover:text-yellow-300">About Us</RouterLink></li>
  <li><RouterLink to="/services" class="hover:text-yellow-300">Services</RouterLink></li>
  <li><RouterLink to="/contact" class="hover:text-yellow-300">Contact Us</RouterLink></li>
  </ul>
  </div>
  <!--Destinations-->
  <div>    
  <h3 class="text-yellow-300 font-bold text-lg mb-3">DESTINATIONS</h3>
  <ul class="space-y-2 text-sm">
  <li><RouterLink to="./north" class="hover:text-yellow-300">Nothern</RouterLink></li>
  <li> <RouterLink to="./East" class="hover:text-yellow-300">Eastern</RouterLink></li> 
  <li> <RouterLink to="./west" class="hover:text-yellow-300">Western</RouterLink></li>
  <li><RouterLink to="./south" class="hover:text-yellow-300">Southern</RouterLink></li>
  <li><RouterLink to="./kigali" class="hover:text-yellow-300">kigali</RouterLink></li>
  </ul>
  </div>
  <div >
  <!--contacts info-->
  <h3 class="text-yellow-300 font-bold text-lg mb-3">CONTACTS</h3>
  <ul class="space-y-2 text-green-300">
  <li>ahantunyaburanga@gmail.com</li>
  <li>+250000000</li>
  <li>kagugu-kigali-Rwanda</li>
  </ul>
  </div> 
  </div>
  <!--place for copyright-->
  <div class="border-t border-green-600 mt-8 pt-4 text-sm text-green-300"> 
  <p class="text-center ">@ copyright 2025 visit Rwanda All rights Reserved</p> 
  </div>
  </footer>
  </template>
  

