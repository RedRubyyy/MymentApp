import { Models } from "../databases/index.mjs";
import { executeControl } from "./execute.control.mjs";

export async function deleteData (idQuery , nameQuery) {
    const query  = { _id : idQuery , username : nameQuery, };
    const findData = await Models.Client.findOne(query)
        .then(data => data);
    console.log(findData)
    if (!findData) return {
        message : "Data tidak ditemukan",
        status : false,
    };
    if (!idQuery || !nameQuery) return {
        message : "Data dimodifikasi.",
        status : false,        
    };

    const deleteClient = await Models.Client.findOneAndDelete(query);
    return executeControl(deleteClient , 'hapus');
};

