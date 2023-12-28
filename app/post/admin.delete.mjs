import * as t from '../../test/log.mjs';

import { userCookie } from "../../var.mjs";
import { deleteData } from "../../utils/control.delete.mjs";

export async function adminDelete_post (req , res) {
    t.postLog('delete data');
    const {id , username} = req.body;
    const { message } = await deleteData(id , username);

    req.flash('message' , message);
    res.redirect('/admin-dashboard/' + userCookie._id);

};