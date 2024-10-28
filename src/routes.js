import Buttons from "./pages/Buttons.vue";
import FormInputText from "./pages/FormInputText.vue";
import ButtonsIcons from './pages/ButtonsIcons.vue';
import Homepage from './pages/Homepage.vue'
import Error404 from "./pages/Error404.vue";
import FormInputSelect from "./pages/FormInputSelect.vue";

export const routes = [
  {path: '/', component: Homepage},
  {path: '/button', component: Buttons},
  {path: '/button-icon', component: ButtonsIcons},
  {path: '/input-text', component: FormInputText},
  {path: '/:pathName(.*)', component: Error404},
  {path: '/input-select', component: FormInputSelect}
]