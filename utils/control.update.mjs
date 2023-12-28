import { Models } from "../databases/index.mjs";
import { updateMethod } from "../var.mjs";
import { updateKurang , updateTambah , setelData } from "./update.method.mjs";

export async function updateData (dataSend , adminUsername) {
    const { id , method , nominal , username } = dataSend;
    const query = { _id : id , username : username };
    
    const data = await Models.Client.findOne(query)
        .then(data => data)
        .catch (error => false);

    
    if (data && updateMethod.includes(method)) {
        const newNominal = Number(nominal.replaceAll('.' , ''));
        const parameter = {newNominal , data , adminUsername , query}
        if (newNominal == NaN) return {
            message : "Nominal mengandung karakter yang dilarang.",
            status : false
        }
        switch (method) {
            case updateMethod[0] : 
                return updateTambah(parameter); 
            break;
            case updateMethod[1] : 
                return updateKurang(parameter);
            break;
            case updateMethod[2] : 
                return setelData(parameter);
            break;
        };
    };
    return {
        message : "Data tidak valid. Mohon jangan memodifikasi data!.",
        status : false,
    }; 
};


