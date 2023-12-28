// INTERNAL MODULE
import { Client , Admin} from './models.mjs';
import { check } from './check.data.mjs';
import connectDatabase from './connect.mjs';

export const Models = {
    Client : Client(),
    Admin : Admin()
};
export const getData = {
    client : function () {
        return Models.Client.find();
    },
    admin : function () {
        return Models.Admin.find();
    },
};
export const dataIncludes = check(Models);
export const connect = connectDatabase;