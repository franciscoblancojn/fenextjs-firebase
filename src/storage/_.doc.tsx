export default {
    id: "FenextFirebaseStorage",
    name: "Storage",
    useImport: false,
    description:
        "Clase para interactuar con Firebase Storage, proporcionando métodos para cargar, eliminar y obtener archivos en formato Base64 o URL.",
    functions: [
        {
            id: "Ref",
            name: "Ref",
            useImport: false,
            type: "(path: string) => FenextFirebaseStorage",
            description:
                "Define la referencia de almacenamiento en la ruta especificada.",
            props: [
                {
                    id: "path",
                    type: "string",
                    require: true,
                    description: "Ruta en Firebase Storage para la referencia.",
                },
            ],
            returns: {
                type: "FenextFirebaseStorage",
                description:
                    "Retorna la instancia actual para permitir encadenamiento de métodos.",
            },
        },
        {
            id: "onUploadBase64",
            name: "onUploadBase64",
            useImport: false,
            type: "(base64: string) => Promise<string | Error>",
            description:
                "Sube un archivo en formato Base64 a la referencia actual en Firebase Storage.",
            props: [
                {
                    id: "base64",
                    type: "string",
                    require: true,
                    description:
                        "Cadena en formato Base64 del archivo a subir.",
                },
            ],
            returns: {
                type: "Promise<string | Error>",
                description:
                    "Promesa que resuelve en la URL del archivo subido o un error si falla la subida.",
            },
            useExample: [
                {
                    text: "Subir archivo en formato Base64",
                    content: `const fb = new FenextFirebase({ config });
fb.storage.Ref('/images/avatar.png').onUploadBase64(base64String);`,
                },
            ],
        },
        {
            id: "onDelete",
            name: "onDelete",
            useImport: false,
            type: "() => Promise<void | Error>",
            description:
                "Elimina el archivo en la referencia actual de Firebase Storage.",
            props: [],
            returns: {
                type: "Promise<void | Error>",
                description:
                    "Promesa que se resuelve cuando el archivo ha sido eliminado o en un error.",
            },
            useExample: [
                {
                    text: "Eliminar archivo en Firebase Storage",
                    content: `const fb = new FenextFirebase({ config });
fb.storage.Ref('/images/avatar.png').onDelete();`,
                },
            ],
        },
        {
            id: "onGetBase64",
            name: "onGetBase64",
            useImport: false,
            type: "(props?: onGetBase64Props) => Promise<string | Error>",
            description:
                "Obtiene el archivo en la referencia actual de Firebase Storage en formato Base64.",
            props: [
                {
                    id: "props",
                    type: "onGetBase64Props",
                    require: false,
                    description:
                        "Opciones para personalizar el formato de datos (por defecto: 'data:image/png;base64,').",
                },
            ],
            returns: {
                type: "Promise<string | Error>",
                description:
                    "Promesa que resuelve en una cadena Base64 del archivo o en un error.",
            },
            useExample: [
                {
                    text: "Obtener archivo en formato Base64",
                    content: `const fb = new FenextFirebase({ config });
fb.storage.Ref('/images/avatar.png').onGetBase64();`,
                },
            ],
        },
        {
            id: "onGetUrl",
            name: "onGetUrl",
            useImport: false,
            type: "() => Promise<string | Error>",
            description:
                "Obtiene la URL de descarga del archivo en la referencia actual de Firebase Storage.",
            props: [],
            returns: {
                type: "Promise<string | Error>",
                description:
                    "Promesa que resuelve en la URL del archivo o en un error.",
            },
            useExample: [
                {
                    text: "Definir referencia y obtener URL",
                    content: `const fb = new FenextFirebase({ config });
fb.storage.Ref('/images/avatar.png').onGetUrl();`,
                },
            ],
        },
    ],
};
