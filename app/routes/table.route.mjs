import * as t from '../../test/log.mjs';
import * as database from '../../databases/index.mjs';

export default async function table_route (req , res) {
    t.routeLog('data table');
    const clientDatabase = await database.getData.client().catch(error => undefined);
    if (!clientDatabase) {
        t.errorLog('data gagal connect');
        return next();
    };
    res.render('table.ejs' , {clientDatabase,}) ;
}