import './bootstrap'
import './connector.js'

import { createApp } from 'vue'
import { h } from 'vue'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'

window.$inductor.loadVueComponent = async function(name, props, divId) {
    console.log('Initializing Vue Component:', name)
    console.log('Props:', props)
    const pageComponent = await resolvePageComponent<any>(
        `./Components/${name}.vue`,
        import.meta.glob('./Components/**/*.vue'),
    )
    const app = createApp({
        render: () => h(pageComponent.default, { ...props }),
    })
    // // Plugins
    // app.use(pinia);
    // app.use(PrimeVue, {
    //     theme: {
    //         preset: Aura,
    //     },
    // });

    // Mount
    app.mount(divId)
}
