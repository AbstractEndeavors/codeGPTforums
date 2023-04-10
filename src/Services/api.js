import {Appwrite} from "appwrite";

let api = {
    sdk: null,

    provider: () => {
        if (api.sdk) {
            return api.sdk;
        }

        let appwrite = new Appwrite();
        appwrite.setEndpoint(process.env.REACT_APP_ENDPOINT).setProject(process.env.REACT_APP_PROJECT);
        api.sdk = appwrite;
        return appwrite;
    },


    /**
     * Authentication
     **/

    createAccount: (email, password, name) => {
        return api.provider().account.create('unique()', email, password, name);
    },

    getAccount: () => {
        return api.provider().account.get();
    },

    getCurrentSession: () => {
        return api.provider().account.getSession('current');
    },

    createSession: (email, password) => {
        return api.provider().account.createSession(email, password);
    },

    deleteCurrentSession: () => {
        return api.provider().account.deleteSession('current');
    },

    login: (email, password) => {
        return api.createSession(email, password).then((session) => {
            return api.getAccount().then((account) => {
                return {
                    account: account,
                };
            });
        });
    },

    /**
     * Database
     */
    listDocuments: (collectionId, queries, limit, offset, cursor, cursorDirection, orderAttributes, orderTypes) => {
        return api.provider().database.listDocuments(collectionId, queries, limit, offset, cursor, cursorDirection, orderAttributes, orderTypes)
    },

    getDocument: (collectionId, documentId) => {
        return api.provider().database.getDocument(collectionId, documentId);
    },


    /**
     * Functions
     */
    createExecution: (functionId, data, isAsync = true) => {
        return api.provider().functions.createExecution(functionId, data, isAsync);
    },

    getExecution: (functionId, executionId) => {
        return api.provider().functions.getExecution(functionId, executionId);
    },

};

export default api;
