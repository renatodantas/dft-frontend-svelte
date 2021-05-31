// Adding Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import App from './App.svelte'

const app = new App({
  target: document.getElementById('app')
})

export default app
