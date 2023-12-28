import * as t from '../../test/log.mjs';

import { DOTENV } from "../../var.mjs";
import { Models } from "../../databases/index.mjs";
import { loginMatching } from "../../utils/login.validation.mjs";

export const adminLogin_post = async (req , res) => {
    t.postLog('login admin');
    const adminDatabase = await Models.Admin.find()
    const result = loginMatching(req.body , adminDatabase);

    if (result.status) {
        console.log(`${req.body.username} have logged in`);
        res.cookie(DOTENV.ADMIN_TOKEN , result.loginData , {
            maxAge : 3_600_000 * 24,
            httpOnly : true,
        })
        return res.redirect('/admin-dashboard/' + result.loginData._id);
    };
    req.flash('login-message' , result.message);
    res.redirect('/admin-login');
};