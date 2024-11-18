export default {
    id: "Interfaces",
    name: "Interfaces",
    description:
        "Interfaces utilizadas en la configuración y operaciones de la clase FenextFirebase.",
    useImport: false,
    interfaces: [
        {
            id: "onGetBase64Props",
            name: "onGetBase64Props",
            description:
                "Opciones para configurar el tipo de dato al obtener un archivo en formato Base64 desde Firebase Storage.",
            props: [
                {
                    id: "dataType",
                    type: "string",
                    require: false,
                    description:
                        "Prefijo que especifica el tipo MIME del archivo en formato Base64. Ejemplo: 'data:image/png;base64,'.",
                },
            ],
        },
        {
            id: "FenextFirebaseConfigProps",
            name: "FenextFirebaseConfigProps",
            description:
                "Propiedades de configuración requeridas para inicializar la conexión con Firebase, incluyendo URL de almacenamiento y base de datos.",
            props: [
                {
                    id: "apiKey",
                    type: "string",
                    require: true,
                    description:
                        "Clave API de Firebase para la autenticación en el proyecto.",
                },
                {
                    id: "authDomain",
                    type: "string",
                    require: true,
                    description:
                        "Dominio de autenticación asociado con el proyecto de Firebase.",
                },
                {
                    id: "projectId",
                    type: "string",
                    require: true,
                    description:
                        "Identificador único del proyecto en Firebase.",
                },
                {
                    id: "storageBucket",
                    type: "string",
                    require: true,
                    description:
                        "Bucket de almacenamiento en Firebase para los archivos.",
                },
                {
                    id: "messagingSenderId",
                    type: "string",
                    require: true,
                    description:
                        "Identificador del remitente para el servicio de mensajería de Firebase.",
                },
                {
                    id: "appId",
                    type: "string",
                    require: true,
                    description: "Identificador de la aplicación en Firebase.",
                },
                {
                    id: "storageUrl",
                    type: "string",
                    require: true,
                    description:
                        "URL del servicio de almacenamiento en Firebase.",
                },
                {
                    id: "databaseUrl",
                    type: "string",
                    require: true,
                    description: "URL de la base de datos de Firebase.",
                },
            ],
        },
    ],
};
