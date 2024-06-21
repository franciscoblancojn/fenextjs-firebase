import { parseBufferToBase64 } from "fenextjs-functions/cjs/parse/Buffer";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/storage";
import {
    FirebaseStorage,
    StorageReference,
    getStorage,
    uploadString,
    ref,
    getDownloadURL,
    deleteObject,
    getBytes,
} from "firebase/storage";
import { FenextFirebaseConfigProps,  onGetBase64Props } from "./interface";

export interface FenextFirebaseStorageConstructorProps {
    app: firebase.app.App;
    config: FenextFirebaseConfigProps;
}
export class FenextFirebaseStorage {
    private config: FenextFirebaseConfigProps;
    private app: firebase.app.App;

    private storega: FirebaseStorage;
    private ref?: StorageReference;

    constructor({ config,app }: FenextFirebaseStorageConstructorProps) {
        this.config = config;
        this.app = app;
        this.storega = this.getStorage();
    }
    
    private getStorage() {
        return getStorage(this.app, this.config.storageUrl);
    }

    public Ref(path: string) {
        this.ref = ref(this.storega, path);
        return this;
    }

    public async onUploadBase64(base64: string) {
        try {
            if (!this.ref) {
                throw new Error("Not Load Ref");
            }
            const snapshot = await uploadString(this.ref, base64, "data_url");

            const url = await getDownloadURL(snapshot.ref);

            return url;
        } catch (error) {
            return error;
        }
    }
    public async onDelete() {
        try {
            if (!this.ref) {
                throw new Error("Not Load Ref");
            }
            const snapshot = await deleteObject(this.ref);

            return snapshot;
        } catch (error) {
            return error;
        }
    }
    public async onGetBase64(props?: onGetBase64Props) {
        const options: onGetBase64Props = {
            dataType: `data:image/png;base64,`,
            ...props,
        };
        try {
            if (!this.ref) {
                throw new Error("Not Load Ref");
            }
            const result = await getBytes(this.ref);

            const base64 = options.dataType + parseBufferToBase64(result);

            return base64;
        } catch (error) {
            return error;
        }
    }
    public async onGetUrl() {
        try {
            if (!this.ref) {
                throw new Error("Not Load Ref");
            }

            const url = await getDownloadURL(this.ref);

            return url;
        } catch (error) {
            return error;
        }
    }
}
