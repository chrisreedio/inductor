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

type Props = {
    component_id: string,
    props: Record<string, any>,
    // props[key: string]: any,
}

$inductor.loadVueComponent = async function(name, props, divId) {
    console.log('Initializing Vue Component:', name)
    console.log('Props:', props)
    const nakedDivId = divId.substring(1)
    const componentId = document.getElementById(nakedDivId)?.parentElement?.getAttribute('wire:id')
    if (!componentId) {
        console.error('Component ID not found for:', nakedDivId)
        return
    }
    const liveWireComponent = window.Livewire.all().find(
        (component: any) => component.id === componentId,
    )

    // console.log('LiveWire Component:', liveWireComponent)

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
    app.provide('wire', liveWireComponent ? liveWireComponent.$wire : null)
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
