import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Services from '@/views/Services.vue'
import Contact from '@/views/Contact.vue'
import east from '@/views/East.vue'
import west from '@/views/West.vue'
import north from '@/views/North.vue'
import south from '@/views/South.vue'
import kigali from '@/views/Kigali.vue'
import images from '@/views/images.vue'
import videos from '@/views/videos.vue'

export const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/services', name: 'Services', component: Services },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/East', name: 'East', component: east },
  { path: '/North', name: 'North', component: north },
  { path: '/South', name: 'South', component: south },
  { path: '/West', name: 'West', component: west },
  { path: '/Kigali', name: 'Kigali', component: kigali },
  { path: '/Images', name: 'Images', component: images },
  { path: '/videos', name: 'Videos', component: videos }
]

export default routes
