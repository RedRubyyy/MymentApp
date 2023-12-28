import * as t from '../../test/log.mjs';
export default function domain_route (req , res) {
    t.routeLog('domain')
    res.render('index.ejs');
};