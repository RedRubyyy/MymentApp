import * as t from '../../test/log.mjs';

import * as database from '../../databases/index.mjs';
import { DOTENV , userCookie } from '../../var.mjs';


export default async function adminLogout_post (req , res , next) {
    t.postLog('logout');
    const databaseMatchIn = await database.dataIncludes('Admin' , {_id : userCookie? userCookie._id : undefined})
    console.log('logout ' + databaseMatchIn)
    if (userCookie && databaseMatchIn) {
        console.log('next')
        res.clearCookie(DOTENV.ADMIN_TOKEN)
        return res.redirect('/admin-login')
    };
    return next();
}