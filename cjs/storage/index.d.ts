import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/storage";
import { FenextFirebaseConfigProps, onGetBase64Props } from "../interface";
export interface FenextFirebaseStorageConstructorProps {
    app: firebase.app.App;
    config: FenextFirebaseConfigProps;
}
export declare class FenextFirebaseStorage {
    private config;
    private app;
    private storega;
    private ref?;
    constructor({ config, app }: FenextFirebaseStorageConstructorProps);
    private getStorage;
    Ref(path: string): this;
    onUploadBase64(base64: string): Promise<unknown>;
    onDelete(): Promise<unknown>;
    onGetBase64(props?: onGetBase64Props): Promise<unknown>;
    onGetUrl(): Promise<unknown>;
}
