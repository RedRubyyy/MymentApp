import * as t from '../../test/log.mjs';
import { userCookie } from "../../var.mjs";
import * as database from '../../databases/index.mjs';

export default async function admin_route (req , res , next) {
    t.routeLog('admin dashboard');
    const clientDatabase = await database.getData.client().catch(error => undefined);
    const dataSend = {
        message : req.flash('message'), 
        id : userCookie._id,
        clientDatabase : clientDatabase,
    };
    if (!clientDatabase) {
        t.errorLog('data gagal connect');
        return next();
    };
    res.render('admin.ejs' , dataSend)
};