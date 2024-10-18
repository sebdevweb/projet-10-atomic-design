import Buttons from "./pages/Buttons.vue";
import Form from "./pages/Form.vue";
import ButtonsIcons from './pages/ButtonsIcons.vue';
import Homepage from './pages/Homepage.vue'
// import BlogPage from "./pages/BlogPage.vue";
// import ContactPage from "./pages/ContactPage.vue";
// import HomePage from "./pages/HomePage.vue";
// import NotFoundPage from "./pages/NotFoundPage.vue";
// import SinglePage from "./pages/SinglePage.vue";

export const routes = [
  {path: '/', component: Homepage},
  {path: '/button', component: Buttons},
  {path: '/button-icon', component: ButtonsIcons},
  {path: '/input', component: Form}
]