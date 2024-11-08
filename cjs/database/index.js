"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FenextFirebaseDataBase = void 0;
const database_1 = require("firebase/database");
class FenextFirebaseDataBase {
    config;
    app;
    database;
    ref;
    constructor({ app, config }) {
        this.config = config;
        this.app = app;
        this.database = this.getDatabase();
    }
    getDatabase() {
        return (0, database_1.getDatabase)(this.app, this.config.databaseUrl);
    }
    Ref(path) {
        this.ref = (0, database_1.ref)(this.database, path);
        return this;
    }
    async onGet(query) {
        try {
            if (!this.ref) {
                throw new Error("Not Load Ref");
            }
            const data = await (0, database_1.get)((0, database_1.child)(this.ref, query ?? "/"));
            return await data.val();
        }
        catch (error) {
            return error;
        }
    }
    async onSet(value) {
        try {
            if (!this.ref) {
                throw new Error("Not Load Ref");
            }
            const data = await (0, database_1.set)(this.ref, value);
            return data;
        }
        catch (error) {
            return error;
        }
    }
}
exports.FenextFirebaseDataBase = FenextFirebaseDataBase;
//# sourceMappingURL=index.js.map