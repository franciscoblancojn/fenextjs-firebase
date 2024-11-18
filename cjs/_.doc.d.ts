declare const _default: {
    id: string;
    name: string;
    description: string;
    useBreadcrumb: boolean;
    props: {
        id: string;
        type: string;
        require: boolean;
        description: string;
    }[];
    functions: {
        id: string;
        name: string;
        useImport: boolean;
        description: string;
        returns: {
            type: string;
            description: string;
        };
        useExample: {
            text: string;
            content: string;
        }[];
    }[];
    useExample: {
        text: string;
        content: string;
    }[];
};
export default _default;
