import firebase from "firebase/compat/app";
import { FenextFirebaseConfigProps } from "./interface";
export interface FenextFirebaseDataBaseConstructorProps {
    app: firebase.app.App;
    config: FenextFirebaseConfigProps;
}
export declare class FenextFirebaseDataBase {
    private config;
    private app;
    private database;
    private ref?;
    constructor({ app, config }: FenextFirebaseDataBaseConstructorProps);
    private getDatabase;
    Ref(path: string): this;
    onGet(query?: string): Promise<any>;
    onSet(value: any): Promise<unknown>;
}
