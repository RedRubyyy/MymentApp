import * as t from '../../test/log.mjs';
import { setCookie, userCookie , DOTENV} from "../../var.mjs";

export default function cookie_middleware (req , res , next) {
    const innerCookie = req.cookies[DOTENV.ADMIN_TOKEN];
    t.middlewareLog(innerCookie ? 'cookie middleware on cookie' : 'cookie middleware no cookie');
    setCookie(innerCookie);
    next ();
};