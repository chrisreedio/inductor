export default interface Inductor {
    // Properties
    // components: Record<string, Promise<any>>
    components: any
    plugins: any[]

    // Methods
    loadSamples: () => Promise<void>
    loadVueComponent: (name: string, props: any, divId: string) => Promise<void>
    addComponentPath: (newComponents: Record<string, Promise<any>>) => void
    addPlugin: (plugin: any) => void
}
