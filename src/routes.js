import Buttons from "./pages/Buttons.vue";
import FormInputText from "./pages/FormInputText.vue";
import ButtonsIcons from './pages/ButtonsIcons.vue';
import Homepage from './pages/Homepage.vue'

export const routes = [
  {path: '/', component: Homepage},
  {path: '/button', component: Buttons},
  {path: '/button-icon', component: ButtonsIcons},
  {path: '/input-text', component: FormInputText}
]