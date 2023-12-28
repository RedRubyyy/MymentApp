import * as t from '../../test/log.mjs';

import { DOTENV } from "../../var.mjs";
import { updateData } from "../../utils/control.update.mjs";

export async function adminUpdate_post (req, res) {
    const cookie = req.cookies[DOTENV.ADMIN_TOKEN];
    t.postLog('update data')
    if (req.body.unixcode != cookie.unixcode) {
        req.flash('message' , 'Unixcode salah.');
        return res.redirect('/admin-dashboard/' + cookie._id);
    };
    
    const { message }= await updateData(req.body , cookie.username);
    req.flash('message' , message);
    res.redirect('/admin-dashboard/' + cookie._id);
};