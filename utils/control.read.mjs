import { Models } from "../databases/index.mjs";

export default async function readData (id) {
    const clientFind = await Models.Client.findOne({_id : id})
        .then(data => data)
        .catch(error => false);
    return clientFind;
};