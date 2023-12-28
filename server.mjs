// PACKAGE NPM
import express from "express";
import session from "express-session";
import flash from 'connect-flash';
import cookieParser from "cookie-parser";
// INTERNAL MODULE
import adminVerified from "./utils/route.verified.mjs"
import { RELATIVE_ROOT , staticExt , DOTENV ,sessionConfig } from "./var.mjs";
// POST METHOD ROUTE
import { adminLogin_post } from "./app/post/admin.login.mjs";
import {adminCreate_post} from './app/post/admin.create.mjs';
import {adminUpdate_post} from './app/post/admin.update.mjs';
import {adminDelete_post} from './app/post/admin.delete.mjs';
import adminLogout_post from './app/post/admin.logout.mjs';
// GET METHOD ROUTE
import domain_route from './app/routes/domain.route.mjs';
import login_route from './app/routes/login.route.mjs';
import admin_route from './app/routes/admin.route.mjs';
import table_route from './app/routes/table.route.mjs';
import detail_route from './app/routes/detail.route.mjs';
// MY MIDDLEWARE
import cookie_middleware from './app/middleware/cookie.mid.mjs';
import connect_middleware from './app/middleware/connect.mid.mjs';

// EXPRESS INPORTANT
const app = express();
const port = process.env.PORT || 3000;

// CONFIG VIEW ENGINE
app.set('view-engine' , 'ejs')
app.set('views' , RELATIVE_ROOT + '/public/views');

// CONFIG FLASH MESSAGE
app.use(cookieParser(DOTENV.SESSION_KEY));
app.use(session(sessionConfig));
app.use(flash());
// EXPRESS MIDDLEWARE CONFIGURE
app.use(express.static('./public', { extensions : staticExt} ));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

// MY MIDDLEWARE
app.use(cookie_middleware);
app.use(connect_middleware);

app.get('/' , domain_route)
app.get('/admin-login' , login_route)
app.get('/admin-dashboard/:id' , adminVerified , admin_route)
app.get('/data-table' , table_route)
app.get('/client-detail/:id' , detail_route);

// POST METHOD

app.post('/admin-login/admin-dashboard' , adminLogin_post)
app.post('/admin-dashboard/create-data-client' , adminCreate_post)
app.post('/admin-dashboard/update-data-client/' , adminUpdate_post)
app.post('/admin-dashboard/delete-data-client' , adminDelete_post)
app.post('/admin-logout' , adminLogout_post)

// PAGE NOT FOUND
app.use('/', function (req, res, next) {
    res.status(404).send('<h1>Not Found Yah Kids : )').end();
});

app.listen(port ,function () {
    console.log(`server listen on port ${port} , click to jump on site http://localhost:${port}`);
});