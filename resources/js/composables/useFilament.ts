import { inject } from 'vue'

export function useFilament() {
    const wire = inject<any>('wire')

    function openModal() {
        console.log('Opening Modal')
        wire.mountTableAction()
    }

    return {
        wire,
        openModal,
    }
}
