import { PageProps as InertiaPageProps } from "@inertiajs/core";
import { AxiosInstance } from "axios";

declare global {
    interface Window {
        axios: AxiosInstance;
        $inductor: {
            loadVueComponent: (
                name: any,
                props: any,
                divId: string
            ) => Promise<void>;
        };
    }

    const $inductor: {
        loadVueComponent: (
            name: any,
            props: any,
            divId: string
        ) => Promise<void>;
    };
}

declare module "vue" {
    /*interface ComponentCustomProperties {
        route: typeof ziggyRoute;
    }*/
}

/*declare module "@inertiajs/core" {
    interface PageProps extends InertiaPageProps, AppPageProps {}
}*/
