import "firebase/compat/auth";
import "firebase/storage";
import { FenextFirebaseConfigProps } from "./interface";
import { FenextFirebaseDataBase } from "./database";
import { FenextFirebaseStorage } from "./storage";
export interface FenextFirebaseConstructorProps {
    config: FenextFirebaseConfigProps;
}
export declare class FenextFirebase {
    private config;
    private app;
    database: FenextFirebaseDataBase;
    storega: FenextFirebaseStorage;
    constructor({ config }: FenextFirebaseConstructorProps);
    private getConfig;
    private getApp;
}
