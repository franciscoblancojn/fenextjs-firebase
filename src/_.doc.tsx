export default {
    id: "FenextFirebase",
    name: "FenextFirebase",
    description: "Clase principal para inicializar y manejar las funcionalidades de Firebase en el proyecto, proporcionando acceso a la base de datos y al almacenamiento.",
    props: [
        {
            id: "config",
            type: "FenextFirebaseConfigProps",
            require: true,
            description: "Configuración necesaria para inicializar Firebase, incluyendo claves y URLs de Firebase.",
        }
    ],
    functions: [
        {
            id: "getConfig",
            name: "getConfig",
            useImport:false,
            description: "Obtiene la configuración actual utilizada para inicializar Firebase.",
            returns: {
                type: "FenextFirebaseConfigProps",
                description: "Objeto de configuración de Firebase.",
            }
        },
        {
            id: "getApp",
            name: "getApp",
            useImport:false,
            description: "Obtiene la instancia de la aplicación de Firebase. Si no está inicializada, la crea.",
            returns: {
                type: "firebase.app.App",
                description: "Instancia de la aplicación de Firebase.",
            }
        }
    ],
    // properties: [
    //     {
    //         id: "database",
    //         name: "FenextFirebaseDataBase",
    //         description: "Instancia de la clase FenextFirebaseDataBase para interactuar con la base de datos de Firebase.",
    //     },
    //     {
    //         id: "storega",
    //         name: "FenextFirebaseStorage",
    //         description: "Instancia de la clase FenextFirebaseStorage para interactuar con el almacenamiento de Firebase.",
    //     }
    // ],
    useExample: [
        {
            text: "Inicializar y usar la clase FenextFirebase",
            content: `const firebaseConfig = { /* Configuración de Firebase */ };
const fenextFirebase = new FenextFirebase({ config: firebaseConfig });

// Acceder a la base de datos
fenextFirebase.database.Ref('/users').onGet();

// Acceder al almacenamiento
fenextFirebase.storega.Ref('/images/user1').onUploadBase64(base64Data);`
        }
    ]
};
