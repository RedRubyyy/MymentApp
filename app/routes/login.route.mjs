import * as t from '../../test/log.mjs';
import { userCookie } from "../../var.mjs";
import * as database from '../../databases/index.mjs';

export default async function login_route (req , res) {
    t.routeLog('login');
    const databaseMatchIn = await database.dataIncludes('Admin' , {_id : userCookie? userCookie._id : undefined});
    if (databaseMatchIn && userCookie) {
        t.processLog('login ke cookie ' + userCookie.username);
        return res.redirect('/admin-dashboard/' + userCookie._id);
    };
    res.render('login.ejs' , {message : req.flash('login-message')});
};