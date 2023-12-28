"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FenextFirebase = void 0;
const tslib_1 = require("tslib");
const Buffer_1 = require("fenextjs-functions/cjs/parse/Buffer");
const app_1 = tslib_1.__importDefault(require("firebase/compat/app"));
require("firebase/compat/auth");
require("firebase/storage");
const storage_1 = require("firebase/storage");
class FenextFirebase {
    config;
    app;
    storega;
    ref;
    constructor({ config }) {
        this.config = config;
        this.app = this.getApp();
        this.storega = this.getStorage();
    }
    getConfig() {
        return this.config;
    }
    getApp() {
        return !app_1.default?.apps?.length
            ? app_1.default.initializeApp(this.getConfig())
            : app_1.default.app();
    }
    getStorage() {
        return (0, storage_1.getStorage)(this.app, this.config.storageUrl);
    }
    Ref(path) {
        this.ref = (0, storage_1.ref)(this.storega, path);
        return this;
    }
    async onUploadBase64(base64) {
        try {
            if (!this.ref) {
                throw new Error("Not Load Ref");
            }
            const snapshot = await (0, storage_1.uploadString)(this.ref, base64, "data_url");
            const url = await (0, storage_1.getDownloadURL)(snapshot.ref);
            return url;
        }
        catch (error) {
            return error;
        }
    }
    async onDelete() {
        try {
            if (!this.ref) {
                throw new Error("Not Load Ref");
            }
            const snapshot = await (0, storage_1.deleteObject)(this.ref);
            return snapshot;
        }
        catch (error) {
            return error;
        }
    }
    async onGetBase64(props) {
        const options = {
            dataType: `data:image/png;base64,`,
            ...props,
        };
        try {
            if (!this.ref) {
                throw new Error("Not Load Ref");
            }
            const result = await (0, storage_1.getBytes)(this.ref);
            const base64 = options.dataType + (0, Buffer_1.parseBufferToBase64)(result);
            return base64;
        }
        catch (error) {
            return error;
        }
    }
}
exports.FenextFirebase = FenextFirebase;
//# sourceMappingURL=index.js.map