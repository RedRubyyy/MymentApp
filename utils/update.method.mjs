import { executeControl } from "./execute.control.mjs";
import { Models } from "../databases/index.mjs";

export async function updateTambah ({newNominal , data , adminUsername , query}) {
    const newSaving = Number(data.savings) + newNominal;
    
    data.savings = newSaving;
    data.history.push({
        title: `Data nominal ditambah ${newNominal.toLocaleString('id-ID')} dan diverivikasi oleh ${adminUsername}`,
        savings: newSaving < 0 ? 0 : newSaving,
        date: new Date(Date.now()),
    })

    const updateClientData = await Models.Client.findOneAndUpdate(query , data);
    return executeControl(updateClientData , 'perbarui');
};

export async function updateKurang ({newNominal , data , adminUsername , query}) {
    let newSaving = Number(data.savings) - newNominal;
    
    data.savings = newSaving < 0 ? 0 : newSaving;
    data.history.push({
        title: `Data nominal dikurangi ${newNominal.toLocaleString('id-ID')} dan diverifikasi oleh ${adminUsername}`,
        savings: newSaving < 0 ? 0 : newSaving,
        date: new Date(Date.now()),
    });

    const updateClientData = await Models.Client.findOneAndUpdate(query , data);
    return executeControl(updateClientData , 'perbarui');
};

export async function setelData ({newNominal , data , adminUsername , query}) {
    data.savings = newNominal;
    data.history.push({
        title: `Data nominal disetel menjadi ${newNominal} dan diverifikasi oleh ${adminUsername}`,
        savings: newNominal < 0 ? 0 : newNominal,
        date: new Date(Date.now()),
    });

    const updateClientData = await Models.Client.findOneAndUpdate(query , data);
    return executeControl(updateClientData , 'setel.');
};