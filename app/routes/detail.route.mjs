import readData from "../../utils/control.read.mjs";
import * as t from '../../test/log.mjs';

export default async function detail_route (req , res) {
    t.routeLog('detail');
    const result = await readData(req.params.id)
    if (!result) {
        t.errorLog('pembacaan data gagal');
        return next ();
    } 
    res.render('detail.ejs' , {data : result});
}