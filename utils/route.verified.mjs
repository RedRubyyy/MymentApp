import { userCookie} from "../var.mjs";
import { Models } from "../databases/index.mjs";

export default async function adminVerified (req , res , next) {
    const verified = await matchAdminData(req.params.id);
    verified ? next() : res.redirect('/admin-login');
};

async function matchAdminData (idParams) {
    if (userCookie == undefined || idParams !== userCookie?._id) return false;
    const adminFind = await Models.Admin.findOne({_id : idParams})
        .catch(error => undefined);
    if (adminFind) return true; 
};