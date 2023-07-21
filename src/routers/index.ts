import Home from '@/views/home.svelte';
import Action from '@/views/action.svelte';

const routes = {
  '/': Home,
  '/home': Home,
  '/action': Action
}

export default routes;