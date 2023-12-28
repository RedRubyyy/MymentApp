import * as t from '../../test/log.mjs';

import { keys , userCookie} from "../../var.mjs";
import { createData } from "../../utils/control.create.mjs";


export async function adminCreate_post (req , res) {
    t.postLog('create data');
    const dataSendKeys = Object.keys(req.body);
    const validation = keys["create-client"].every( (key , index) => key == dataSendKeys[index]);

    console.log(userCookie)
    if (req.body.unixcode == userCookie.unixcode) {
        if (!validation) {
            t.processLog('gagal tambahkan data');
            req.flash('message' , 'Gagal menambahkan terjadi manipulasi data.');
            return res.redirect('/admin-dashboard/' + userCookie._id)
        }
        const result = await createData(req.body , userCookie);
        req.flash('message' , result.message)
        return res.redirect('/admin-dashboard/' + userCookie._id)
    };
    t.processLog('gagal tambahkan data');
    req.flash('message' , 'Gagal menambahkan. Unixcode salah.');
    return res.redirect('/admin-dashboard/' + userCookie._id)

};