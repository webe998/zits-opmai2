import '@/app.css'
import '@/style/preCss.css'
import '@/style/layout.css'
import '@/style/action.css'
import '@/style/output.css'
import App from '@/App.svelte'

const app = new App({
  target: document.getElementById('app')
})

export default app
