export default {
    id: "FenextFirebaseDataBase",
    name: "DataBase",
    useImport: false,
    description:
        "Clase que permite interactuar con Firebase Database, proporcionando métodos para obtener y establecer datos en una referencia específica.",
    functions: [
        {
            id: "Ref",
            name: "Ref",
            useImport: false,
            type: "(path: string) => FenextFirebaseDataBase",
            description:
                "Define la referencia de la base de datos en la ruta especificada.",
            props: [
                {
                    id: "path",
                    type: "string",
                    require: true,
                    description: "Ruta en la base de datos para la referencia.",
                },
            ],
            returns: {
                type: "FenextFirebaseDataBase",
                description:
                    "Retorna la instancia actual para permitir encadenamiento de métodos.",
            },
        },
        {
            id: "onGet",
            name: "onGet",
            useImport: false,
            type: "(query?: string) => Promise<any>",
            description:
                "Obtiene datos de la base de datos en la referencia actual o en la consulta especificada.",
            props: [
                {
                    id: "query",
                    type: "string",
                    require: false,
                    description:
                        "Ruta adicional en la referencia actual de la que se desea obtener los datos. Por defecto es la raíz ('/').",
                },
            ],
            returns: {
                type: "Promise<any>",
                description:
                    "Promesa que resuelve en los datos obtenidos o en un error.",
            },
            useExample: [
                {
                    text: "Establecer referencia y obtener datos",
                    content: `const fb = new FenextFirebase({ config });
fb.database.Ref('/users').onGet();`,
                },
            ],
        },
        {
            id: "onSet",
            name: "onSet",
            useImport: false,
            type: "(value: any) => Promise<void>",
            description:
                "Establece datos en la referencia actual de la base de datos.",
            props: [
                {
                    id: "value",
                    type: "any",
                    require: true,
                    description:
                        "Datos que se desean guardar en la referencia actual.",
                },
            ],
            returns: {
                type: "Promise<void>",
                description:
                    "Promesa que se resuelve cuando los datos han sido establecidos o se presenta un error.",
            },
            useExample: [
                {
                    text: "Establecer datos en una referencia",
                    content: `const fb = new FenextFirebase({ app, config });
fb.database.Ref('/settings').onSet({ theme: 'dark' });`,
                },
            ],
        },
    ],
};
