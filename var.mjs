// ENVIRONMENT IMPORT
import 'dotenv/config';

// ENVIRONMENT VARIABLE
export const DOTENV = process.env;
export const RELATIVE_ROOT = process.cwd();

export let userCookie = undefined;
export function setCookie (value) {
    userCookie = value;
};

// PUBLIC VARIABLE
export const imagePath = `${RELATIVE_ROOT}/public/img/dark-classroom-for-backgound-lite-compressed.jpg`
export const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
export const staticExt = ['html' , 'js' , 'mjs' , 'css'];
export const updateMethod = ['Tambah','Kurang' , 'Setel'];

// OBJECT KEYS VARIABLE
export const keys = {
    ['admin-login'] : ['username' , 'password'],
    ['create-client'] : ['username', 'savings', 'unixcode'],
};

// DATABASE REPORT CONNETTION
export const reportConnection = {
    message : 'Not connection', 
    status : false,
};

// CONFIG
export const sessionConfig = {
    secret : DOTENV.SESSION_KEY,
    saveUninitialized : false,
    resave : true,
    httpOnly : true,
};