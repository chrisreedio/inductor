import './bootstrap'
import './connector.js'

import { createApp } from 'vue'
import { h } from 'vue'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'

// console.log('Inductor Initializing...')
$inductor.loadSamples = async function() {
    window.$inductor.components = window.$inductor.components || []

    // window.$inductor.components.push(import.meta.glob('./components/**/*.vue'))
    const samples = import.meta.glob('./components/**/*.vue')
    // console.log('Inductor Sample Vue Components Imported:', samples)
    // @ts-ignore
    window.$inductor.components = {
        ...window.$inductor.components,
        ...samples,
    }

}

$inductor.loadVueComponent = async function(name, props, divId) {
    console.log('Initializing Vue Component:', name)
    console.log('Props:', props)
    const componentPathPrefix = `./components`
    const pageComponent = await resolvePageComponent<any>(
        `${componentPathPrefix}/${name}.vue`,
        // import.meta.glob('./components/**/*.vue'),
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
    // console.log('Inductor Initialized!')
})

$inductor.addComponentPath = function(newComponents: Record<string, Promise<any>>) {
    // console.log('Adding ' + Object.keys(newComponents).length + ' new application level Vue component(s) to inductor...')
    // console.log('New Components:', newComponents)
    window.$inductor.components = window.$inductor.components || []
    window.$inductor.components = {
        ...window.$inductor.components,
        ...newComponents,
    }
}
