import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/storage";
import { FenextFirebaseConfigProps } from "./interface";
import { FenextFirebaseDataBase } from "./database";
import { FenextFirebaseStorage } from "./storage";

export interface FenextFirebaseConstructorProps {
    config: FenextFirebaseConfigProps;
}
export class FenextFirebase {
    private config: FenextFirebaseConfigProps;
    private app: firebase.app.App;

    public database: FenextFirebaseDataBase;

    public storega: FenextFirebaseStorage;

    constructor({ config }: FenextFirebaseConstructorProps) {
        this.config = config;
        this.app = this.getApp();

        this.database = new FenextFirebaseDataBase({ app: this.app, config });

        this.storega = new FenextFirebaseStorage({ app: this.app, config });
    }

    private getConfig() {
        return this.config;
    }

    private getApp() {
        return !firebase?.apps?.length
            ? firebase.initializeApp(this.getConfig())
            : firebase.app();
    }
}
