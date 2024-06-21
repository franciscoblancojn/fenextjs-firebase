"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FenextFirebase = void 0;
const tslib_1 = require("tslib");
const app_1 = tslib_1.__importDefault(require("firebase/compat/app"));
require("firebase/compat/auth");
require("firebase/storage");
const database_1 = require("./database");
const storega_1 = require("./storega");
class FenextFirebase {
    config;
    app;
    database;
    storega;
    constructor({ config }) {
        this.config = config;
        this.app = this.getApp();
        this.database = new database_1.FenextFirebaseDataBase({ app: this.app, config });
        this.storega = new storega_1.FenextFirebaseStorage({ app: this.app, config });
    }
    getConfig() {
        return this.config;
    }
    getApp() {
        return !app_1.default?.apps?.length
            ? app_1.default.initializeApp(this.getConfig())
            : app_1.default.app();
    }
}
exports.FenextFirebase = FenextFirebase;
//# sourceMappingURL=index.js.map