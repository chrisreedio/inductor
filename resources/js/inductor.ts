import './bootstrap'
import './connector.js'

import { createApp } from 'vue'
import { h } from 'vue'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'

console.log('Inductor Initializing...')
$inductor.loadSamples = async function() {
    window.$inductor.components = window.$inductor.components || []

    // window.$inductor.components.push(import.meta.glob('./Components/**/*.vue'))
    const samples = import.meta.glob('./Components/**/*.vue')
    console.log('Inductor Samples Initialized:', samples)
    // @ts-ignore
    window.$inductor.components = {
        ...window.$inductor.components,
        ...samples,
    }

}

$inductor.loadVueComponent = async function(name, props, divId) {
    console.log('Initializing Vue Component:', name)
    console.log('Props:', props)
    const componentPathPrefix = `./Components`
    const pageComponent = await resolvePageComponent<any>(
        `${componentPathPrefix}/${name}.vue`,
        // import.meta.glob('./Components/**/*.vue'),
        window.$inductor.components,
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

$inductor.loadSamples().then(() => {
    // console.log('Inductor Samples Loaded:', window.$inductor.components)
})

$inductor.addComponentPath = function(newComponents: Record<string, Promise<any>>) {
    console.log('Adding ' + Object.keys(newComponents).length + ' new Vue components to inductor...')
    window.$inductor.components = window.$inductor.components || []
    window.$inductor.components = {
        ...window.$inductor.components,
        ...newComponents,
    }
}
