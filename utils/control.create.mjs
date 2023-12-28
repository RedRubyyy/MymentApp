import validator from "validator";

import { Models } from "../databases/index.mjs";
import { executeControl } from "./execute.control.mjs";

export async function createData (dataSend , {username}) {
    const validations = {
        savings : Number(dataSend.savings.replaceAll('.' , '')) !== NaN,
        usernmae : validator.isAlpha(dataSend.username , 'en-US' , {ignore : /[\s.]+/g}),
    };
    const validation_keys = Object.keys(validations);
    const final_validation = validation_keys.every(key =>  validations[key] == true);

    if (final_validation) {
        const savingsNumber = Number(dataSend.savings.replaceAll('.' , ''));
        const history = { 
            title : "Data ditambahkan atau dibuat oleh " + username, 
            savings : savingsNumber,
            date : new Date(Date.now()),
        };
        const createResult = await Models.Client.create({
            username : dataSend.username,
            history : [history],
            savings : savingsNumber,
        });
        return executeControl (createResult , 'tambahkan')
    };
    return {
        message : "Gagal menambahkan data. (Data tidak valid)." , 
        status : false
    }
};
