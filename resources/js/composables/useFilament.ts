import { inject } from 'vue'

export function useFilament() {
    const wire = inject<any>('wire')

    function openModal(id: number) {
        console.log('Opening Modal')
        wire.mountTableAction('edit', id)
        // wire.$dispatch('openModal', [{{ request()->id }}])
        // wire.$dispatch('openModal', [id])
    }

    return {
        wire,
        openModal,
    }
}
