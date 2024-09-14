import { createApp } from 'vue'
import './style.css'
import './assets/css/navbar.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Ikonalarni import qilish
import { faUser, faHouse, faBookOpen, faPhone, faBars } from '@fortawesome/free-solid-svg-icons'; // Solid ikonalari
import { faAddressCard } from '@fortawesome/free-regular-svg-icons'; // Regular ikonalari
import { faVuejs } from '@fortawesome/free-brands-svg-icons'; // Brend ikonalari

// Ikonalarni kutubxonaga qo'shish
library.add(faUser,  faBookOpen, faHouse, faBars,faPhone);

const app = createApp(App);

// FontAwesomeIcon komponentini globalda ulash
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');