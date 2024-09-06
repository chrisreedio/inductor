import './bootstrap'
import './connector.js'

import { createApp } from 'vue'
import { h } from 'vue'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'

console.log('Inductor Initializing...')

const experimentalLoad = async (path) => {
    const component = await import(`./Components/${path}.vue`);
    return component.default;
};


window.$inductor.loadVueComponent = async function(name, props, divId) {
    console.log('Initializing Vue Component:', name)
    console.log('Props:', props)
    const componentPathPrefix = `./Components`
    // const pagesPath = componentPathPrefix + '/**/*.vue'
    // console.log('Pages Path:', pagesPath)
    // print the current directory
    // console.log('Current Directory:', __dirname)
    const pageComponent = await resolvePageComponent<any>(
        `${componentPathPrefix}/${name}.vue`,
        import.meta.glob('./Components/**/*.vue'),
    )
    // const pageComponent = await experimentalLoad(name)
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
