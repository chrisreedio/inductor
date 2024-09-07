import { AxiosInstance } from 'axios'
import Inductor from '@/interfaces/inductor'

declare global {
    interface Window {
        axios: AxiosInstance;
        Livewire: any;
        $inductor: Inductor;
        addComponentPath: (newComponents: Record<string, Promise<any>>) => void;

    }

    // const $inductor: {
    //     loadSamples: () => Promise<void>;
    //     loadVueComponent: (
    //         name: any,
    //         props: any,
    //         divId: string,
    //     ) => Promise<void>;
    //     components: Record<string, Promise<any>>;
    //     addComponentPath: (newComponents: Record<string, Promise<any>>) => void;
    // }
}

declare module 'vue' {
    /*interface ComponentCustomProperties {
        route: typeof ziggyRoute;
    }*/
}

/*declare module "@inertiajs/core" {
    interface PageProps extends InertiaPageProps, AppPageProps {}
}*/
