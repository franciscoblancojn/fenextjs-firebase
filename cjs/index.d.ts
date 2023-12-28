import "firebase/compat/auth";
import "firebase/storage";
import { onGetBase64Props } from "./interface";
export interface FenextFirebaseConfigProps {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    storageUrl: string;
}
export interface FenextFirebaseConstructorProps {
    config: FenextFirebaseConfigProps;
}
export declare class FenextFirebase {
    private config;
    private app;
    private storega;
    private ref?;
    constructor({ config }: FenextFirebaseConstructorProps);
    private getConfig;
    private getApp;
    private getStorage;
    Ref(path: string): this;
    onUploadBase64(base64: string): Promise<unknown>;
    onDelete(): Promise<unknown>;
    onGetBase64(props?: onGetBase64Props): Promise<unknown>;
}
