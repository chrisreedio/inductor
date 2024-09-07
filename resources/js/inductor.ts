import './bootstrap'
import './connector.js'

import Inductor from './interfaces/inductor'

import { createApp } from 'vue'
import { h } from 'vue'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'

// console.log('Inductor Initializing...')
const InductorObject: Inductor = {
    // Properties
    components: [],
    plugins: [],

    // Methods
    // Method to load sample Vue components
    async loadSamples() {
        this.components = this.components || {}
        const samples = import.meta.glob('./components/**/*.vue')
        this.components = {
            ...this.components,
            ...samples,
        }
    },

    // Method to load a specific Vue component dynamically
    async loadVueComponent(name: string, props: any[], divId: string) {
        console.log('Initializing Vue Component!!!:', name)
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

        const componentPathPrefix = `./components`
        const pageComponent = await resolvePageComponent<any>(
            `${componentPathPrefix}/${name}.vue`,
            this.components,
        )

        const app = createApp({
            render: () => h(pageComponent.default, { ...props }),
        })

        app.provide('wire', liveWireComponent ? liveWireComponent.$wire : null)

        // Mount the configured plugins
        this.plugins.forEach(({ plugin, options }) => {
            // console.log("Mounting Plugin:", plugin);
            app.use(plugin, options);
        });

        app.mount(divId)
    },

    // Method to add new component paths to the inductor's components
    addComponentPath(newComponents: Record<string, Promise<any>>) {
        this.components = this.components || {}
        this.components = {
            ...this.components,
            ...newComponents,
        }
    },

    // Method to add new plugins to the inductor's plugins
    addPlugin(plugin: any, options = {}) {
        // console.log("Adding Plugin:", plugin);
        this.plugins.push({ plugin, options });
    },
}

// Assign the Inductor object to the global window.$inductor
window.$inductor = InductorObject

export default window.$inductor
