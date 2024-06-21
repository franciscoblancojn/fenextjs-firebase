import firebase from "firebase/compat/app";
import {
    getDatabase,
    ref,
    child,
    get,
    set,
    Database,
    DatabaseReference,
} from "firebase/database";
import { FenextFirebaseConfigProps } from "./interface";

export interface FenextFirebaseDataBaseConstructorProps {
    app: firebase.app.App;
    config: FenextFirebaseConfigProps;
}
export class FenextFirebaseDataBase {
    private config: FenextFirebaseConfigProps;
    private app: firebase.app.App;

    private database: Database;
    private ref?: DatabaseReference;

    constructor({ app, config }: FenextFirebaseDataBaseConstructorProps) {
        this.config = config;
        this.app = app;
        this.database = this.getDatabase();
    }
    private getDatabase() {
        return getDatabase(this.app, this.config.databaseUrl);
    }

    public Ref(path: string) {
        this.ref = ref(this.database, path);
        return this;
    }
    public async onGet(query?: string) {
        try {
            if (!this.ref) {
                throw new Error("Not Load Ref");
            }

            const data = await get(child(this.ref, query ?? "/"));
            
            return await data.val()
        } catch (error) {
            return error;
        }
    }
    public async onSet(value: any) {
        try {
            if (!this.ref) {
                throw new Error("Not Load Ref");
            }

            const data = await set(this.ref, value);

            return data;
        } catch (error) {
            return error;
        }
    }
}
