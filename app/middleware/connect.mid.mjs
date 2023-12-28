import { reportConnection } from "../../var.mjs";
import * as database from '../../databases/index.mjs';
import * as t from '../../test/log.mjs';

export default async function connect_middleware (req , res , next) {
    t.middlewareLog('connect middleware.');
    if (!reportConnection.status) {
        t.processLog('database belum connect.');
        await database.connect()
            .catch(error => res.redirect('/trouble-databse'));
    };
    next();
};